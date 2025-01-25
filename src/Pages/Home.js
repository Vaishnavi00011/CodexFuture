import React from 'react'
import Header from '../Componants/Header'
import Intro from '../Componants/Intro'
import OurExperiencePage from '../Componants/Experience'
import Footer from '../Componants/Footer'
import WhyChoose from '../Componants/WhyChoose'
import Technologies from '../Componants/Technologies'
import Services from '../Componants/Services'
import Tech from '../Componants/Tech'

function Home() {
  return (
    <div className='flex flex-col '>
        <Header></Header>
        <Intro></Intro>
        <Services></Services>
        <OurExperiencePage></OurExperiencePage>
        <WhyChoose></WhyChoose>
        <Technologies></Technologies>
        <Tech></Tech>
        <Footer></Footer>
    </div>
  )
}

export default Home