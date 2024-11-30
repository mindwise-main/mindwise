import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar"; // Install via `npm install react-calendar`
import "react-calendar/dist/Calendar.css";
import Footer from "../components/Footer";

const Consultation = () => {
  const [step, setStep] = useState(1); // To track the current step
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    gender: "",
    consultingFor: "myself",
    age: "",
    problemDescription: "",
    report: null,
    mode: "online",
    selectedDate: "",
  });

  const [showCalendar, setShowCalendar] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, report: e.target.files[0] });
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setFormData({ ...formData, selectedDate: date.toLocaleDateString() });
    setShowCalendar(false); // Close calendar after selecting a date
  };

  // Render timeline
  const renderTimeline = () => {
    const steps = ["User Details", "Problem", "Date Schedule", "Payment"];
    return (
      <div className="flex gap-8 justify-center items-center mb-8">
        {steps.map((label, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col items-center ${
                index + 1 <= step ? "text-teal-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  index + 1 <= step ? "bg-teal-600 text-white" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-sm mt-2">{label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-grow h-1 ${
                  index + 1 < step ? "bg-teal-600" : "bg-gray-400"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Render step content
  const renderStepContent = () => {
    switch (step) {
      case 1: // User Details
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600">
              User Details
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );
      case 2: // Problem
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600">Problem</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="consultingFor"
                    value="myself"
                    checked={formData.consultingFor === "myself"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Myself
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="consultingFor"
                    value="someone-else"
                    checked={formData.consultingFor === "someone-else"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Someone Else
                </label>
              </div>
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                name="problemDescription"
                placeholder="Describe your problem"
                value={formData.problemDescription}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        );
      case 3: // Date Schedule
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600">
              Date Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="online"
                    checked={formData.mode === "online"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Online
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="offline"
                    checked={formData.mode === "offline"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Offline
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="selectedDate"
                  placeholder="MM/DD/YYYY"
                  value={formData.selectedDate}
                  // format="dd/MM/yyyy"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <FaCalendarAlt
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                />
                {showCalendar && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-10">
                    <Calendar onChange={handleDateSelect} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 4: // Payment
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600">Payment</h3>
            <p>Integrate your preferred payment gateway here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 flex flex-col items-center py-10">
        {renderTimeline()}
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          {renderStepContent()}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep((prev) => prev - 1)}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {step < 4 && (
              <button
                onClick={() => setStep((prev) => prev + 1)}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consultation;
