import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch("banglaData.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   return (
      <div className="md:mx-48 mt-4">
         <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
               <Blog key={blog.id} blog={blog}></Blog>
            ))}
         </div>
      </div>
   );
};

export default Blogs;
