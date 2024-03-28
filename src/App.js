import './App.css';
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AWS from 'aws-sdk';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  LandingPage,
  PhoneNumberAuthentication,
  FeedbackSurvey,
  EndingPage,
  AllIncidents,
} from './ui-components';
import config from './amplifyconfiguration.json';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { listAgents, listCustomers, listIncidents, listManagers } from './graphql/queries';
const client = generateClient();


Amplify.configure(config);


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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/phone-auth" element={<PhoneNumberAuthentication />} />
          <Route path="/callhistory" element={<AllIncidents />} />
          <Route path="/feedback" element={<FeedbackSurvey />} />
          <Route path="/ending" element={<EndingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

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
