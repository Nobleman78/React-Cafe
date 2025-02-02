import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
    const[blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="pt-4">
            {/* <h2>Blogs : {blogs.length}</h2> */}
            {
                blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog} 
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead} 
                    ></Blog>)
            }

            
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blogs;