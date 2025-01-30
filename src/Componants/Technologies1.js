import React from "react";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        src="12676758_3840_2160_30fps.mp4" // Replace with the correct path to your video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-100 flex flex-col items-center justify-center min-h-screen  px-4">
        {/* Header Text */}
        <div className="text-center text-white mb-8  lg:pt-0 pt-4">
          <h1 className="text-3xl md:text-4xl  font-bold">Our Technology Stack</h1>
          <p className="mt-2 text-sm md:text-lg max-w-xl mx-auto">
            We leverage the most advanced and reliable technologies to deliver top-notch solutions.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full max-w-5xl grid lg:gap-4 gap-1 lg:mb-0 mb-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Programming Languages</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Web Development</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Frontend</li>
              <li>Backend</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Mobile App Development</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Flutter</li>
              <li>React Native</li>
              <li>Swift (iOS)</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Databases</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Relational Database</li>
              <li>NoSQL Database</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Cloud Platforms</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Amazon Web Services (AWS)</li>
              <li>Microsoft Azure</li>
              <li>Google Cloud Platform</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">DevOps</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>GitHub Actions</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>

          {/* Card 7 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Data Analytics</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Tableau</li>
              <li>Power BI</li>
              <li>SQL</li>
              <li>MS Excel</li>
              <li>Statistics</li>
            </ul>
          </div>

          {/* Card 8 */}
          <div className="p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Machine Learning</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li>Machine Learning Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
