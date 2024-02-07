import { useEffect, useState } from "react";
import Item from "./Item";

const About = () => {
   const [about, setAbout] = useState([]);

   useEffect(() => {
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setAbout(data));
   }, []);
   return (
      <div className="md:mx-28 lg:mx-48 mt-8">
         <h3 className="text-center text-2xl font-bold underline my-8">My About Details {about.length}</h3>
         <div className="grid md:grid-cols-2 gap-5">
            {about.map((item) => (
               <Item key={item.id} item={item}></Item>
            ))}
         </div>
      </div>
   );
};

export default About;
