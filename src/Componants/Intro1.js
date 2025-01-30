import React from 'react'

function Intro() {
  return (
    <div className='w-[100%] relative'>
      {/* Background Image */}
      <div className='w-[100%] relative'>
        <img className='lg:h-[100vh] sm:h-0 w-[100%] object-center object-cover' src='pexels-googledeepmind-18069157.jpg' alt="Background" />
      </div>

      {/* Content Over Image */}
      <div className='absolute lg:top-[60%] top-[40%]   flex flex-col items-center justify-center w-[100%] px-4'>
        {/* Heading */}
        <h1 className='lg:text-[35px] text-[25px] font-bold lg:w-[60%] w-[80%] font-serif text-center text-gray-900 md:text-[40px] sm:text-[30px]'>
          CodexFuture Technologies Pvt.Ltd.
        </h1>
        {/* Paragraph */}
        <p className='text-center lg:w-[50%] text-gray-600 font-bold lg:text-[15px] md:text-[16px] w-[80%] text-[11px]'>
          Codex Future Technologies is a leading web development company specializing in innovative and reliable digital solutions. We offer a range of services including website design and development, e-commerce solutions, mobile app development, and digital marketing. Our team uses the latest technologies to deliver customized solutions that help businesses establish a strong online presence and drive growth.
        </p>
      </div>
    </div>
  )
}

export default Intro
