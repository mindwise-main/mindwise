import { useState } from "react";
import Navbar from "../components/Navbar";
import ModuleCard from "../components/ModuleCard";
import Footer from "../components/Footer";

const Survey = () => {
  const surveyModules = {
    PHQ9: {
      questions: [
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
      description: "Assess your depressive symptoms with the PHQ-9 questionnaire.",
      image: "/src/assets/img/phq-img.jpg", // image path
    },
    GAD7: {
      questions: [
        "Feeling nervous, anxious, or on edge?",
        "Not being able to stop or control worrying?",
        "Worrying too much about different things?",
        "Having trouble relaxing?",
        "Being so restless that it's hard to sit still?",
        "Becoming easily annoyed or irritable?",
        "Feeling afraid as if something awful might happen?",
      ],
      description: "Evaluate your anxiety levels with the GAD-7 module.",
      image: "/src/assets/img/gad-img.jpg", // image path
    },
  };

  const [selectedModule, setSelectedModule] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setAnswers(Array(surveyModules[module].questions.length).fill(0));
    setSubmitted(false);
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(value, 10);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 text-teal-600">
          Mental Health Survey
        </h1>
        <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl">
          Select a module to begin. Answer the questions honestly to assess your
          mental health.
        </p>

        {!selectedModule ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {Object.keys(surveyModules).map((module) => (
              <ModuleCard
                key={module}
                module={module === "PHQ9" ? "PHQ-9 Depression" : "GAD-7 Anxiety"}
                description={surveyModules[module].description}
                image={surveyModules[module].image}
                onSelect={() => handleModuleSelect(module)}
              />
            ))}
          </div>
        ) : !submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
          >
            <h2 className="text-2xl font-bold text-teal-600 mb-6">
              {selectedModule === "PHQ9"
                ? "PHQ-9 Depression Survey"
                : "GAD-7 Anxiety Survey"}
            </h2>
            {surveyModules[selectedModule].questions.map((question, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  {index + 1}. {question}
                </label>
                <div className="flex space-x-4">
                  {[0, 1, 2, 3].map((value) => (
                    <label key={value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={value}
                        checked={answers[index] === value}
                        onChange={() => handleAnswerChange(index, value)}
                        className="form-radio text-teal-600"
                      />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Submit Survey
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Survey Results</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your total score is <span className="font-bold">{score}</span>.
            </p>
            <button
              onClick={() => setSelectedModule(null)}
              className="mt-6 py-3 px-6 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Back to Modules
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Survey;
