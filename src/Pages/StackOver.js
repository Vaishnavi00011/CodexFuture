// React component for a Stack Overflow documentation page styled with Tailwind CSS
import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const StackOverflowPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="bg-gray-50 min-h-screen p-8">
      <header className=" text-gray-900 py-4 pt-16 px-2 rounded-lg">
        <h1 className="text-5xl font-bold">Stack Overflow</h1>
        <p className="text-lg mt-2">Community-driven Q&A platform for developers.</p>
      </header>

      <main className="mt-12 space-y-12">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Why Stack Overflow?</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Stack Overflow is the go-to platform for developers to share knowledge, solve problems, and collaborate on coding challenges. With a vast community and a rich repository of questions and answers, it empowers developers to grow and succeed.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Questions and Answers</h3>
              <p className="text-gray-700 mt-2">
                Find answers to millions of coding questions, or contribute your expertise by answering others' queries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Reputation System</h3>
              <p className="text-gray-700 mt-2">
                Earn reputation points and badges for your contributions, showcasing your expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Tagging System</h3>
              <p className="text-gray-700 mt-2">
                Use tags to categorize questions, making it easier to find and organize content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Collaborative Editing</h3>
              <p className="text-gray-700 mt-2">
                Improve the quality of questions and answers through community-driven edits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">How to Ask a Good Question</h2>
          <p className="text-gray-700 mt-4">
            To get the best answers, follow these tips when asking a question on Stack Overflow:
          </p>
          <ul className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
            <li>Be specific and provide enough details about your problem.</li>
            <li>Include relevant code snippets and error messages.</li>
            <li>Use clear and concise language.</li>
            <li>Search for similar questions before posting.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Example Code</h2>
          <p className="text-gray-700 mt-4">
            Here’s an example of a centered div using modern CSS:
          </p>
          <pre className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-sm">
            <code>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div class="centered">
      <h1>Hello, Stack Overflow!</h1>
    </div>
  </body>
</html>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">Resources</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li><a href="https://stackoverflow.com" className="text-blue-600 hover:underline">Official Website</a></li>
            <li><a href="https://stackoverflow.blog" className="text-blue-600 hover:underline">Stack Overflow Blog</a></li>
            <li><a href="https://meta.stackoverflow.com" className="text-blue-600 hover:underline">Meta Stack Overflow</a></li>
          </ul>
        </section>
      </main>

     
    </div>
    <Footer></Footer>
    </div>
  );
};

export default StackOverflowPage;
