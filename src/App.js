import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  LandingPage,
  PhoneNumberAuthentication,
  FeedbackSurvey,
  EndingPage
} from './ui-components';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/phone-auth" element={<PhoneNumberAuthentication />} />
          <Route path="/feedback" element={<FeedbackSurvey />} />
          <Route path="/ending" element={<EndingPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
