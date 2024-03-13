/* eslint-disable no-unused-vars */
import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/header/Header"



function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [markTime , setMarktime] = useState([0])

const handleAddBookmarks = (blog) =>{

const newBookmarks = [...bookmarks , blog]
setBookmarks (newBookmarks)
}


const handleMarkasRead = (time) =>{
const newReadingTime = parseInt(markTime + time) ;
setMarktime(newReadingTime)
}

  return (
    <main className="mx-auto container bg-emerald-300">

      <div className="p-6">
        <Header></Header>
        <div className="md:flex">
        <Blogs handleAddBookmarks={ handleAddBookmarks} handleMarkasRead={handleMarkasRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} markTime={markTime} ></Bookmarks>
        </div>
      </div>
    </main>
  )
}

export default App
