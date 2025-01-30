import React from 'react'
import Header from '../Componants/Header1'
import Intro from '../Componants/Intro1'
import OurExperiencePage from '../Componants/Experience1'
import Footer from '../Componants/Footer1'
import WhyChoose from '../Componants/WhyChoose1'
import Technologies from '../Componants/Technologies1'
import Services from '../Componants/Services1'
import Tech from '../Componants/Tech1'

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