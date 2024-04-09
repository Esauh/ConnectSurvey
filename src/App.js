import './App.css';
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react';
import AWS, { AutoScaling } from 'aws-sdk';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  LandingPage,
  NavHeader,
  FooterLinks,
  UpdatedFeedback,
  EndingPage,
  AllIncidents,
} from './ui-components';
import config from './amplifyconfiguration.json';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { listAgents, listCustomers, listIncidents, listManagers } from './graphql/queries';
import RecentCalls from "./components/calls/RecentCalls.js"
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
  // const [recentCalls, setRecentCalls] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const maxDurationInWeeks = 7;
  //       const currentTime = new Date();
  //       const startTime = new Date(currentTime - maxDurationInWeeks * 7 * 24 * 60 * 60 * 1000);
  //       const endTime = currentTime;
        
  //       const user = await fetchUserAttributes();
  //       const phoneNumber = user.phone_number;
  //       const input = {
  //         InstanceId: "9e272066-96ec-42ed-8b95-481f179803a8", //Amazon Connect instance 
  //         // SearchCriteria:{
  //         //   SearchableContactAttributes: { 
  //         //     Criteria: [ 
  //         //       { 
  //         //         Key: "Phone Number", 
  //         //         Values: ["+14042420001"],
  //         //       },
  //         //     ],
  //         //     MatchType: "MATCH_ANY"
  //         //   }},
  //         TimeRange: {
  //           StartTime: startTime,
  //           EndTime: endTime,
  //           Type: "INITIATION_TIMESTAMP"
  //       },
  //       Sort: { 
  //         FieldName: "INITIATION_TIMESTAMP",
  //         Order: "ASCENDING"
  //       },
  //     };
  //       const command = new SearchContactsCommand(input);
  //       const response = await Connect.send(command);
  //       setRecentCalls(response);
  //       console.log(response)
  //     } catch (error) {
  //       console.error('Error fetching recent calls:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);


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
      const incidentList = incidentData.data.listIncidents.items;
      setIncidents([incidentList]);
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

  const navBarOverrides ={
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
    "image":{
      "src": "https://t3.ftcdn.net/jpg/03/76/66/16/360_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6.jpg"
    },
    "Left":{
      "width": "65%"
    },
    "Heading":{
     children: "Welcome " + displayname + "!"
    },
    "Body":{
      children: "Thank you for creating an account and singing in. This app allows you to leave detailed feedback on your recent AWS Connect powered customer service interactions"
    },
    "LandingPage":{
      width: "auto",
      length: "auto"
    },
    "Eyebrow":{
      fontSize: "24px"
    }
    }
    const endingpageOverrides = {
      "UpdatedFeedback":{
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
          <Route path="/*" element={<LandingPage flex={"1"} padding={"4%"} overrides={landingpageOverrides}/>} />
          <Route path="/callhistory" element={<AllIncidents />} />
          <Route path="/feedback" element={<SurveyComponent />} />
          <Route path="/feedback-data" element={<SurveyDashboardComponent />} />
          <Route path="/ending" element={<EndingPage flex={"1"} padding={"1%"} overrides={endingpageOverrides} />} />
        </Routes>
        <FooterLinks width={"100%"} padding={"1.5%"} flex-shrink={"0"}/>
      </div>
</Router> 
  );
}


{/* <FooterLinks width={"100%"} padding={"1.5%"} flex-shrink={"0"}/> */}
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
