import React from 'react'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Blogs from '../Components/Blogs'
import Projects from '../Components/Projects'
import About from '../Components/About'
import Offers from '../Components/Offers'

const Landing = () => {
    return (
        <>
            <Header/>
            <Hero />
            <Projects />
            {/* <About/> */}
            <Blogs />
            <Offers/>
            <Contact />
            <Footer />
        </>
    )
}

export default Landing
