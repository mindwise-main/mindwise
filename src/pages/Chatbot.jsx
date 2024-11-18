import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const generateBotResponse = (input) => {
    // Basic simulated responses for now
    if (input.toLowerCase().includes('stress')) return 'Try taking deep breaths. Can I guide you through a quick exercise?';
    if (input.toLowerCase().includes('help')) return 'I’m here to help. Could you tell me more about what you’re feeling?';
    return "I'm not sure how to respond to that. Could you please clarify?";
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 text-teal-600">Chat with MindWise</h1>
      <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl">
        Share your thoughts or concerns, and I’ll do my best to assist you.
      </p>

      <div className="flex flex-col bg-white shadow-lg rounded-lg w-full max-w-3xl h-[70vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-white ${
                  message.sender === 'user' ? 'bg-teal-600' : 'bg-gray-400'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-300 flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            onClick={handleSend}
            className="bg-teal-600 text-white px-6 py-2 rounded-r-lg hover:bg-teal-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chatbot;
