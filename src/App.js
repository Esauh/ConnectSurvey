import './App.css';
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify'
import { Auth } from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';
import AWS from 'aws-sdk';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  LandingPage,
  PhoneNumberAuthentication,
  FeedbackSurvey,
  EndingPage,
  CallHistory,
} from './ui-components';
import config from './amplifyconfiguration.json';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';

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
          <Route path="/callhistory" element={<CallHistory />} />
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
