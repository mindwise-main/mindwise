// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home2 from './pages/Home2'
import Home from './pages/Home'
import SurveyModules from './pages/Survey'
import QuestionForm from './pages/QuestionForm'
import Consultation from './pages/Consultation'
import Chatbot from './pages/Chatbot'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/survey" element={<SurveyModules />} />
        <Route path="/survey/:moduleId" element={<QuestionForm />} />
      </Routes>
    </Router>
  )
}

export default App
