import React, { useEffect, useRef } from 'react'
// import logo from '../Linkssets/imgs/log.png'
import '../styles/Header.css'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const DosraHeader = ({linkActive}) => {
    const bars = useRef(null)
    const mobileNav = useRef(null)
    const header = useRef(null)
   /*  const navlinks = document.querySelectorAll('.navlink')
    const addActiveClass = e => {
        navlinks.forEach(link => link.classList.contains('activeLink') && link.classList.remove('activeLink'))
        e.target.classList.add('activeLink') */
    // }
    // const addClassToNav = () => {
      /*   const scroll = window.scrollY

        if (scroll > 100) {
            header?.current.classList.add('headerBg')
        }
        else {
            header?.current.classList.remove('headerBg')
        }

    } */

   /*  useEffect(() => {
        window.addEventListener('scroll', addClassToNav)
        return () => {
            window.removeEventListener('scroll', addClassToNav)
        }
    }, []) */
    
/*     const addClassToNavLink = () => {
        const Home = document.getElementById('Home')
        const Projects = document.getElementById('Projects')
        const Blogs = document.getElementById('Blogs')
        const Contact = document.getElementById('Contact')
        const H = document.getElementById('H')
        const P = document.getElementById('P')
        const S = document.getElementById('S')
        const C = document.getElementById('C')
        const scroll = window.scrollY
        if (scroll < Home.clientHeight - 100) {
            P.classList.remove('activeLink')
            S.classList.remove('activeLink')
            C.classList.remove('activeLink')
            H.classList.add('activeLink')
        }
        else if (scroll < Home.clientHeight + Projects.clientHeight -100) {
            H.classList.remove('activeLink')
            S.classList.remove('activeLink')
            C.classList.remove('activeLink')
            P.classList.add('activeLink')
        }

        else if (scroll < Home.clientHeight + Projects.clientHeight + Blogs.clientHeight - 230) {
            P.classList.remove('activeLink')
            C.classList.remove('activeLink')
            H.classList.remove('activeLink')
            S.classList.add('activeLink')
        }

        else {
            P.classList.remove('activeLink')
            S.classList.remove('activeLink')
            H.classList.remove('activeLink')
            C.classList.add('activeLink')
        }

    } */

 /*    useEffect(() => {
        window.addEventListener('scroll', addClassToNavLink)
        return () => {
            window.removeEventListener('scroll', addClassToNavLink)
        }
    }, []) */
    const openNav = () => {
        bars.current.classList.toggle('barsActive')
        let mN= document.querySelector('.mobileNav')
        mN.classList.toggle('mobileNavActive')
    }
    const closeSidebar =()=>{
        let mN= document.querySelector('.mobileNav')
         mN.classList.remove('mobileNavActive')
         bars.current.classList.remove('barsActive')
    }
   
        return (
        <header  className='headerBg' as='nav'>
            <div className="logo">
                <Link to='/'>
                    <h1>JS</h1>
                </Link>
                {/* <img src={logo} alt="Logo" /> */}
            </div>
            <ul>
                <li><Link  to='/' className={"navlink"+ " "  } >Portfolio</Link></li>
                <li><Link  to='/about' className={`"navlink " ${linkActive == "about"  && " activeLink"}` } >About Me</Link></li>
                <li><Link  to='/blogs'  className={`"navlink " ${linkActive == "blogs"  && " activeLink"} `} >Blogs</Link></li>
                <li className='heroBtn'><Link  to='/contact'>Contact Now</Link></li>
            </ul>
            <div ref={bars} className='bars' onClick={openNav}>
                <span className='bar bar1'></span>
                <span className='bar bar2'></span>
                <span className='bar bar3'></span>
                <span className='barArrow'></span>

            </div>
            <div  className='mobileNav'>
                <ul>
                    <li><Link  to='/'className='mobileNavItem'  onClick={closeSidebar} >Portfolio</Link></li>
                    <li><Link  to='/about'className='mobileNavItem'  onClick={closeSidebar} >About Me</Link></li>
                    <li><Link  to='/blogs'className='mobileNavItem' onClick={closeSidebar}  >Blogs</Link></li>
                    <li className='mobileNavBtn'><Link  to='/contact' onClick={closeSidebar} className='mobileNavItem' >Contact Now</Link></li>
                </ul>
            </div>
          
        </header>
    )
}

export default DosraHeader
