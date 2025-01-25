// React component for an enhanced documentation page styled with Tailwind CSS
import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const DocumentationPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-50 min-h-screen p-8">
      <header className=" text-gray-900 py-4 pt-11 px-2 rounded-lg ">
        <h1 className="text-4xl font-extrabold">React Documentation</h1>
        <p className="text-lg mt-2">Your guide to building powerful user interfaces with React and Tailwind CSS.</p>
      </header>

      <main className="mt-10 space-y-10">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Getting Started</h2>
          <p className="text-gray-700 mt-4">
            React is a JavaScript library for building user interfaces. To get started, install Node.js and create a new project using the
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">npx create-react-app</code> command.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Using Tailwind CSS</h2>
          <p className="text-gray-700 mt-4">
            Tailwind CSS is a utility-first CSS framework that simplifies styling. Install it via npm and configure it by creating a <code className="bg-gray-200 px-2 py-1 rounded text-sm">tailwind.config.js</code> file.
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`npm install -D tailwindcss
npx tailwindcss init`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Creating Components</h2>
          <p className="text-gray-700 mt-4">
            React components let you build reusable UI elements. Combine functional components with Tailwind classes to create visually appealing and interactive interfaces.
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`function Button({ label }) {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
      {label}
    </button>
  );
}`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Next Steps</h2>
          <p className="text-gray-700 mt-4">
            Dive deeper into React documentation to learn about hooks, state management, and advanced topics. Combine React with Tailwind CSS to build stunning and responsive user interfaces.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Learn about <strong>React Hooks</strong> like <code className="bg-gray-200 px-1 rounded text-sm">useState</code> and <code className="bg-gray-200 px-1 rounded text-sm">useEffect</code>.</li>
            <li>Explore state management solutions like <strong>Redux</strong> or <strong>Context API</strong>.</li>
            <li>Practice building responsive layouts with Tailwind's <strong>flex</strong> and <strong>grid</strong> utilities.</li>
          </ul>
        </section>
      </main>

    
    </div>
    <Footer></Footer>
    </div>
  );
};

export default DocumentationPage;
