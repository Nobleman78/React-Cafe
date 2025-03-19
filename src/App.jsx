import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmark from './components/Booksmark/Booksmark'
import Header from './components/Header/Header'
function App() {
  const[bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);


  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  
  }


  return (
    <div>

      <Header readingTime={readingTime} bookmarks={bookmarks}></Header>
      <div className='container'>
        <Blogs handleBookmarks = {handleBookmarks}handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Booksmark bookmarks={bookmarks}readingTime={readingTime} ></Booksmark>
      </div>
      
      
    </div>
  )
}

export default App
