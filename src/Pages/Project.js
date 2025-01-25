import React from 'react';
import Header from '../Componants/Header';
import Footer from "../Componants/Footer";

const experiences = [
  {
    id: 1,
    title: 'Imagnus',
    // description: 'Developed a scalable e-commerce platform with integrated payment solutions.',
    
    image: 'https://www.smartfuturestep.com/assets/images/project/style1/1.jpg',
  },
  {
    id: 2,
    title: 'Homes in Adroad',
    // description: 'Built a real-time social media application with chat and notifications.',
    
    image: 'https://www.smartfuturestep.com/assets/images/project/style1/2.jpg',
  },
  {
    id: 3,
    title: 'Joinus4Education',
    // description: 'Created a personal portfolio website to showcase projects and skills.',
  
    image: 'https://www.smartfuturestep.com/assets/images/project/style1/3.jpg',
  },

  {
    id: 3,
    title: 'Edgecoretechnologies',
    // description: 'Created a personal portfolio website to showcase projects and skills.',
   
    image: 'https://www.smartfuturestep.com/assets/images/project/style1/3.jpg',
  },
  {
    id: 3,
    title: 'IILMT Education',
    // description: 'Created a personal portfolio website to showcase projects and skills.',
  
    image: 'https://www.smartfuturestep.com/assets/images/project/style1/5.jpg',
  },

  {
    id: 3,
    title: 'Joinus4global Education',
    // description: 'Created a personal portfolio website to showcase projects and skills.',
 
    image: 'https://smartfuturestep.com/assets/images/project/style1/8.JPG',
  },
];

const ExperienceCard = ({ title, description, technologies, image }) => (
  <div className="relative shadow-lg  p-2 flex flex-col items-center text-center">
    <img  src={image} alt={title} className="w-[100%]  h-[30vh] object-cover  mb-4" />
    <h3 className="text-xl absolute font-semibold mb-2 bg-black left-[10px] text-gray-100 p-2 text-[14px]">{title}</h3>
    {/* <p className="text-gray-600 mb-4">{description}</p> */}
    <div className="flex flex-wrap justify-center gap-2">
     
    </div>
  </div>
);

const OurExperiencePage = () => {
  return (
    <div>
      <Header></Header>
    <div className="min-h-screen bg-gray-50 py-10">
      <div className=" mx-auto px-6 sm:px-10 ">
        <h1 className="text-3xl text-[40px] font-semibold  text-gray-800 text-center mb-20 pt-11">
          Our Experience
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default OurExperiencePage;