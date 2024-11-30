import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const QuestionForm = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const colors = {
    primary: "#0D9488", // Deep Teal
    background: "#F9FAFB", // Very Light Gray
    text: "#374151", // Cool Gray for text
    selected: "#D1FAE5", // Light Green for selected answers
    border: "#D1D5DB", // Light Gray for borders
    white: "#FFFFFF", // Pure White
    hover: "#0F766E", // Darker Teal for hover effects
  };

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
    who5: [
      "I have felt cheerful and in good spirits",
      "I have felt calm and relaxed",
      "I have felt active and vigorous",
      "I woke up feeling fresh and rested",
      "My daily life has been filled with things that interest me",
    ],
    dass21: [
      "I found it hard to wind down",
      "I was aware of dryness of my mouth",
      "I couldn't seem to experience any positive feeling at all",
      "I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)",
      "I found it difficult to work up the initiative to do things",
      "I tended to over-react to situations",
      "I experienced trembling (eg, in the hands)",
      "I felt that I was using a lot of nervous energy",
      "I was worried about situations in which I might panic and make a fool of myself",
      "I felt that I had nothing to look forward to",
      "I found myself getting agitated",
      "I found it difficult to relax",
      "I felt down-hearted and blue",
      "I was intolerant of anything that kept me from getting on with what I was doing",
      "I felt I was close to panic",
      "I was unable to become enthusiastic about anything",
      "I felt I wasn't worth much as a person",
      "I felt that I was rather touchy",
      "I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)",
      "I felt scared without any good reason",
    ],
    k10: [
      "About how often did you feel tired out for no good reason?",
      "About how often did you feel nervous?",
      "About how often did you feel so nervous that nothing could calm you down?",
      "About how often did you feel hopeless?",
      "About how often did you feel restless or fidgety?",
      "About how often did you feel so restless you could not sit still?",
      "About how often did you feel depressed?",
      "About how often did you feel that everything was an effort?",
      "About how often did you feel so sad that nothing could cheer you up?",
      "About how often did you feel worthless?",
    ],
    bai: [
      "Numbness or tingling",
      "Feeling hot or cold",
      "Wobbliness in legs",
      "Unable to relax",
      "Fear of worst happening",
      "Dizzy or lightheaded",
      "Heart pounding or racing",
      "Unsteady",
      "Terrified or afraid",
      "Nervous",
      "Feeling of choking",
      "Shaky",
      "Fear of losing control",
      "Difficulty breathing",
      "Fear of dying",
      "Sweating",
      "Upset stomach or nausea",
      "Faint",
      "Feelings of unreality",
      "Chest pain or discomfort",
      "Feeling of choking",
      "Shaky",
      "Fear of losing control",
      "Difficulty breathing",
      "Fear of dying",
      "Sweating",
      "Upset stomach or nausea",
      "Faint",
      "Feelings of unreality",
      "Chest pain or discomfort",
    ],
    core10: [
      "I have felt very anxious or nervous",
      "I have felt very tense or wound up",
      "I have felt very depressed or miserable",
      "I have felt very unhappy or blue",
      "I have felt very angry or hostile",
      "I have felt very irritable or easily annoyed",
      "I have felt very frustrated or impatient",
      "I have felt very upset or distressed",
      "I have felt very worried or concerned",
      "I have felt very scared or afraid",
    ],
    pss: [
      "In the last month, how often have you been upset because of something that happened unexpectedly?",
      "In the last month, how often have you felt that you were unable to control the important things in your life?",
      "In the last month, how often have you felt nervous and stressed?",
      "In the last month, how often have you felt confident about your ability to handle your personal problems?",
      "In the last month, how often have you felt that things were going your way?",
      "In the last month, how often have you found that you could not cope with all the things that you had to do?",
      "In the last month, how often have you been able to control irritations in your life?",
      "In the last month, how often have you felt that you were on top of things?",
      "In the last month, how often have you been angered because of things that were outside of your control?",
      "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
    ],

  };

  const selectedQuestions = questions[moduleId] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(selectedQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3);

  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = parseInt(value, 10);
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer || 0), 0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        const score = calculateScore();
        navigate("/dashboard", { state: { score } });
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [submitted, navigate]);

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center"
        style={{ backgroundColor: colors.background }}
      >
        {!submitted ? (
          <>
            <h1
              className="text-4xl font-bold mt-10 text-center"
              style={{ color: colors.primary }}
            >
              {moduleId.toUpperCase()} Survey
            </h1>
            <div
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-6 mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${colors.border}`,
              }}
            >
              <p className="text-lg font-medium" style={{ color: colors.text }}>
                Question {currentQuestionIndex + 1} of {selectedQuestions.length}
              </p>
              <p
                className="text-lg mt-4 leading-relaxed"
                style={{ color: colors.primary }}
              >
                {selectedQuestions[currentQuestionIndex]}
              </p>

              {/* Answer options */}
              <div className="flex flex-col mt-6 space-y-4">
                {[0, 1, 2, 3].map((value) => (
                  <label
                    key={value}
                    className={`flex items-center p-4 rounded-lg cursor-pointer shadow-sm ${
                      answers[currentQuestionIndex] === value
                        ? "border-2 border-teal-600 bg-teal-50"
                        : "border border-gray-300 hover:bg-gray-100"
                    }`}
                    style={{
                      transition: "background-color 0.3s ease, border 0.3s ease",
                    }}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={value}
                      checked={answers[currentQuestionIndex] === value}
                      onChange={() => handleAnswerChange(value)}
                      className="hidden"
                    />
                    <span
                      className={`text-lg ${
                        answers[currentQuestionIndex] === value
                          ? "text-teal-700 font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      {value}
                    </span>
                  </label>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-6 py-2 rounded-lg shadow-md text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Previous
                  </button>
                )}
                {currentQuestionIndex < selectedQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    disabled={answers[currentQuestionIndex] === null}
                    className={`px-6 py-2 rounded-lg shadow-md ${
                      answers[currentQuestionIndex] === null
                        ? "bg-gray-300 text-gray-500"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answers[currentQuestionIndex] === null}
                    className={`px-6 py-2 rounded-lg shadow-md ${
                      answers[currentQuestionIndex] === null
                        ? "bg-gray-300 text-gray-500"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Processing Section */}
            <div
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mt-20 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${colors.border}`,
              }}
            >
              <h2
                className="text-3xl font-bold"
                style={{ color: colors.primary }}
              >
                Processing Your Survey
              </h2>
              <p className="text-lg mt-4" style={{ color: colors.text }}>
                Redirecting to your dashboard in{" "}
                <span style={{ color: colors.hover, fontWeight: "bold" }}>
                  {timer}
                </span>{" "}
                seconds...
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuestionForm;