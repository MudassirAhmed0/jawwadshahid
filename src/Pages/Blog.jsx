import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import blogs from '../Assets/content-wirting/blogsdata/data'
import DosraHeader from '../Components/DosraHeader'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


const Blog =()=>{
    const {pathname}  = useLocation()
    const [blog,setBlog] = useState([])
    useEffect(()=>{
        let path =pathname.replace("/blog/","") 
     let newBlog = blogs.filter(blog => blog.title === path )
       setBlog(newBlog)
    },[])
      return  <>
            <DosraHeader/>
             <div className="BlogsContainer">
             
                     {blog &&   <div className="Blog">
                            <div className="BlogImage">
                                <img src={blog[0]?.img} alt={blog[0]?.title} />
                            </div>
                            <div className="BlogContent">
                                <h2>{blog[0]?.title}</h2>
                               {blog.paras &&
                                   blog[0]?.paras.map(para=>
                                <div className="BlogParas">
                                <p>
                                 <span> {para[0]} </span> {para[1]}</p>

                                </div>
                                       
                                   )
                               }
                            </div>
                        </div>
 }
                 
             </div>
            <Footer/>
        </>
}
export default Blog
