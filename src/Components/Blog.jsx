import React from 'react'
import { Link } from 'react-router-dom';

const Blog =({title,des,img})=>{

    return(
        <div className="Blog_Card">
        <div className="Blog_Card_Img">
            <Link to={`blog/${title}`}>
              <img src={img} alt="" />
            </Link>
        </div>
    <div className="Blog_Card_Content">
        <h4>{title}</h4>
        <p>
       {des}
        </p>
        <Link to={`blog/${title}`}>
        <button>Read More</button>
        </Link>
    </div>
    </div>

    )
}
export default Blog;