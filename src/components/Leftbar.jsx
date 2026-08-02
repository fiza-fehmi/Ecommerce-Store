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

const Leftbar = ({filters,setFilters}) => {
  const Links = [
    {
      icon: <House />,
      btnName: "All Products",
      id: "all",
    },
    {
      icon: <Shirt />,
      btnName: "Clothing",
      id: "Clothing",
    },
    {
      icon: <SportShoe />,
      btnName: "Shoes",
      id: "Shoes",
    },
    {
      icon: <Handbag />,
      btnName: "Bags",
      id: "Bags",
    },
    {
      icon: <Watch />,
      btnName: "Watches",
      id: "Watches",
    },
    {
      icon: <Wrench />,
      btnName: "Accessories",
      id: "Accessories",
    },
    {
      icon: <Unplug />,
      btnName: "Electronics",
      id: "Electronics",
    },
  ];

  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`hidden md:block bg-[#FFFDF9] transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 ${
        expanded ? "w-60 lg:w-64" : "w-16"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center border-2 border-[#EAEAEA] shadow-sm md:rounded-t-lg transition-all duration-300 h-14 ${
          expanded
            ? "justify-between px-4"
            : "justify-center bg-[#6D4AFF]"
        }`}
      >
        {expanded && (
          <RiShoppingBagFill className="h-7 w-7 text-[#6D4AFF]" />
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer"
        >
          {expanded ? (
            <PanelLeftOpen className="text-gray-600 h-6 w-6" />
          ) : (
            <PanelLeftClose className="text-white h-6 w-6" />
          )}
        </button>
      </div>

      {/* Body */}
      <div
        className={`border-x-2 border-b-2 border-[#EAEAEA] shadow-sm md:rounded-b-lg flex flex-col items-center transition-all duration-300 ${
          expanded ? "px-3 py-4" : "px-2 py-4"
        }`}
      >
        {expanded && (
          <div className="w-full mb-3">
            <h1 className="text-sm font-semibold text-gray-600 tracking-wide">
              BROWSE
            </h1>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col items-center gap-2 w-full">
          {Links.map((link) => (
            <LeftbarBtn
              key={link.id}
              icon={link.icon}
              btnName={link.btnName}
              active={active === link.id}
              onClick={() =>{ setActive(link.id); setFilters(link.id);}}
              expanded={expanded}
            />
          ))}
        </div>

        {/* Offer Card */}
        {expanded && (
          <div className="mt-6 w-full bg-[#EAE4F7] rounded-xl p-4 flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
              <Gift className="text-[#5A3FF2] h-8 w-8" />
            </div>

            <p className="text-center text-sm text-gray-700 font-medium mt-3 leading-5">
              Get <span className="text-[#5A3FF2] font-bold">10%</span> off on
              your first order
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Leftbar;