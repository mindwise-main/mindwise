import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SurveyModules from './pages/Survey';
import QuestionForm from './pages/QuestionForm';
import Consultation from './pages/Consultation';
import Chatbot from './pages/Chatbot';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/userAuth.page'; // Import UserAuth

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/survey" element={<SurveyModules />} />
        <Route path="/survey/:moduleId" element={<QuestionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<UserAuth type="sign-up" />} /> {/* Sign Up route */}
        <Route path="/login" element={<UserAuth type="log-in" />} /> {/* Log In route */}
      </Routes>
    </Router>
  );
}

export default App;
