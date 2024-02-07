// import { Link } from "react-router-dom";
import "../style/style.css";
import logo from "../../../public/profile.jpg";
import { FaFacebook, FaGoogle, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
   return (
      <div className="md:mx-48 mt-4">
         <div className="img rounded h-full">
            <h2 className="text-white pt-36 text-5xl text-center">
               যে তোমায় <span className="text-green-700">ভালবাসবে!</span> <br />
            </h2>
            <h2 className="text-white pt-5 pb-32 text-5xl text-center"> শতাব্দী ফুরিয়ে গেলেও সে তোমার প্রতি মুগ্ধতা হারাবে না!</h2>
         </div>
         <div className="border my-3 rounded flex gap-3">
            <div>
               <img className="w-48 rounded" src={logo} alt="" />
            </div>
            <div>
               <h2 className="">
                  Name: <span className="text-2xl font-bold">marjia mir</span>
               </h2>
               <p className="flex items-center gap-1 my-2">
                  <span className="text-blue-700">
                     <FaFacebook />
                  </span>
                  <Link to={"https://www.facebook.com/marjiya.mir.7"}>Facebook</Link>
               </p>
               <p className="flex items-center gap-1 my-2">
                  <span className="">
                     <FaGoogle />
                  </span>
                  <Link to={""}>Google</Link>
               </p>
               <p className="flex items-center gap-1 my-2">
                  <span className="text-green-700">
                     <FaWhatsappSquare />
                  </span>
                  <Link to={""}>Whatsapp</Link>
               </p>
            </div>
            <h3 className="mx-auto mt-2 text-xl">
               আমিতো আমার কাছে পবিত্র থাকতে চাই,, <br /> নিজের করা কাজে যেন নিজেকে <br /> লজ্জিত না হতে হয়.. <br />
               •★ ❝ফুলপ্রিয়া❞
            </h3>
         </div>
      </div>
   );
};

export default Home;
