import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// const steps = [
//   {
//     id: 1,
//     title: "Unburden Your Mind with Personalized Care",
//     description:
//       "Discover a personalized approach to mental wellness. We offer culturally-sensitive therapy and affordable care options.",
//     image: "/assets/icons/step1.png",
//   },
//   {
//     id: 2,
//     title: "Connect with Top Therapists & Psychiatrists",
//     description:
//       "Meet licensed professionals who specialize in anxiety, depression, and more. Enjoy convenient online therapy sessions.",
//     image: "/assets/icons/step2.png",
//   },
//   {
//     id: 3,
//     title: "Customized Treatment Plans for Your Well-being",
//     description:
//       "We craft personalized treatment plans focusing on your specific mental health goals and provide continuous support.",
//     image: "/assets/icons/step3.png",
//   },
//   {
//     id: 4,
//     title: "Empower Your Mental Health Journey",
//     description:
//       "Track your progress and celebrate achievements with our tools, including mood trackers and personalized feedback.",
//     image: "/assets/icons/step4.png",
//   },
// ];

const Home = () => {
  // Data for Conditions Section
  const allConditions = [
    {
      id: 1,
      title: "Depression",
      description:
        "Do you feel like your sadness just won’t go away, and it is hard to find a way ahead? We can help.",
      image: "/assets/icons/depression.png",
      link: "/conditions/depression",
    },
    {
      id: 2,
      title: "Generalised Anxiety Disorder (GAD)",
      description:
        "Do you often feel restless, worried, or on-edge? Let us help you on how to cope better.",
      image: "/assets/icons/gad.png",
      link: "/conditions/gad",
    },
    {
      id: 3,
      title: "Obsessive Compulsive Disorder (OCD)",
      description:
        "Are unwanted thoughts making you anxious and engaging in unhelpful behaviors? You can find ways to cope.",
      image: "/assets/icons/ocd.png",
      link: "/conditions/ocd",
    },
    {
      id: 4,
      title: "Bipolar Disorder",
      description:
        "Do you struggle with periods of intense happiness, followed by intense sadness? Find the care you need with us.",
      image: "/assets/icons/bipolar.png",
      link: "/conditions/bipolar",
    },
    {
      id: 5,
      title: "Adult ADHD",
      description:
        "Have you always struggled with difficulty focusing, being restless, or impulsivity? There are ways to manage it better.",
      image: "/assets/icons/adhd.png",
      link: "/conditions/adhd",
    },
    {
      id: 6,
      title: "Social Anxiety",
      description:
        "Do social settings make you anxious and fearful? We can help you cope with social situations better.",
      image: "/assets/icons/social-anxiety.png",
      link: "/conditions/social-anxiety",
    },
    {
      id: 7,
      title: "Women's Health",
      description:
        "Tailored mental health solutions for women's unique challenges and needs.",
      image: "/assets/icons/womens-health.png",
      link: "/conditions/womens-health",
    },
    {
      id: 8,
      title: "Adult ADHD",
      description:
        "Learn strategies to manage adult ADHD effectively with our expert guidance.",
      image: "/assets/icons/adult-adhd.png",
      link: "/conditions/adult-adhd",
    },
    {
      id: 9,
      title: "Social Anxiety",
      description:
        "Overcome fear and discomfort in social situations with practical tools and support.",
      image: "/assets/icons/social-anxiety-extended.png",
      link: "/conditions/social-anxiety-extended",
    },
  ];

  const [visibleConditions, setVisibleConditions] = useState(6);

  const toggleConditions = () => {
    setVisibleConditions((prev) =>
      prev === 6 ? allConditions.length : 6
    );
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
              Therapy, tailored <br /> for you.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Mental health support made just for you. Behavioral health
              coaching, therapy, psychiatry, and self-care resources, all from
              the privacy of a smartphone.
            </p>
            <Link
              to="/consultation"
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Add your cards */}
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        {/* Steps */}
      </section>

      {/* Conditions Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What are you struggling with?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            MindWise is here to support you with all your mental health needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allConditions.slice(0, visibleConditions).map((condition) => (
              <div
                key={condition.id}
                className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-12 h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {condition.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {condition.description}
                </p>
                <a
                  href={condition.link}
                  className="text-sm font-semibold text-teal-600 hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={toggleConditions}
              className="text-teal-600 font-semibold hover:underline text-sm"
            >
              {visibleConditions === 6
                ? "View More Conditions →"
                : "Show Less ←"}
            </button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Footer />
    </>
  );
};

export default Home;





