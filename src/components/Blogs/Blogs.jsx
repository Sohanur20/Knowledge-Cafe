
import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {

        fetch("Data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>

            <h2>All data : {blogs.length} </h2>

            {
                blogs.map(blog => )
            }
        </div>
    );
};

export default Blogs;