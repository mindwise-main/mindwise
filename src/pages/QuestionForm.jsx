import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const QuestionForm = () => {
  const { moduleId } = useParams(); // Get the dynamic parameter from the URL

  const questions = {
    phq9: [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself — or that you are a failure?",
      "Trouble concentrating on things, such as reading or watching TV?",
      "Moving or speaking so slowly that others noticed? Or being fidgety or restless?",
      "Thoughts that you would be better off dead, or hurting yourself in some way?",
    ],
    gad7: [
      "Feeling nervous, anxious, or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Having trouble relaxing?",
      "Being so restless that it's hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid as if something awful might happen?",
    ],
  };

  const modulesSuggested = [
    {
      id: "phq9",
      name: "PHQ-9",
      description: "Helps assess depression severity with simple, effective questions.",
      image: "../../public/assets/phq-img.jpg", // Replace with actual image URLs
    },
    {
      id: "gad7",
      name: "GAD-7",
      description: "A quick and accurate measure of anxiety levels.",
      image: "../../public/assets/gad-img.jpg", // Replace with actual image URLs
    },
  ];

  const selectedQuestions = questions[moduleId] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [answers, setAnswers] = useState(Array(selectedQuestions.length).fill(null)); // Store answers
  const [submitted, setSubmitted] = useState(false); // Track if survey is submitted

  // Handle answer change
  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = parseInt(value, 10);
    setAnswers(updatedAnswers);
  };

  // Calculate score
  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer || 0), 0);
  };

  // Handle submit
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {!submitted ? (
          <>
            <h1 className="text-4xl font-bold mt-10 text-teal-600">
              {moduleId.toUpperCase()} Survey
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mt-6">
              {/* Display current question */}
              <p className="text-lg font-medium text-gray-700">
                Question {currentQuestionIndex + 1} of {selectedQuestions.length}
              </p>
              <p className="text-lg text-gray-800 mt-4">
                {selectedQuestions[currentQuestionIndex]}
              </p>

              {/* Answer options */}
              <div className="flex flex-col mt-4 space-y-2">
                {[0, 1, 2, 3].map((value) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={value}
                      checked={answers[currentQuestionIndex] === value}
                      onChange={() => handleAnswerChange(value)}
                      className="form-radio text-teal-600"
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
                  >
                    Previous
                  </button>
                )}
                {currentQuestionIndex < selectedQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    disabled={answers[currentQuestionIndex] === null}
                    className={`px-4 py-2 ${
                      answers[currentQuestionIndex] === null
                        ? "bg-gray-300"
                        : "bg-teal-600 hover:bg-teal-700 text-white"
                    } rounded-lg focus:outline-none`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answers[currentQuestionIndex] === null}
                    className={`px-4 py-2 ${
                      answers[currentQuestionIndex] === null
                        ? "bg-gray-300"
                        : "bg-teal-600 hover:bg-teal-700 text-white"
                    } rounded-lg focus:outline-none`}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mt-6 text-center">
              <h2 className="text-2xl font-bold text-teal-600">Your Score</h2>
              <p className="text-lg text-gray-700 mt-4">
                You scored <span className="font-bold">{calculateScore()}</span> out of{" "}
                {selectedQuestions.length * 3}.
              </p>
              <p className="mt-2">
                {calculateScore() <= 4
                  ? "Minimal or no issues detected."
                  : calculateScore() <= 9
                  ? "Mild issues detected."
                  : calculateScore() <= 14
                  ? "Moderate issues detected."
                  : "Severe issues detected. Please consult a professional."}
              </p>
            </div>
            {/* Suggested Modules */}
            <div className="mt-8 w-full max-w-2xl">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Modules Suggested</h3>
              <div className="flex flex-col space-y-4">
                {modulesSuggested.map((module) => (
                  <div
                    key={module.id}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
                  >
                    <img
                      src={module.image}
                      alt={module.name}
                      className="w-16 h-16 rounded-md"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{module.name}</h4>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuestionForm;
