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
      <div className="flex-col items-center flex gap-2 mt-1 py-2">
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
        <div className="bg-[#e5e5e5] h-28 w-40">
  <Gift />

        </div>
      
    </div>
  
  );
};

export default Leftbar;
