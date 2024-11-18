import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SurveyModules = () => {
  const navigate = useNavigate();
  const modules = [
    {
      id: "phq9",
      name: "PHQ-9 Depression Module",
      description: "Assess depression severity with a simple and effective scale.",
      image: "/assets/img/phq9-img.jpg", // Replace with actual image paths
    },
    {
      id: "gad7",
      name: "GAD-7 Anxiety Module",
      description: "Measure anxiety levels using this reliable screening tool.",
      image: "/assets/img/gad7-img.jpg",
    },
    {
      id: "who5",
      name: "WHO-5 Well-being Index",
      description: "Evaluate your well-being and quality of life.",
      image: "/assets/img/who5-img.jpg",
    },
    {
      id: "dass21",
      name: "DASS-21 Stress Module",
      description: "Measure depression, anxiety, and stress using this tool.",
      image: "/assets/img/dass21-img.jpg",
    },
    {
      id: "k10",
      name: "Kessler K10 Psychological Distress Module",
      description: "Screen for psychological distress with this effective tool.",
      image: "/assets/img/k10-img.jpg",
    },
    {
      id: "bai",
      name: "BAI : Beck Anxiety Inventory",
      description: "Evaluate anxiety symptoms with the Beck Anxiety Inventory.",
      image: "/assets/img/bai-img.jpg",
    },
    {
      id: "core10",
      name: "CORE-10 Psychological Distress Module",
      description: "Assess psychological well-being with this scale.",
      image: "/assets/img/core10-img.jpg",
    },
    {
      id: "pss",
      name: "PSS : Perceived Stress Scale",
      description: "Measure the perception of stress in your life.",
      image: "/assets/img/pss-img.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 text-teal-600">Survey Modules</h1>
        <p className="text-lg text-gray-700 mt-4 mb-8 text-center max-w-2xl">
          Select a module to begin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={module.image}
                alt={module.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{module.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{module.description}</p>
                <button
                  onClick={() => navigate(`/survey/${module.id}`)}
                  className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none"
                >
                  Start Survey
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyModules;
