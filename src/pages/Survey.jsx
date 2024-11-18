import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SurveyModules = () => {
  const navigate = useNavigate();
  const modules = [
    { id: "phq9", name: "PHQ-9 Depression Module" },
    { id: "gad7", name: "GAD-7 Anxiety Module" },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 text-teal-600">Survey Modules</h1>
      <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl">
        Select a module to begin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => navigate(`/survey/${module.id}`)}
            className="py-4 px-6 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none"
          >
            {module.name}
          </button>
        ))}
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default SurveyModules;
