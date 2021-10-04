import React from 'react'
import { Link } from 'react-router-dom'
import blogs from '../Assets/content-wirting/blogsdata/data'
import DosraHeader from '../Components/DosraHeader'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


const Blogs =()=>{
      return  <>
            <DosraHeader linkActive='blogs'/>
             <div className="BlogsContainer">
                 {
                     blogs.map(blog=>
                        <div className="Blog">
                            <div className="BlogImage">
                                <Link to={`blog/${blog.title}`}>

                                <img src={blog.img} alt={blog.title} />
                                 </Link>
                            </div>
                            <div className="BlogContent">
                                <h2>{blog.title}</h2>
                                <p>{blog.smallDes}</p>
                                <Link to={`blog/${blog.title}`}> Read  More...</Link>
                            </div>
                        </div>
                        )
                 }
             </div>
            <Footer/>
        </>
}
export default Blogs
