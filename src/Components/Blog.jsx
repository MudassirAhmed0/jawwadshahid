import React from 'react'

const Blog =({title,des,img})=>{

    return(
        <div className="Blog_Card">
        <div className="Blog_Card_Img">
              <img src={img} alt="" />
        </div>
    <div className="Blog_Card_Content">
        <h4>{title}</h4>
        <p>
       {des}
        </p>
        <button>Read More</button>
    </div>
    </div>

    )
}
export default Blog;