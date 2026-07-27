import LeftbarBtn from "./LeftbarBtn";
import {
  House,
  Shirt,
  SportShoe,
  Handbag,
  Watch,
  Wrench,
  Unplug,
  Gift

} from "lucide-react";
import { useState } from "react";

const Leftbar = () => {
  const Links = [
    {
      icon: <House />,
      btnName: "All Products",
      id: "home",
    },
    {
      icon: <Shirt />,
      btnName: "Clothing",
      id: "cloth",
    },
    {
      icon: <SportShoe />,
      btnName: "Shoes",
      id: "shoe",
    },
    {
      icon: <Handbag />,
      btnName: "Bags",
      id: "bag",
    },
    {
      icon: <Watch />,
      btnName: "Watches",
      id: "watch",
    },
    {
      icon: <Wrench />,
      btnName: "Accessories",
      id: "more",
    },
    {
      icon: <Unplug />,
      btnName: "Electronics",
      id: "electric",
    },
  ];

  const [active, setActive] = useState("home")
  return (
    
    <div className="bg-[#FFFDF9] border-2 border-[#EAEAEA] flex flex-col items-center shadow-sm px-3 rounded-xl py-4">
      <div className=" flex justify-start w-full">
      <h1 className="ml-2 text-base font-medium text-gray-600">BROWSE</h1>
      </div>
      <div className="flex-col items-center flex gap-2 mt-1 pt-2 pb-3">
        {Links.map((link)=>(
      <LeftbarBtn
      icon={link.icon}
      key={link.id}
      btnName={link.btnName}
      active={active===link.id}
      onClick={()=>setActive(link.id)}
       />
        ))}
        </div>
        <div className="bg-[#EAE4F7] h-40 rounded-lg justify-center gap-1 w-44 px-3 flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-[#FFFDF9] flex justify-center items-center">
        <Gift className="text-[#5A3FF2] h-9 w-9"  />
          </div>
          <p className="text-center text-base font-medium text-gray-700">Get <span className="text-lg text-[#5A3FF2]">10%</span> off on your first order</p>
          <div className=" flex justify-center items-center">
          {/* <button className="h-9 w-28 transition delay-100 duration-200 bg-[#5A3FF2]  hover:border-2 rounded-lg hover:border-[#5A3FF2] hover:bg-transparent border-2 border-transparent  font-medium text-base text-white hover:text-gray-700 cursor-pointer">Shop Now</button> */}

          </div>
        </div>
      
    </div>
  
  );
};

export default Leftbar;
