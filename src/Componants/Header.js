import React from 'react'

function Header() {
  return (
    <div className='flex fixed z-10 w-[100%] bg-gray-100 justify-between shadow-md items-center py-4 px-6 '>
        
         <div className='flex gap-2 items-center'>
         <img className='w-[33px] h-[33px]' src='https://www.smartfuturestep.com/assets/images/favicon.png'></img>
         <label className='font-bold text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-green-700  to-black '>CodexFutureTechnologies</label>
         </div>
         <div className='flex gap-16 items-center justify-center'>
          
          <label className=' l1 text-black text-[18px] font-semibold  font-serif '>About</label>
          

            <label className='l1 text-black text-[18px] font-semibold font-serif  '>Service</label>
            <label className='l1 text-black text-[18px] font-semibold font-serif '>Resources</label>
            <label className='l1 text-black text-[18px] font-semibold font-serif '>Contact</label>
         </div> 
        

    </div>
  )
}

export default Header