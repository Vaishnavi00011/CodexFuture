import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OurExperience = () => {
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          Our Experience
        </h1>
        <p className="text-lg text-blue-600 mb-12 max-w-2xl mx-auto">
          With a legacy of excellence and innovation, we've empowered businesses 
          and individuals worldwide through our unparalleled expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-800 text-4xl font-bold">10+</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Years of Experience
            </h3>
            <p className="text-gray-600">
              Over a decade of proven success in delivering innovative solutions 
              across industries.
            </p>
          </div>

          {/* Card 2 */}
          <Link to="/project">
          <div  className="bg-white shadow-lg rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-800 text-4xl font-bold">500+</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Projects Delivered
            </h3>
            <p className="text-gray-600">
              Successfully completed projects for startups, enterprises, and 
              everything in between.
            </p>
          </div>
          </Link>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-800 text-4xl font-bold">20+</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Countries Served
            </h3>
            <p className="text-gray-600">
              Our solutions have reached clients from over 20 countries 
              across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
