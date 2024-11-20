import { useState } from "react";

const Conditions = () => {
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

  const [visibleConditions, setVisibleConditions] = useState(6); // Initially show 6 conditions

  const toggleConditions = () => {
    if (visibleConditions === 6) {
      setVisibleConditions(allConditions.length); // Show all conditions
    } else {
      setVisibleConditions(6); // Collapse to show initial 6
    }
  };

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What are you struggling with?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          MindWise is here to support you with all your mental health needs.
        </p>

        {/* Grid of Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allConditions.slice(0, visibleConditions).map((condition) => (
            <div
              key={condition.id}
              className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={condition.image}
                alt={condition.title}
                className="w-12 h-12 mb-4 mx-auto"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {condition.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-700 mb-4">
                {condition.description}
              </p>
              {/* Learn More Link */}
              <a
                href={condition.link}
                className="text-sm font-semibold text-teal-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
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
  );
};

export default Conditions;
