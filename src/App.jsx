import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/header/Header"



function App() {


  return (
    <main>

      <div>
        <Header></Header>
        <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        </div>
      </div>
    </main>
  )
}

export default App
