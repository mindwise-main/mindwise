import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Consultation from './pages/Consultation'
import Chatbot from './pages/Chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  )
}

export default App
