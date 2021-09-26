import React from 'react'
import '../styles/Blogs.css'
import Blog from './Blog'
import blogs from '../Assets/content-wirting/blogsdata/data'

const Blogs = () => {
    let recentBlogs =[]
    for(let i = 0 ;i<4;i++){
     recentBlogs.push (  <Blog title={blogs[i].title} des={blogs[i].smallDes} img={blogs[i].img} /> )  
     }
    return (
        <div id="Blogs" className='Blogs'>
            <h1> <span>Recent</span> Blogs</h1>
            <div className="Blogs_Container">
            {recentBlogs.map(item=> item)}
            </div>
            <div className="See_All_Blogs_Btn">
                <button>See All Blogs</button>
            </div>
        </div>
    )
}

export default Blogs
