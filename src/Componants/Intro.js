import React from 'react'

function Intro() {
    
        return (
          <div className='w-[100%]  relative '>
          {/* <div className=' w-[50%]  flex flex-col gap-10   '>
            <h1 className='text-[40px] font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-700 to-pink-600'>CodexFuture Technologies Introduction </h1>
            <p className='text-center font-center  font-extralight text-[20px]'>
            Codex Future Technologies is a leading web development company specializing in innovative and reliable digital solutions. We offer a range of services including website design and development, e-commerce solutions, mobile app development, and digital marketing. Our team uses the latest technologies to deliver customized solutions that help businesses establish a strong online presence and drive growth.      </p>
          </div> */}
          <div className='w-[100%] relative  '>
          <img className='  h-[100vh] w-[100%]  object-center object-cover' src='pexels-googledeepmind-18069157.jpg'></img>
         </div>
         <div className='absolute top-[60%] flex flex-col items-center justify-center w-[100%]'>
            <h1 className='text-[35px]  font-bold w-[60%]  font-serif text-center text-gray-900'>CodexFuture Technologies Private Limited </h1>
            <p className='text-center  w-[50%]  text-gray-600  font-bold text-[15px]  '>
            Codex Future Technologies is a leading web development company specializing in innovative and reliable digital solutions. We offer a range of services including website design and development, e-commerce solutions, mobile app development, and digital marketing. Our team uses the latest technologies to deliver customized solutions that help businesses establish a strong online presence and drive growth.      </p>
          

            

         </div>
          </div>
        )
      }



export default Intro