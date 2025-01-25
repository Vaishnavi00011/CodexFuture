import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'

function Sarvice() {
  return (
    <div>
        <Header></Header>
        <section id="services" class="py-16 px-8 pt-20">
    <h2 class="text-[35px] font-bold text-center text-black mb-12">Our Services</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* <!-- Service Card 1 --> */}
      <div class="bg-white border-[1px] border-gray-400 p-6 rounded-lg shadow-lg">
        <img src="https://eboxman.com/wp-content/uploads/2022/10/3-2.webp" alt="Web Development" class="w-full h-48 object-cover rounded-lg mb-4">
        </img>
        <h3 class="text-2xl font-bold text-black  mb-4">Web Development</h3>
        <p class="text-gray-600 mb-4 text-[18px]">We create responsive and dynamic websites using the latest technologies like React, Angular, and Vue.js.</p>
      </div>

      {/* <!-- Service Card 2 --> */}
      <div class="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-lg">
        <img src="https://miro.medium.com/v2/resize:fit:7872/1*ecU3mH6ajULJpcVFvLGcaQ.png" alt="Mobile App Development" class="w-full h-48 object-cover rounded-lg mb-4">
        </img>
        <h3 class="text-2xl font-semibold text-black  mb-4">Mobile App Development</h3>
        <p class="text-gray-600 mb-4 text-[18px]">Build powerful and scalable mobile apps for both iOS and Android with native and cross-platform technologies.</p>
      </div>

      {/* <!-- Service Card 3 --> */}
      <div class="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-lg">
        <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/08/12060931/Untitled-design-88.png" alt="Cloud Solutions" class="w-full h-48 object-cover rounded-lg mb-4">
        </img>
        <h3 class="text-2xl font-semibold text-black  mb-4">Cloud Solutions</h3>
        <p class="text-gray-600 text-[18px] mb-4">Secure and scalable cloud services including cloud storage, hosting, and computing resources for your business.</p>
      </div>

            {/* <!-- Service Card 5 --> */}
      <div class="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-lg">
        <img src="https://media.licdn.com/dms/image/D4D12AQFOu5LK7c_Aqw/article-cover_image-shrink_600_2000/0/1685338553716?e=2147483647&v=beta&t=tFuqP1vi-JVD14KtBcBjjbBDj0Mj0qELaqMJ6iHpzD4" alt="Data Analytics" class="w-full h-48 object-cover rounded-lg mb-4">
        </img>
        <h3 class="text-2xl font-semibold text-black  mb-4">Data Analytics</h3>
        <p class="text-gray-600 text-[18px] mb-4">Leverage the power of data with our analytics solutions to drive business decisions and improve performance.</p>
      </div>
</div>
</section>
<Footer></Footer>
    </div>
  )
}

export default Sarvice