import './App.css';
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AWS, { AutoScaling } from 'aws-sdk';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  LandingPage,
  NavHeader,
  FooterLinks,
  PhoneNumberAuthentication,
  UpdatedFeedback,
  EndingPage,
  AllIncidents,
} from './ui-components';
import config from './amplifyconfiguration.json';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { listAgents, listCustomers, listIncidents, listManagers } from './graphql/queries';
import RecentCalls from "./components/calls/RecentCalls.js"
import { ConnectClient, SearchContactsCommand } from "@aws-sdk/client-connect";
import SurveyComponent from './components/survey/SurveyComponent';
import SurveyDashboardComponent from './components/surveyData/SurveyDashboardComponent';

const client = generateClient();
Amplify.configure(config);

// const creds = {
//   accessKeyId: 'AKIA5H3OQSULEAJNR3KW',
//   secretAccessKey: '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',
// }
// const Connect = new ConnectClient({
//   region: "us-east-1",
//   credentials: creds
// });

async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    console.log(userAttributes);
    return userAttributes;
  } catch (error) {
    console.log(error);
    return {};
  }
}

function App({ signOut, user }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const maxDurationInWeeks = 7;
        const currentTime = new Date();
        const startTime = new Date(currentTime - maxDurationInWeeks * 7 * 24 * 60 * 60 * 1000);
        const endTime = currentTime;

        const user = await fetchUserAttributes();
        const phoneNumber = user.phone_number;
        const input = {
          InstanceId: "9e272066-96ec-42ed-8b95-481f179803a8", //Amazon Connect instance 
          // SearchCriteria:{
          //   SearchableContactAttributes: { 
          //     Criteria: [ 
          //       { 
          //         Key: "Phone Number", 
          //         Values: ["+14042420001"],
          //       },
          //     ],
          //     MatchType: "MATCH_ANY"
          //   }},
          TimeRange: {
            StartTime: startTime,
            EndTime: endTime,
            Type: "INITIATION_TIMESTAMP"
          },
          Sort: {
            FieldName: "INITIATION_TIMESTAMP",
            Order: "ASCENDING"
          },
        };

        const userSearch = {
          InstanceId: "9e272066-96ec-42ed-8b95-481f179803a8"
        };



        const contactCommand = new SearchContactsCommand(input);
        const contactResponse = await Connect.send(contactCommand);
        const calls = contactResponse.Contacts.filter(x => x.AgentInfo.Id !== undefined); // Filter out calls that did not have an agent
        setRecentCalls(calls);
        console.log(calls);

        const userCommand = new SearchUsersCommand(userSearch);
        const userResponse = await Connect.send(userCommand);
        // console.log(userResponse);

        const userDescribeResponse = []
        for (let i = 0; i < userResponse.Users.length; i++) {

          const userDescribeInput = {
            InstanceId: "9e272066-96ec-42ed-8b95-481f179803a8",
            UserId: userResponse.Users[i].Id
          };
          const userDescribeCommand = new DescribeUserCommand(userDescribeInput);
          userDescribeResponse.push(await Connect.send(userDescribeCommand));

        }

        // console.log(userDescribeResponse);


        const managerData = await client.graphql({ query: listManagers });
        const managerList = managerData.data.listManagers.items;
        // console.log("Managers: ", managerList);




        for (let i = 0; i < userDescribeResponse.length; i++) {
          console.log(i);
          const agentData = await client.graphql({ query: listAgents });
          const agentList = agentData.data.listAgents.items;
          console.log("Agents: ", agentList);
          let index = agentList.findIndex((agent) => agent.id === userDescribeResponse[i].User.Id);
          if (index === -1) {
            console.log("else block, user ID:" + userDescribeResponse[i].User.Id);
            var mobile = "+12345678901"; // placeholder phone number if user does not have one listed
            if (userDescribeResponse[i].User.IdentityInfo.Mobile !== undefined) {
              mobile = userDescribeResponse[i].User.IdentityInfo.Mobile;
            }
            const random = Math.floor(Math.random() * managerList.length);

            const agentDetails = {
              id: userDescribeResponse[i].User.Id,
              name: userDescribeResponse[i].User.IdentityInfo.FirstName + " " + userDescribeResponse[i].User.IdentityInfo.LastName,
              email: userDescribeResponse[i].User.IdentityInfo.Email,
              phone: mobile,
              managerID: managerList[random].id,
            };

            console.log(agentDetails);

            const newAgent = await client.graphql({
              query: createAgent,
              variables: { input: agentDetails }
            });

          } else {
            console.log("good")
            continue;
          }
        }

        const customerData = await client.graphql({ query: listCustomers });
        const customerList = customerData.data.listCustomers.items;
        // console.log("Reached customer fetching.")
        // for (const customer in customerList) {
        //   if (user.name === customer.name) {
        //     break;
        //   } else {
        //     const customerDetails = {
        //       id: uuidv4(),
        //       name: user.name,
        //       phone: user.phone_number,
        //       email: user.email,
        //     };

        //     const newCustomer = await client.graphql({
        //       query: createCustomer,
        //       variables: { input: customerDetails }
        //     });
        //   }
        // }


        for (let i = 0; i < calls.length; i++) {
          console.log("Reached incident fetching.")

          const incidentData = await client.graphql({ query: listIncidents });
          const incidentList = incidentData.data.listIncidents.items;
          const agentData = await client.graphql({ query: listAgents });
          const agentList = agentData.data.listAgents.items;

          let custIdx = customerList.findIndex((customer) => customer.name === user.name);
          let incIndex = incidentList.findIndex((incident) => incident.id === calls[i].Id);

          if (incIndex === -1) { // incident not in list
            let agentIdx = agentList.findIndex((agent) => agent.id === calls[i].AgentInfo.Id);
            const incID = calls[i].Id;
            const agentID = calls[i].AgentInfo.Id;
            const callStartTime = calls[i].InitiationTimestamp.toISOString().slice(0, -1).split('T')[1];
            const callStartDate = calls[i].InitiationTimestamp.toISOString().split('T')[0];
            const callDetails = "Connect Call with " + agentList[agentIdx].name;
            const escalate = false;
            const resolution = "";
            const summary = callDetails;
            const endDate = calls[i].DisconnectTimestamp.toISOString().split('T')[0];
            const callResponseTime = calls[i].AgentInfo.ConnectedToAgentTimestamp.toISOString().slice(0, -1).split('T')[1];
            const resolved = true;
            const agentName = agentList[agentIdx].name;

            console.log(callStartTime);

            const incidentDetails = {
              id: incID,
              customerID: customerList[custIdx].id,
              agentID: agentList[agentIdx].id,
              callStartTime: callStartTime,
              startDate: callStartDate,
              incidentDetails: callDetails,
              escalate: escalate,
              resolutionDetails: resolution,
              summary: summary,
              endDate: endDate,
              callResponseTime: callResponseTime,
              resolved: resolved,
              agentName: agentName,
            };

            const newIncident = await client.graphql({
              query: createIncident,
              variables: { input: incidentDetails }
            });

          } else {
            break;
          }
        }





      } catch (error) {
        console.error('Error fetching recent calls:', error);
      }


    }





    fetchData();
  }, []);


  const [agents, setAgents] = useState([]);
  const [managers, setManagers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchAgents();
  }, []);

  useEffect(() => {
    fetchManagers();
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const incidentData = await client.graphql({ query: listIncidents });
      const newIncidentList = incidentData.data.listIncidents.items;
      setIncidents([newIncidentList]);
    } catch (error) {
      console.log('error on fetching incidents: ', error)
    }
  }

  const fetchAgents = async () => {
    try {
      const agentData = await client.graphql({ query: listAgents });
      const agentList = agentData.data.listAgents.items;
      setAgents([agentList]);
    } catch (error) {
      console.log('error on fetching agents: ', error)
    }
  }

  const fetchCustomers = async () => {
    try {
      const customerData = await client.graphql({ query: listCustomers });
      const customerList = customerData.data.listCustomers.items;
      setCustomers([customerList]);
    } catch (error) {
      console.log('error on fetching customers: ', error)
    }
  }

  const fetchManagers = async () => {
    try {
      const managerData = await client.graphql({ query: listManagers });
      const managerList = managerData.data.listManagers.items;
      setManagers([managerList]);
    } catch (error) {
      console.log('error on fetching managers: ', error)
    }
  }

  const [phone_number, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchAttributes = async () => {
      const userAttributes = await handleFetchUserAttributes();
      if (userAttributes && userAttributes.phone_number) {
        setPhoneNumber(userAttributes.phone_number);
      }
    };

    fetchAttributes();
  }, []);

  const navBarOverrides = {
    "User": {
      children: ""
    },

    "NavHeader": {
      justifyContent: "space-around"
    },

    "Landing Page": {
      children: "Home"
    }
  }
  const usr = user.username;
  const displayname = user.username[0].toUpperCase() + usr.slice(1)

  const landingpageOverrides = {
    "image": {
      "src": "https://t3.ftcdn.net/jpg/03/76/66/16/360_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6.jpg"
    },
    "Left": {
      "width": "65%"
    },
    "Heading": {
      children: "Welcome " + displayname + "!"
    },
    "Body": {
      children: "Thank you for creating an account and singing in. This app allows you to leave detailed feedback on your recent AWS Connect powered customer service interactions"
    },
    "LandingPage": {
      width: "auto",
      length: "auto"
    },
    "Eyebrow": {
      fontSize: "24px"
    }
  }
  const endingpageOverrides = {
    "UpdatedFeedback": {
      width: "auto",
      height: "auto",
      padding: "1%"
    }
  }

  return (
    <Router>
      <div className="App">
        <NavHeader overrides={navBarOverrides} />
        <Routes>
          <Route path="/*" element={<LandingPage flex={"1"} padding={"4%"} overrides={landingpageOverrides} />} />
          <Route path="/callhistory" element={<AllIncidents />} />
          <Route path="/feedback" element={<SurveyComponent />} />
          <Route path="/feedback-data" element={<SurveyDashboardComponent />} />
          <Route path="/ending" element={<EndingPage flex={"1"} padding={"1%"} overrides={endingpageOverrides} />} />
        </Routes>
        <FooterLinks width={"100%"} padding={"1.5%"} flex-shrink={"0"} />
      </div>
    </Router>
  );
}


{/* <FooterLinks width={"100%"} padding={"1.5%"} flex-shrink={"0"}/> */ }
// <Router>
// <div className="App">
// <NavHeader overrides={navBarOverrides} />
//   <Routes>
//   <Route path="/" element={<LandingPage flex={"1"} padding={"4%"} overrides={landingpageOverrides}/>} />

//   </Routes>
//   <FooterLinks width={"100%"} padding={"1.5%"} flex-shrink={"0"}/>
// </div>

// </Router>
{/* <>
      <div className="App">
        {user.username}
      </div>
      <div>
        Phone Number: {phone_number}
      </div>
      <button onClick={signOut}>Sign out</button>
    </> */}
export default withAuthenticator(App);
