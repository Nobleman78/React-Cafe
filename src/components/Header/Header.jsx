import { useState } from 'react';
import PropTypes from 'prop-types'
import profile from '../../assets/images/profile.png'
import './Header.css'
import Bookmark from '../Bookmark/Bookmark';
const Header = ({ readingTime, bookmarks }) => {
    const [bookMark, setBookMark] = useState(false);
    const [timesRead, setTimesRead] = useState(false);
    console.log(readingTime);
    console.log(bookmarks)



    return (
        <div>
            <header className='mt-5 px-3 w-[100%] md:w-[88%] mx-auto flex items-center relative justify-between ' >
                <h1 className='text-sm md:text-2xl font bold'>Knowledege Cafe</h1>
                <a onClick={() => setBookMark(!bookMark)} className='text-sm md:hidden cursor-pointer'>BookMarks</a>
                <a onClick={() => setTimesRead(!timesRead)} className='text-sm md:hidden cursor-pointer'>Times Read</a>
                <img className='w-10 md:w-15' src={profile} alt="" />
                {
                    bookMark && <div className='bg-white w-100 h-[500px] left-[-20px]  top-10 absolute'>

                        {
                            bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                        }

                    </div>


                }
                {
                    timesRead && <div className='bg-white md:hidden w-90 h-50 top-10 absolute'>
                        <p>Reading Time = {readingTime}</p>
                    </div>
                }
            </header>
            <hr className=' w-[95%]  md:w-[86%] mx-auto '></hr>


        </div>



    );

};
Header.propTypes = {
    readingTime: PropTypes.object,
    bookmarks: PropTypes.object
}

export default Header;
