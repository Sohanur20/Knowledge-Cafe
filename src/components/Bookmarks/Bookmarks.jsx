/* eslint-disable react/prop-types */
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks,markTime}) => {
    return (
        <div className=" md:w-1/3 bg-red-200 rounded-2xl m-5">
            <div className="text-center mt-4 font-bold bg-stone-100 p-5 rounded-md mx-10">
              <h2>  Reading Time : {markTime}</h2>
            </div>
            <h1 className="text-center mt-4 font-bold bg-stone-100 rounded-2xl mx-10">bookmarks : {bookmarks.length}</h1>

            {
                bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;