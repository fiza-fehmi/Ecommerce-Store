import { RiShoppingBagFill} from "@remixicon/react";
import NavbarLink from "./NavbarLink";
import { useState } from "react";
import { ShoppingCart ,Menu ,X  } from "lucide-react";
const links = [
  {
    href: "#shop",
    linkName: "Shop",
    id: "shop",
  },
  {
    href: "#category",
    linkName: "Category",
    id: "category",
  },
  {
    href: "#collection",
    linkName: "Collections",
    id: "collection",
  },
  {
    href: "#about",
    linkName: "About us",
    id: "about",
  },
];
const Navbar = () => {
  const [active, setActive] = useState("shop");
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <div className="lg:h-16 h-16  px-3 flex sm:px-8 justify-between items-center w-full bg-gradient-to-r from-[#1F2038] via-[#2B2344] to-[#3B294A]">
        <div className="sm:hidden">
             <button className="sm:hidden text-[#F6C5D1]" onClick={()=>setMenuToggle(!menuToggle)}>
        {menuToggle ?  (  <X />): (<Menu/>)}
        </button>
        </div>
      <div className="flex items-center">
        <RiShoppingBagFill className="text-[#F6C5D1] w-8 h-8  lg:h-10 lg:w-16" />
        <h1 className="text-lg font-medium lg:text-2xl lg:font-bold text-white">
          Shop<span className="text-[#F6C5D1]">Sphere</span>
        </h1>
      </div>
      <div className="md:flex items-center gap-4 text-white lg:gap-8 hidden"> 
        {links.map((link) => (
          <NavbarLink
            href={link.href}
            linkName={link.linkName}
            key={link.id}
            active={active === link.id}
            onClick={() => setActive(link.id)}
          />
        ))}
      </div>
      <div className="flex items-center rounded-xl justify-center h-10 w-20 sm:w-24 sm:px-0 lg:h-12 lg:w-32 gap-2 lg:gap-2 bg-[#2B2344] shadow-[0_10px_30px_rgba(246,197,209,0.45)] text-white cursor-pointer hover:bg-[#241C3A]
transition-all
duration-300">
        <span>
          <ShoppingCart className="text-[#F6C5D1] h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <button className="text-base sm:flex items-center gap-1 cursor-pointer hidden">
        Cart
          
        </button>
          <div className="h-5 w-5 bg-red-300  flex justify-center items-center rounded-full">
            0
          </div>
      </div>
     {menuToggle && (
  <div className="md:hidden flex flex-col transition duration-300 ease-linear delay-700
   justify-start absolute left-0 gap-4 bg-[#2B2344]  mt-58 rounded-br-xl px-5 pt-2 pb-5">
    {links.map((link) => (
      <NavbarLink
        key={link.id}
        href={link.href}
        linkName={link.linkName}
        active={active === link.id}
        onClick={() => {
          setActive(link.id);
          setMenuToggle(false);
        }}
      />
    ))}
  </div>
)}
    </div>
  );
};

export default Navbar;
