import PropTypes from 'prop-types'
import './Bookmark.css'
const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div className='bookmark-container'>
            <h3 className='bookmark-title'>{title}</h3>
            
        </div>
    );
};
Bookmark.propTypes ={
    bookmark:PropTypes.object
}

export default Bookmark;