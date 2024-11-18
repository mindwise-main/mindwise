// import React from "react";
import PropTypes from "prop-types";

const ModuleCard = ({ module, description, image, onSelect }) => {
  return (
    <div
      className="flex items-center bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onSelect}
    >
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={image}
          alt={`Image for ${module}`}
          className="object-cover h-full w-full"
        />
      </div>
      {/* Text Section */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold text-teal-600">{module}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

ModuleCard.propTypes = {
  module: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

ModuleCard.defaultProps = {
  module: "Default Module",
  description: "Default Description",
  image: "default-image.jpg",
  onSelect: () => {},
};

export default ModuleCard;