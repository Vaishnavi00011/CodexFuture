// App.js
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-800">Our Technology Stack</h2>
          <p className="mt-4 text-gray-600">
            We leverage the most advanced and reliable technologies to deliver top-notch solutions.
          </p>

          {/* Technologies Grid */}
          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Technology 1 */}
            <div className="p-6 bg-gray-50 shadow-md shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="React"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Programming language</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>C/C++</li>
    <li>Java</li>
    <li>JavaScript</li>
    <li>Python</li>
    <li>PHP</li>
</ul>
              </p>
            </div>

            {/* Technology 2 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Node.js"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Web Development</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>Frontend</li>
    <li>Backend</li>
    
</ul>
              </p>
            </div>

            {/* Technology 3 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Tailwind CSS"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Mobile App Development</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>Flutter</li>
    <li>React Native</li>
    <li>Swift(OS Development)</li>
    
</ul>
              </p>
            </div>

            {/* Technology 4 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="MongoDB"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">DataBase</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>Relational Database</li>
    <li> NOSQL Database</li>
    
</ul>
              </p>
            </div>

            {/* Technology 5 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="AWS"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Cloud Plateforms</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>Amazon web Server (AWS) </li>
    <li>Microsoft Azure</li>
    <li>Google Cloud Platform</li>
    </ul>
              </p>
            </div>

            {/* Technology 6 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Python"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">DevOps</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>GitHub Actions</li>
    <li>Docker</li>
    <li>Kubermetes</li>
    </ul>
              </p>
            </div>

            {/* Technology 7 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Kubernetes"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Data Analytics</h3>
              <p className="mt-2 text-gray-600">
              <ul>
    <li>Tableau</li>
   <li>PowerBI</li>
    <li>Sql</li>
    <li>Ms Excel</li>
    <li>Statics</li>
 </ul>
              </p>
            </div>

            {/* Technology 8 */}
            <div className="p-6 bg-gray-50 shadow-md  shadow-slate-400 rounded-lg hover:shadow-lg">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Docker"
                className="mx-auto w-16 h-16"
              /> */}
              <h3 className="mt-4 text-xl font-bold text-black">Machine Learning</h3>
              <p className="mt-2 text-gray-600">
              <ul>
                    <li>Machine Learning Algorithm</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default App;
