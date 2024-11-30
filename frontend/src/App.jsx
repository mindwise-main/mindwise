import { createContext, useEffect, useState } from 'react';
import { lookInSession } from './common/session';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SurveyModules from './pages/Survey';
import QuestionForm from './pages/QuestionForm';
import Consultation from './pages/Consultation';
import Chatbot from './pages/Chatbot';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/userAuth.page'; 
import Explore from './pages/Explore';


export const UserContext = createContext({});

const App = () => {

  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/survey" element={<SurveyModules />} />
        <Route path="/survey/:moduleId" element={<QuestionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<UserAuth type="sign-up" />} /> {/* Sign Up route */}
        <Route path="/login" element={<UserAuth type="log-in" />} /> {/* Log In route */}
        <Route path="/explore" element={<Explore />} />
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
