/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {

        fetch("Data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div className="border-2 w-2/3">

           <h2 className="text-center">blogs : {blogs.length}</h2>

            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;