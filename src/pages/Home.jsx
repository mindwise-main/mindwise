import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    id: 1,
    title: "Unburden Your Mind with Personalized Care",
    description:
      "Discover a personalized approach to mental wellness. We offer culturally-sensitive therapy and affordable care options.",
    image: "/assets/png/steps/step1.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Connect with Top Therapists & Psychiatrists",
    description:
      "Meet licensed professionals who specialize in anxiety, depression, and more. Enjoy convenient online therapy sessions.",
    image: "/assets/png/steps/step2.png",
  },
  {
    id: 3,
    title: "Customized Treatment Plans for Your Well-being",
    description:
      "We craft personalized treatment plans focusing on your specific mental health goals and provide continuous support.",
    image: "/assets/png/steps/step3.png",
  },
  {
    id: 4,
    title: "Empower Your Mental Health Journey",
    description:
      "Track your progress and celebrate achievements with our tools, including mood trackers and personalized feedback.",
    image: "/assets/png/steps/step4.png",
  },
];

const Home = () => {
  const allConditions = [
    {
      id: 1,
      title: "Depression",
      description:
        "Do you feel like your sadness just won’t go away, and it is hard to find a way ahead? We can help.",
      image: "/assets/png/conditions/worried.png", // Replace with actual image paths
      link: "/conditions/depression",
    },
    {
      id: 2,
      title: "Generalised Anxiety Disorder (GAD)",
      description:
        "Do you often feel restless, worried, or on-edge? Let us help you on how to cope better.",
      image: "/assets/png/conditions/sad.png",
      link: "/conditions/gad",
    },
    {
      id: 3,
      title: "Obsessive Compulsive Disorder (OCD)",
      description:
        "Are unwanted thoughts making you anxious and engaging in unhelpful behaviors? You can find ways to cope.",
      image: "/assets/png/conditions/confused.png",
      link: "/conditions/ocd",
    },
    {
      id: 4,
      title: "Bipolar Disorder",
      description:
        "Do you struggle with periods of intense happiness, followed by intense sadness? Find the care you need with us.",
      image: "/assets/png/conditions/sad.png",
      link: "/conditions/bipolar",
    },
    {
      id: 5,
      title: "Adult ADHD",
      description:
        "Have you always struggled with difficulty focusing, being restless, or impulsivity? There are ways to manage it better.",
      image: "/assets/png/conditions/worried.png",
      link: "/conditions/adhd",
    },
    {
      id: 6,
      title: "Social Anxiety",
      description:
        "Do social settings make you anxious and fearful? We can help you cope with social situations better.",
      image: "/assets/png/conditions/confused.png",
      link: "/conditions/social-anxiety",
    },
    {
      id: 7,
      title: "Women's Health",
      description:
        "Tailored mental health solutions for women's unique challenges and needs.",
      image: "/assets/png/conditions/worried.png",
      link: "/conditions/womens-health",
    },
    {
      id: 8,
      title: "Adult ADHD",
      description:
        "Learn strategies to manage adult ADHD effectively with our expert guidance.",
      image: "/assets/png/conditions/worried.png",
      link: "/conditions/adult-adhd",
    },
    {
      id: 9,
      title: "Social Anxiety",
      description:
        "Overcome fear and discomfort in social situations with practical tools and support.",
      image: "/assets/png/conditions/worried.png",
      link: "/conditions/social-anxiety-extended",
    },
  ];

  const [visibleConditions, setVisibleConditions] = useState(6);

  const toggleConditions = () => {
    setVisibleConditions((prev) => (prev === 6 ? allConditions.length : 6));
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative  bg-teal-500 text-white py-20 px-6">
        {/* Background Banner */}
        <div
          className="absolute inset-0 bg-cover w-screen bg-center opacity-70"
          style={{ backgroundImage: "url('https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?t=st=1732176964~exp=1732180564~hmac=b4d25549789f89c104b1eb47a636e75d827ff0f01e305cc229b528f02ff2e854&w=1380')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-700 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Empowering Your Mental Well-being
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover expert mental health support through consultations,
            assessments, and chatbot assistance.
          </p>
          <Link
            to="/consultation"
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute top-0 bottom-20 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className=""
          >
            <path
              fill="#0D9488"
              d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,128C672,139,768,117,864,101.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <span className="text-sm bg-red-100 text-red-600 py-1 px-2 rounded-full inline-block mb-4">
              Specially designed for{" "}
              <em>
                <strong>Students</strong>
              </em>
            </span>
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
            <p className="text-sm text-gray-500 mt-4">
              Get 73% off on your first appointment
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Individual
              </h3>
              <p className="text-sm text-gray-600 mb-2">For Myself</p>
              <Link to="/#" className="text-teal-600 font-semibold text-sm">
                Learn More →
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-green-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Couple
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                For Me and my partner
              </p>
              <Link to="/#" className="text-teal-600 font-semibold text-sm">
                Learn More →
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Psychiatry
              </h3>
              <p className="text-sm text-gray-600 mb-2">Medication</p>
              <Link to="/#" className="text-teal-600 font-semibold text-sm">
                Learn More →
              </Link>
            </div>
            {/* Card 4 */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Mental ChatBot
              </h3>
              <p className="text-sm text-gray-600 mb-2">24 × 7 Support</p>
              <Link
                to="/chatbot"
                className="text-teal-600 font-semibold text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-serif text-gray-700 font-light mb-10">
            How MindWise Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Step Icon/Image */}
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="w-16 h-16 object-contain"
                />

                {/* Step Content */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="mt-12">
            <button className="bg-teal-600 text-white text-sm font-semibold rounded-lg py-3 px-8 hover:bg-teal-700 transition duration-300">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </section>

      {/* Conditions Section*/}
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
                  className="w-14 h-14 mb-4 mx-auto"
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

      {/* Features Section */}
      <section className="bg-teal-100 py-16">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {/* Feature Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
            <img
              src="/assets/png/what-we-offer/consultation.png"
              alt="Consultation"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-700">
              Schedule meeting with a mental health expert and get personalized
              guidance.
            </p>
            <Link
              to="/consultation"
              className="inline-block mt-4 text-teal-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
            <img
              src="/assets/png/what-we-offer/survey.png"
              alt="Survey Modules"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Survey Modules</h3>
            <p className="text-gray-700">
              Evaluate your mental health with tools like PHQ-9, GAD-7, and
              more.
            </p>
            <Link
              to="/survey"
              className="inline-block mt-4 text-teal-600 font-semibold hover:underline"
            >
              Explore Surveys
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
            <img
              src="/assets/png/what-we-offer/doctor.png"
              alt="Psychiatrist Chatbot"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Psychiatrist Chatbot</h3>
            <p className="text-gray-700">
              Get instant stress or panic relief with our AI-powered chatbot.
            </p>
            <Link
              to="/chatbot"
              className="inline-block mt-4 text-teal-600 font-semibold hover:underline"
            >
              Chat Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-10">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-lg italic text-gray-700">
              MindWise helped me gain clarity during a tough time. The
              consultation feature is a life-saver!
            </p>
            <h4 className="text-teal-600 font-semibold mt-4">- John Doe</h4>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg italic text-gray-700">
              The chatbot was exactly what I needed in moments of anxiety.
              Highly recommend MindWise!
            </p>
            <h4 className="text-teal-600 font-semibold mt-4">- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take Charge of Your Mental Health Today
          </h2>
          <p className="text-lg mb-8">
            Start your journey with MindWise and discover the tools and support
            you need for a healthier mind.
          </p>
          <Link
            to="/consultation"
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
