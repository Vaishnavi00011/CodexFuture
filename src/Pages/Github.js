// React component for a GitHub documentation page styled with Tailwind CSS
import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const GitHubPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-50 min-h-screen p-8">
      <header className=" text-gray-900 py-6 px-2  pt-16 rounded-lg">
        <h1 className="text-4xl font-extrabold">GitHub</h1>
        <p className="text-lg mt-2">Platform for hosting and collaborating on code repositories.</p>
      </header>

      <main className="mt-10 space-y-10">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">Introduction</h2>
          <p className="text-gray-700 mt-4">
            GitHub is a web-based platform for version control and collaboration. It allows developers to host, manage, and collaborate on code repositories with ease, using Git as the underlying version control system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">Key Features</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><strong>Repositories:</strong> Host and manage your code with Git version control.</li>
            <li><strong>Collaboration:</strong> Work with teams using pull requests, issues, and discussions.</li>
            <li><strong>Actions:</strong> Automate workflows directly in your repository.</li>
            <li><strong>Security:</strong> Keep your code secure with built-in vulnerability alerts.</li>
          </ul>
        </section>

        <section>
  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">
    Example: Creating a Repository
  </h2>
  <p className="text-gray-700 mt-4 text-sm sm:text-base">
    Here’s an example of how to create a new repository using the GitHub CLI:
  </p>
  <pre className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md mt-4 sm:mt-6 text-xs sm:text-sm overflow-x-auto">
    <code>
{`# Authenticate with GitHub
gh auth login

# Create a new repository
gh repo create my-repo --public --clone`}
    </code>
  </pre>
</section>


        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">Resources</h2>
          <p className="text-gray-700 mt-4">
            Explore more about GitHub using the following resources:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><a href="https://github.com" className="text-gray-800 hover:underline">GitHub Official Website</a></li>
            <li><a href="https://docs.github.com" className="text-gray-800 hover:underline">GitHub Documentation</a></li>
            <li><a href="https://github.com/features/actions" className="text-gray-800 hover:underline">GitHub Actions</a></li>
          </ul>
        </section>
      </main>

    
    </div>
    <Footer></Footer>
    </div>
  );
};

export default GitHubPage;
