import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types'
import './Blog.css'
const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
    const{cover,title,author_img,author,reading_time,hashtags,id} = blog;
    return (
        <div className='pt-3 mb-20 '>
            <img className="w-full mb-3" src={cover} alt="" />
            <div className="flex justify-between ">
                <div className="flex ">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="author-font-size">{author}</h3>
                        <p>Posted Date</p>
                    </div>
                </div>
                <div>
                    <span className="text-size">{reading_time} min read</span>
                    <button className="ml-2 cursor-pointer" onClick={()=>handleBookmarks(blog)} ><CiBookmark /></button>
                </div>
            </div>
            <h3 className="text-2xl mt-3 mb-3">{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <div>
                <button onClick={()=>handleMarkAsRead(id,reading_time)} className="mt-3 cursor-pointer">Mark as read</button>
            </div>
        </div>
      
    );
};
Blog.propTypes = {
    blog:PropTypes.object,
    handleBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;