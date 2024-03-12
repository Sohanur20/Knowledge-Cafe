/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog ,handleAddBookmarks}) => {

    console.log(blog)

    const { title, cover, author_img, author, reading_time, posted_date, hashtags
    } = blog
    return (
        <div className='mb-20 '>
            <img className='rounded-2xl w-full' src={cover} alt={`cover oicture of the tittle ${title}`} />

            <div className='flex gap-72 items-center'>
                <div className='flex gap-3 my-4'>
                    <img className='w-[60px] h-[60px] rounded-full ' src={author_img} alt="" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>


                <div className=''>
                    <button onClick={handleAddBookmarks} className='text-2xl bg-yellow-200 flex items-center gap-4 hover:bg-orange-200 p-5 rounded-full'><FaBookmark /> <span>{reading_time} min read</span></button>
                   
                </div>
            </div>

            <h1>{title}</h1>
            <p>
                {

                    hashtags.map((hash , idx) => <span key={idx}><a href={hash}></a></span>)

                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;