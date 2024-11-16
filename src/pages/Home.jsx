// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <header className="text-center py-20 bg-teal-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to MindWise</h2>
        <p className="text-lg mb-6">Your partner in mental well-being.</p>
        <Link to="/consultation" className="px-6 py-3 bg-white text-teal-600 font-semibold rounded hover:bg-gray-100">
          Get Started
        </Link>
      </header>
      
      <section className="flex flex-col md:flex-row justify-around items-center py-16 bg-teal-100">
        <div className="text-center p-4 max-w-xs">
          <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
          <p className="text-gray-700">Schedule your meeting with a mental health expert online.</p>
        </div>
        <div className="text-center p-4 max-w-xs">
          <h3 className="text-2xl font-semibold mb-2">Survey Modules</h3>
          <p className="text-gray-700">Take assessments like PHQ-9 and GAD-7 to evaluate your mental health.</p>
        </div>
        <div className="text-center p-4 max-w-xs">
          <h3 className="text-2xl font-semibold mb-2">Psychiatrist Chatbot</h3>
          <p className="text-gray-700">Get immediate assistance for stress or panic relief through our chatbot.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
