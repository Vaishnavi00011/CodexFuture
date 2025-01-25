// React component for a FreeCodeCamp documentation page styled with Tailwind CSS
import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const FreeCodeCampPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-50 min-h-screen p-8">
      <header className=" text-gray-900 py-6 px-2 pt-16 rounded-lg ">
        <h1 className="text-4xl font-extrabold">FreeCodeCamp</h1>
        <p className="text-lg mt-2">Learn to code for free with interactive lessons and projects.</p>
      </header>

      <main className="mt-10 space-y-10">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">Introduction</h2>
          <p className="text-gray-700 mt-4">
            FreeCodeCamp is a nonprofit organization that helps people learn to code for free. It offers a wide range of interactive lessons, coding challenges, and real-world projects to build practical skills.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">Key Features</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><strong>Interactive Lessons:</strong> Learn coding concepts step-by-step with hands-on exercises.</li>
            <li><strong>Certifications:</strong> Earn certifications in web development, data analysis, and more.</li>
            <li><strong>Community:</strong> Join a supportive community of developers worldwide.</li>
            <li><strong>Open Source:</strong> Contribute to open-source projects and improve your skills.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">Example: HTML Basics</h2>
          <p className="text-gray-700 mt-4">
            Here’s an example of a simple HTML structure you might learn in FreeCodeCamp:
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to FreeCodeCamp</h1>
    <p>Start your coding journey today!</p>
  </body>
</html>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">Resources</h2>
          <p className="text-gray-700 mt-4">
            Explore more about FreeCodeCamp using the following resources:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><a href="https://www.freecodecamp.org" className="text-green-500 hover:underline">FreeCodeCamp Official Website</a></li>
            <li><a href="https://forum.freecodecamp.org" className="text-green-500 hover:underline">FreeCodeCamp Forum</a></li>
            <li><a href="https://www.youtube.com/freecodecamp" className="text-green-500 hover:underline">FreeCodeCamp YouTube Channel</a></li>
          </ul>
        </section>
      </main>

      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default FreeCodeCampPage;
