import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
  const {
    userAuth: { access_token },
  } = useContext(UserContext);

  const [categories] = useState([
    {
      id: 1,
      title: "Stress Management",
      videos: [
        {
          id: 1,
          title: "5-Minute Breathing Exercise",
          thumbnail: "/assets/thumbnails/podcast1.jpg",
          description: "Learn to relax with this quick breathing exercise.",
          youtubeId: "grfXR6FAsI8",
        },
        {
          id: 2,
          title: "Stress relief tips",
          thumbnail: "/assets/thumbnails/podcast2.jpg",
          description: "Tips and strategies to identify and overcome burnout.",
          youtubeId: "stressVideoId2",
        },
        {
          id: 3,
          title: "5-Minute Breathing Exercise",
          thumbnail: "/assets/thumbnails/podcast3.jpg",
          description: "Learn to relax with this quick breathing exercise.",
          youtubeId: "grfXR6FAsI8",
        },
        {
          id: 4,
          title: "Stress relief tips",
          thumbnail: "/assets/thumbnails/podcast4.jpg",
          description:
            "Tips and strategies to identify and overcome workplace burnout.",
          youtubeId: "stressVideoId2",
        },
        {
          id: 5,
          title: "5-Minute Breathing Exercise",
          thumbnail: "/assets/thumbnails/podcast5.jpg",
          description: "Learn to relax with this quick breathing exercise.",
          youtubeId: "grfXR6FAsI8",
        },
      ],
    },
    {
      id: 2,
      title: "Yoga",
      videos: [
        {
          id: 1,
          title: "Yoga for Beginners",
          thumbnail: "/assets/thumbnails/yoga1.jpg",
          description: "Practice mindfulness with this calming guided session.",
          youtubeId: "FdyhENXyIQ4",
        },
        {
          id: 2,
          title: "15 Minute Yoga for strong legs",
          thumbnail: "/assets/thumbnails/yoga2.jpg",
          description: "Understand the art of living in the present moment.",
          youtubeId: "-u0s-hkW6us",
        },
        {
          id: 3,
          title: "20 Minute Yoga to tone arms & build strength",
          thumbnail: "/assets/thumbnails/yoga3.jpg",
          description: "Practice mindfulness with this calming guided session.",
          youtubeId: "S9-00Cs7cuI",
        },
        {
          id: 4,
          title: "20 Minute Yoga for Relieving Back Pain",
          thumbnail: "/assets/thumbnails/yoga4.jpg",
          description: "Understand the art of living in the present moment.",
          youtubeId: "ncgz1z7-qx4",
        },
        {
          id: 5,
          title: "30 Minute Full Body Energising Yoga Flow",
          thumbnail: "/assets/thumbnails/yoga5.jpg",
          description: "Practice mindfulness with this calming guided session.",
          youtubeId: "FyFUowFFYC4",
        },
      ],
    },
    {
      id: 3,
      title: "TED EX",
      videos: [
        {
          id: 1,
          title: "The Science of Happiness",
          thumbnail: "/assets/thumbnails/tedex1.jpg",
          description:
            "Explore what truly makes us happy with evidence-based insights.",
          youtubeId: "happinessVideoId1",
        },
        {
          id: 2,
          title: "Daily Gratitude Practice",
          thumbnail: "/assets/thumbnails/tedex2.jpg",
          description:
            "Incorporate gratitude into your daily routine for long-term benefits.",
          youtubeId: "happinessVideoId2",
        },
        {
          id: 3,
          title: "The Science of Happiness",
          thumbnail: "/assets/thumbnails/tedex3.jpg",
          description:
            "Explore what truly makes us happy with evidence-based insights.",
          youtubeId: "happinessVideoId1",
        },
        {
          id: 4,
          title: "Daily Gratitude Practice",
          thumbnail: "/assets/thumbnails/tedex4.jpg",
          description:
            "Incorporate gratitude into your daily routine for long-term benefits.",
          youtubeId: "happinessVideoId2",
        },
        {
          id: 5,
          title: "The Science of Happiness",
          thumbnail: "/assets/thumbnails/tedex5.jpg",
          description:
            "Explore what truly makes us happy with evidence-based insights.",
          youtubeId: "happinessVideoId1",
        },
      ],
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [continueWatching, setContinueWatching] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const openVideo = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    if (
      selectedVideo &&
      !continueWatching.some((v) => v.youtubeId === selectedVideo)
    ) {
      const unfinishedVideo = categories
        .flatMap((cat) => cat.videos)
        .find((video) => video.youtubeId === selectedVideo);

      if (unfinishedVideo) {
        setContinueWatching((prev) => [...prev, unfinishedVideo]);
      }
    }
    setSelectedVideo(null);
  };

  const markAsWatched = (youtubeId) => {
    setContinueWatching((prev) =>
      prev.filter((v) => v.youtubeId !== youtubeId)
    );
  };

  return (
    <>
      access_token ?
      <Navigate to="/" />:
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl2 font-bold text-teal-600 text-center mb-8">
              Explore Mental Health Videos
            </h1>
            <p className="text-xl text-gray-700 text-center mb-12">
              Discover curated content to help you relax, reflect, and grow.
            </p>

            {continueWatching.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Continue Watching
                </h2>
                <Slider {...sliderSettings}>
                  {continueWatching.map((video) => (
                    <div key={video.id} className="px-2">
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                        <div className="p-4 flex-grow">
                          <h3 className="text-lg font-bold text-teal-600">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-2">
                            {video.description}
                          </p>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all"
                              onClick={() => openVideo(video.youtubeId)}
                            >
                              Resume
                            </button>
                            <button
                              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-all"
                              onClick={() => markAsWatched(video.youtubeId)}
                            >
                              Mark as Watched
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}

            {categories.map((category) => (
              <div key={category.id} className="mb-12">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h4>
                <Slider {...sliderSettings}>
                  {category.videos.map((video) => (
                    <div key={video.id} className="px-2">
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-grow">
                          <h4 className="text-2xl font-bold text-teal-600">
                            {video.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-2">
                            {video.description}
                          </p>
                          <button
                            className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all"
                            onClick={() => openVideo(video.youtubeId)}
                          >
                            Watch Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>

          {selectedVideo && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={closeVideo}
            >
              <div
                className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-all text-sm"
                  onClick={closeVideo}
                >
                  ✖ Close
                </button>
                <iframe
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video Player"
                ></iframe>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </>
    </>
  );
};

export default Explore;
