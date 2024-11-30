import { useState } from "react";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // For accessing state passed via navigation

// Register the Chart.js plugin globally
Chart.register(ChartDataLabels);

const Dashboard = () => {
  const location = useLocation();
  const surveyScore = location.state?.score || 0; // Retrieve dynamic score passed from QuestionForm

  const colors = {
    teal: "rgba(0, 168, 150, 1)", // Teal
    lightBlue: "rgba(173, 216, 230, 1)", // Light Blue
    pastelYellow: "rgba(255, 239, 150, 1)", // Pastel Yellow
    lightGreen: "rgba(209, 255, 209, 1)", // Light Green
    lightPurple: "rgba(221, 214, 255, 1)", // Light Purple
    darkGray: "rgba(34, 34, 34, 1)", // Dark Gray
    white: "#ffffff", // White
  };

  const [moodDataValues, setMoodDataValues] = useState([6, 7, 8, 7.5, 8.5, 9, 8]); // Weekly mood data
  const [surveyDataValues, setSurveyDataValues] = useState([surveyScore, 7, 6, 5, 9]); // Dynamic survey data

  const moodData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Mood Score",
        data: moodDataValues,
        borderColor: colors.teal,
        backgroundColor: "rgba(0, 168, 150, 0.2)", // Light Teal
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const surveyData = {
    labels: ["Stress", "Anxiety", "Depression", "Focus", "Happiness"],
    datasets: [
      {
        label: "Survey Scores",
        data: surveyDataValues,
        backgroundColor: [
          colors.teal,
          colors.lightBlue,
          colors.pastelYellow,
          colors.lightGreen,
          colors.lightPurple,
        ],
      },
    ],
  };

  const sessionData = {
    labels: ["Completed", "Pending", "Missed"],
    datasets: [
      {
        data: [12, 4, 3],
        backgroundColor: [colors.teal, colors.pastelYellow, colors.lightPurple],
        hoverOffset: 10,
      },
    ],
  };

  const radarData = {
    labels: ["Mindfulness", "Focus", "Productivity", "Creativity", "Calmness"],
    datasets: [
      {
        label: "Mental Wellness",
        data: [7, 8, 6, 9, 8],
        backgroundColor: "rgba(173, 216, 230, 0.2)", // Light Blue
        borderColor: colors.teal,
        borderWidth: 2,
        pointBackgroundColor: colors.teal,
      },
    ],
  };

  // Framer Motion Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const chartVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header with Animation */}
      <motion.header
        className="py-12 text-white text-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,168,150,0.8), rgba(79,70,229,0.8))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Welcome to Your Dashboard</h1>
          <p className="text-lg mt-4">
            Track your mental health progress and insights in one place.
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Metrics Section with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { title: "Mood Score", value: "8.5/10", bg: colors.lightBlue },
            { title: "Sessions Completed", value: "12", bg: colors.lightGreen },
            { title: "Weekly Improvement", value: "15%", bg: colors.pastelYellow },
            { title: "Sleep Quality", value: "7/10", bg: colors.lightPurple },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg p-6 text-center shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              variants={cardVariants}
            >
              <h2
                className="text-lg font-semibold"
                style={{ color: colors.darkGray }}
              >
                {metric.title}
              </h2>
              <p
                className="text-3xl font-bold mt-2"
                style={{ color: colors.teal }}
              >
                {metric.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart Section with Animation */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {[
            { title: "Mood Trend Over Time", chart: <Line data={moodData} /> },
            { title: "Survey Scores", chart: <Bar data={surveyData} /> },
            { title: "Session Completion", chart: <Pie data={sessionData} /> },
            { title: "Mental Wellness Overview", chart: <Radar data={radarData} /> },
          ].map((chart, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg p-6 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              variants={chartVariants}
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                {chart.title}
              </h2>
              {chart.chart}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    
  );
};



export default Dashboard;