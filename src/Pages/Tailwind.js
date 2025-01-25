// React component for a Tailwind CSS documentation page styled with Tailwind CSS
import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const TailwindCSSPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-50 min-h-screen p-8">
      <header className=" text-gray-900 py-6 px-2 pt-16 rounded-lg ">
        <h1 className="text-4xl font-extrabold">Tailwind CSS Documentation</h1>
        <p className="text-lg mt-2">Utility-first CSS framework for rapid UI development.</p>
      </header>

      <main className="mt-10 space-y-10">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2">Introduction</h2>
          <p className="text-gray-700 mt-4">
            Tailwind CSS is a highly customizable, utility-first CSS framework that enables developers to build modern UIs quickly and efficiently. 
            It provides low-level utility classes that can be composed to create any design, directly in your HTML or JSX.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2">Installation</h2>
          <p className="text-gray-700 mt-4">
            To get started with Tailwind CSS in your project, you can install it via npm and set up the configuration file. Run the following commands:
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}
            </code>
          </pre>
          <p className="text-gray-700 mt-4">
            After installation, configure the <code className="bg-gray-200 px-2 py-1 rounded text-sm">tailwind.config.js</code> file to include the paths to your templates.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2">Key Features</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><strong>Utility-first:</strong> Build designs directly in your markup using utility classes.</li>
            <li><strong>Responsive Design:</strong> Tailwind includes built-in responsive design utilities.</li>
            <li><strong>Customizability:</strong> Easily customize the framework to match your project’s design system.</li>
            <li><strong>Flexbox and Grid:</strong> Powerful layout utilities for building modern designs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2">Example Component</h2>
          <p className="text-gray-700 mt-4">
            Here’s an example of a responsive button component styled with Tailwind CSS:
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`function Button({ label }) {
  return (
    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600 transition">
      {label}
    </button>
  );
}`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2">Resources</h2>
          <p className="text-gray-700 mt-4">
            Explore more about Tailwind CSS and its features using the following resources:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><a href="https://tailwindcss.com/docs" className="text-teal-500 hover:underline">Official Documentation</a></li>
            <li><a href="https://play.tailwindcss.com/" className="text-teal-500 hover:underline">Tailwind CSS Playground</a></li>
            <li><a href="https://github.com/tailwindlabs/tailwindcss" className="text-teal-500 hover:underline">GitHub Repository</a></li>
          </ul>
        </section>
      </main>

      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default TailwindCSSPage;
