import React from 'react';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

const MDNWebDocsPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
        <header className="text-gray-900 py-4 px-2 pt-16 rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold">MDN Web Docs</h1>
          <p className="text-base sm:text-lg mt-2">
            A great resource for web developers, covering HTML, CSS, and JavaScript.
          </p>
        </header>

        <main className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
              Introduction
            </h2>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              MDN Web Docs is a comprehensive resource for web developers. It provides in-depth guides, tutorials, and references for HTML, CSS, JavaScript, and other web technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2 text-sm sm:text-base">
              <li>
                <strong>HTML:</strong> Learn the structure of web pages and semantic markup.
              </li>
              <li>
                <strong>CSS:</strong> Style your web pages with modern techniques like Flexbox and Grid.
              </li>
              <li>
                <strong>JavaScript:</strong> Add interactivity and dynamic behavior to your web applications.
              </li>
              <li>
                <strong>APIs:</strong> Explore browser APIs like WebRTC, Geolocation, and Fetch.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
              Example: Creating a Responsive Card
            </h2>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Here’s an example of a responsive card component using HTML and CSS:
            </p>
            <pre className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md mt-4 sm:mt-6 text-xs sm:text-sm overflow-x-auto">
              <code>
{`<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
</div>`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
              Resources
            </h2>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Visit the MDN Web Docs for more information and tutorials:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2 text-sm sm:text-base">
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-500 hover:underline">
                  HTML Documentation
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-500 hover:underline">
                  CSS Documentation
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-500 hover:underline">
                  JavaScript Documentation
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MDNWebDocsPage;
