import React from "react";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";

const AboutUs = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-white min-h-screen lg:py-10 py-6">

      {/* Header Section */}
      <div className=" text-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-4">About Us</h1>
          <p className="text-lg">
            We are a team of dedicated professionals, striving to bring innovation and excellence to every project we undertake.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="lg:py-16 py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
           <video src="6999824_Motion Graphics_Animation_3840x2160.mp4" autoPlay loop muted></video>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-4  lg:w-[80%] w-[100%]">
              Our mission is to deliver innovative and effective solutions that help businesses thrive in the digital era. We aim to provide the highest quality services while fostering strong relationships with our clients.
            </p>
            <p className="text-lg leading-relaxed lg:w-[80%] w-[100%]">
              Whether it's web development, app development, or digital marketing, we bring our expertise to every project and ensure customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Vision and Values Section */}
      <div className="bg-gray-50 lg:py-16 py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Our Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We believe in pushing boundaries and creating solutions that stand out.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Our team strives for excellence in every project we undertake.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We are committed to transparency and building trust with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="py-16 px-6 max-w-7xl mx-auto w-[100%]">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> */}
          {/* Team Member 1 */}
          {/* <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div> */}

          {/* Team Member 2 */}
          {/* <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div> */}

          {/* Team Member 3 */}
          {/* <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
            <p className="text-gray-500">Designer</p>
          </div> */}

          {/* Team Member 4 */}
          {/* <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">Bob Taylor</h3>
            <p className="text-gray-500">Developer</p>
          </div>
        </div>
      </div> */}

    </div>
    <Footer></Footer>
    </div>
  );
};

export default AboutUs;
