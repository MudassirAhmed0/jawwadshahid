import React from 'react'
import DosraHeader from '../Components/DosraHeader'
import Footer from '../Components/Footer'
import AboutMe from '../Components/Projects'



const About = ()=>{
   return      <>
            <DosraHeader linkActive='about'/>
            <div className="mt5rem"></div>
                <AboutMe/>
            <Footer/>
         </>
}

export default About 