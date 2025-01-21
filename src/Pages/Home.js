import React from 'react'
import Header from '../Componants/Header'
import Intro from '../Componants/Intro'
import OurExperiencePage from '../Componants/Experience'
import Footer from '../Componants/Footer'
import WhyChoose from '../Componants/WhyChoose'
import Technologies from '../Componants/Technologies'

function Home() {
  return (
    <div className='flex flex-col '>
        <Header></Header>
        <Intro></Intro>
        <OurExperiencePage></OurExperiencePage>
        <WhyChoose></WhyChoose>
        <Technologies></Technologies>
        <Footer></Footer>
    </div>
  )
}

export default Home