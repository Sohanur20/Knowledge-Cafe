/* eslint-disable no-unused-vars */
import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/header/Header"



function App() {

  const [bookmarks, setBookmarks] = useState([])

const handleAddBookmarks = (blog) =>{

console.log('bookmark added will soon')
}


  return (
    <main className="mx-auto container bg-emerald-300">

      <div className="p-6">
        <Header></Header>
        <div className="md:flex">
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
        </div>
      </div>
    </main>
  )
}

export default App
