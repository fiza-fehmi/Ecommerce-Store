import LeftbarBtn from "./LeftbarBtn";
import {
  House,
  Shirt,
  SportShoe,
  Handbag,
  Watch,
  Wrench,
  Unplug,
  Gift,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { RiShoppingBagFill } from "@remixicon/react";
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

  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`bg-[#FFFDF9] transition-all duration-400 ease-in-out overflow-hidden ${expanded ? "w-64" :"md:w-16 w-13"}`}>
      <div className={`flex py-2 px-4 shadow-sm border-2 border-[#EAEAEA]  md:rounded-t-lg transition-all duration-400 ease-in-out ${expanded ? " w-full justify-between" :"md:w-16 w-13 bg-[#6D4AFF] justify-center"}`}>
        <RiShoppingBagFill className={`h-7 w-7 text-[#6D4AFF] transition-all duration-300 ease-in-out ${expanded ? "opacity-100" : "opacity-0"}`} />
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <PanelLeftOpen className="text-gray-600 cursor-pointer" />
          )  : (
            <PanelLeftClose className={expanded ? "text-gray-600 cursor-pointer h-7 w-7 justify-between" : "text-white cursor-pointer justify-center"} />
          )}
        </button>
      </div>
      <div className={`lower-panel border-l-2 border-b-2 border-r-2 border-[#EAEAEA] flex flex-col items-center shadow-sm px-3 rounded-b-lg py-4 transition-all duration-300 ease-in-out
        ${expanded ? "w-full" : "md:w-16 w-13 pt-0"}`}>
        <div className={`flex justify-between w-full transition-all duration-300 ease-in-out ${expanded ? "opacity-100 h-normal" :"opacity-0 h-0"}`}>
          <h1 className={`mx-2 text-base font-medium text-gray-600 `}>BROWSE</h1>
        </div>
        <div className="flex-col items-center flex gap-2 mt-1 pt-2 pb-3">
          {Links.map((link) => (
            <LeftbarBtn
              icon={link.icon}
              key={link.id}
              btnName={link.btnName}
              active={active === link.id}
              onClick={() => setActive(link.id)}
              expanded={expanded}
            />
          ))}
        </div>
        <div className={`bg-[#EAE4F7] h-36 rounded-lg justify-center overflow-hidden gap-1 w-44 px-3 flex flex-col items-center  transition-all duration-400 ease-in-out ${expanded ? "opacity-100 h-36" :"opacity-0 h-0"}`}>
          <div className={`h-14 w-13 rounded-full bg-[#FFFDF9] flex justify-center items-center $`}>
            <Gift className="text-[#5A3FF2] h-9 w-9" />
          </div>
          <p className="text-center text-base font-medium text-gray-700">
            Get <span className="text-lg text-[#5A3FF2]">10%</span> off on your
            first order
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Leftbar;
