import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import dotenv from 'dotenv';

dotenv.config();

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  // Tracks whether a new message has been added
  const isNewMessageRef = useRef(false);

  const fetchBotResponse = async (input) => {
    // const apiKey = process.env.REACT_APP_CHAT_BOT_API_KEY;
    const apiKey = "";
    const channelToken = "12";
    const url = `https://payload.vextapp.com/hook/DU21QQ13KQ/catch/${channelToken}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Apikey: `Api-Key ${apiKey}`,
        },
        body: JSON.stringify({ payload: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the API");
      }

      const data = await response.json();

      if (data && data.text) {
        return data.text;
      } else {
        return "Sorry, I couldn't get a response from the server.";
      }
    } catch (error) {
      console.error("Error:", error.message);
      return "Sorry, something went wrong.";
    }
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    isNewMessageRef.current = true; // Flag as a new message
    const input = userInput; // Preserve input for the API call
    setUserInput("");

    try {
      const botResponse = await fetchBotResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      isNewMessageRef.current = true; // Flag bot response as a new message
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't process your request." },
      ]);
      isNewMessageRef.current = true; // Flag bot response as a new message
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    // Only scroll to the bottom if a new message was added
    if (isNewMessageRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      isNewMessageRef.current = false; // Reset the flag
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-grey flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-teal-600">MindWise Chat</h1>
          <p className="text-lg text-gray-700 mt-2">
            Let’s talk. Share your thoughts or concerns with me.
          </p>
        </div>

        {/* Chat Box */}
        <div className="flex flex-col bg-white shadow-xl rounded-lg w-full max-w-4xl h-[70vh] mx-auto overflow-hidden">
          {/* Chat Messages */}
          <div className="p-6 overflow-y-auto space-y-4 bg-gray-50 flex-grow">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-sm px-4 py-2 rounded-xl shadow ${
                    message.sender === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center p-4 bg-white border-t border-grey-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-grey-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={handleSend}
              className="bg-teal-600 text-white px-6 py-3 rounded-r-lg hover:bg-teal-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Chatbot;