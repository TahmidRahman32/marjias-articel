import { FcLike } from "react-icons/fc";
const Item = ({ item }) => {
   console.log(item);
   const { cover, title, author, author_img, reading_time, date, article } = item;
   return (
      <div className=" my-4 rounded-lg shadow-lg">
         <div className="flex gap-3 items-center">
            <img className="w-80 h-60 rounded-lg" src={cover} alt="" />
            <div>
               <h2 className="text-xl font-semibold">{title}</h2>
               <p>{article}</p>
            </div>
         </div>
         <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
               <img className="w-12 rounded-full my-2" src={author_img} alt="" />
               <div>
                  <h2 className="text-xl font-semibold">{author}</h2>
                  <p>{date}</p>
               </div>
            </div>
            <div>
               <h4 className="flex items-center gap-2">
                  {" "}
                  Reading time
                  <span className="text-xl"> {reading_time}min</span>
                  <span className="text-xl mr-2 tracking-wide">
                     <FcLike />
                  </span>
               </h4>
            </div>
         </div>
      </div>
   );
};

export default Item;
