import { Link } from "react-router-dom";
import logo from "../../../public/profile2.jpg";

const Header = () => {
   return (
      <div className="md:mx-28 lg:mx-48 mt-8">
         <div className="flex justify-between items-center">
            <div>
               <h1 className=" text-3xl font-bold"> marjia's Blog</h1>
            </div>
            <div className="flex items-center gap-4 text-xl">
               <Link className="hover:text-blue-800" to={"/"}>
                  Home
               </Link>
               <Link className="hover:text-blue-800" to={"/about"}>
                  About
               </Link>
               <Link className="hover:text-blue-800" to={"/blogs"}>
                  Blogs
               </Link>
            </div>
            <div>
               <img className="w-12 rounded-full" src={logo} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Header;
