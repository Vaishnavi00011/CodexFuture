import React from "react";
import { Link } from "react-router-dom";

const OurExperience = () => {
  return (
    <div className="relative">
      {/* Video Section */}
      <video
        src="3129977-uhd_3840_2160_30fps-ezgif.com-video-to-mp4-converter.mp4" // Replace with the correct path to your video
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />

      {/* Overlay Section */}
      <div className="absolute lg:top-20 top-10 left-0 w-full  bg-black bg-opacity-60 flex items-center">
        <div className="max-w-6xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Experience</h1>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto">
            With a legacy of excellence and innovation, we've empowered businesses
            and individuals worldwide through our unparalleled expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg lg:p-6 lg:px-0 px-2 py-6 lg:py-0   transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <span className="text-black text-4xl font-bold">5+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Years of Experience
              </h3>
              <p className="text-sm text-gray-600">
                Proven success in delivering innovative solutions across industries.
              </p>
            </div>

            {/* Card 2 */}
            <Link to={"/project"}>
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg lg:p-6 lg:px-0 px-2 lg:py-0 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <span className="text-black text-4xl font-bold">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Projects Delivered
              </h3>
              <p className="text-sm text-gray-600">
                Successfully completed projects for startups, enterprises, and
                everything in between.
              </p>
            </div>
            </Link>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg lg:p-6 lg:px-0 px-2 lg:py-0 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <span className="text-black text-4xl font-bold">3+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Countries Served
              </h3>
              <p className="text-sm text-gray-600">
                Our solutions have reached clients from over 20 countries
                across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
