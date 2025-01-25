import React from 'react';

const HomeTechnologies = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Technologies We Leverage</h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Discover the cutting-edge tools and frameworks that power our innovative solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
              alt="React" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src ="https://miro.medium.com/v2/resize:fit:800/1*COvz0L3FUapYYbsQHHZ90g.png"
              alt="Node.js" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://images.javatpoint.com/csspages/images/css-tutorial.png" 
              alt="Tailwind CSS" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://quantumzeitgeist.com/wp-content/uploads/pythoned.png" 
              alt="Python" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s" 
              alt="Javascript" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://miro.medium.com/v2/resize:fit:1200/1*tFl-8wQUENETYLjX5mYWuA.png" 
              alt="AWS" 
              className="w-16 h-16 mx-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTechnologies;