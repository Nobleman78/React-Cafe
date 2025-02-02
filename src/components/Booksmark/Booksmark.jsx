import Bookmark from '../Bookmark/Bookmark';
import './Booksmark.css'
import PropTypes from 'prop-types'
const Booksmark = ({bookmarks,readingTime}) => {
    return (
        <div>
            <div className='reading-container'>
                <h3 className="reading-text">Spent Time on Read : {readingTime} </h3>
            </div>
            <div className='bookmarks-container'>
                <h2 className="bookmark-text">Bookmarked Blogs : </h2>
                {
                    bookmarks.map((bookmark,idx)=><Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }
            </div>
            
        </div>
    );
};
Booksmark.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number    
}

export default Booksmark;