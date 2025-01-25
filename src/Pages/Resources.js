import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';
import { Link } from 'react-router-dom';


const ResourcesPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-100 min-h-screen p-6 pt-24">
      <header className=" font-semibold text-black p-4 rounded-md">
        <h1 className="text-3xl font-bold text-center">IT Resources</h1>
        <p className="text-center mt-2">Explore a curated list of resources for IT professionals and enthusiasts.</p>
      </header>

      <main className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to={"/react-doc"}>
        <ResourceCard
          title="React Documentation"
          description="Comprehensive guide to building user interfaces with React."
          // link="https://reactjs.org/docs/getting-started.html"
        /></Link>
        <Link to={'/tailwind'}>
        <ResourceCard
          title="Tailwind CSS"
          description="Utility-first CSS framework for rapid UI development."
          // link="https://tailwindcss.com/docs"
        /></Link>
        <Link to={'/mdn'}>
        <ResourceCard
          title="MDN Web Docs"
          description="A great resource for web developers, covering HTML, CSS, and JavaScript."
          // link="https://developer.mozilla.org/"
        /></Link>
        <Link to={'/github'}>
        <ResourceCard
          title="GitHub"
          description="Platform for hosting and collaborating on code repositories."
          // link="https://github.com/"
        /></Link>
        <Link to={'/free-code'}>
        <ResourceCard
          title="FreeCodeCamp"
          description="Learn to code for free with interactive lessons and projects."
          // link="https://www.freecodecamp.org/"
        /></Link>
        <Link to={'/stack-over'}>
        <ResourceCard
          title="Stack Overflow"
          description="Community-driven Q&A platform for developers."
          // link="https://stackoverflow.com/"
        /></Link>
      </main>

      
    </div>
    <Footer></Footer>
    </div>
  );
};

const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        Visit Resource
      </a>
     
    </div>
  );
};

export default ResourcesPage;
