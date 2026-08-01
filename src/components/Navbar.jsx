import { useState } from "react";
import { RiShoppingBagFill } from "@remixicon/react";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import NavbarLink from "./NavbarLink";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const btnClick =()=>{
    navigate ('/Cartpage')
  }
  const [active, setActive] = useState("shop");
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="md:sticky transition-all duration-200 ease-in top-0 z-50 bg-[#FFFDF9] border-b border-[#EAEAEA] shadow-sm relative">

      <div className="max-w-[1440px] mx-auto h-20 sm:h-20 flex items-center justify-between px-3 sm:px-6">

        <div className="flex items-center sm:gap-3">

          <RiShoppingBagFill
            className="text-[#6D4AFF] h-9 w-9 sm:h-10 sm:w-10"
          />

          <h1 className="text-2xl sm:text-3xl font-bold">
            Shop<span className="text-[#6D4AFF]">Sphere</span>
          </h1>

        </div>

        <div className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <NavbarLink
              key={link.id}
              href={link.href}
              linkName={link.linkName}
              active={active === link.id}
              onClick={() => setActive(link.id)}
            />
          ))}

        </div>

        <div className="hidden lg:flex items-center gap-5">


          <div className="flex items-center w-[360px] h-12 rounded-xl border border-gray-200 bg-white px-4">

            <Search size={20} className=" text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-3 w-full bg-transparent outline-none"
            />

          </div>

          <User
            className="cursor-pointer text-gray-700 hover:text-[#6D4AFF]"
            size={23}
          />


          <button onClick={btnClick} className="flex items-center gap-2 active: bg-[#6D4AFF] hover:bg-[#5A38EA] transition text-white rounded-xl px-4 py-3 cursor-pointer">

            <ShoppingCart className="h-6" />

            <span className="font-medium">
              Cart
            </span>

            <div className="h-6 w-6 rounded-full bg-white text-[#6D4AFF] flex items-center justify-center text-sm font-semibold">
              0
            </div>

          </button>

        </div>


        <div className="flex lg:hidden items-center gap-4">
            <Search size={25} className=" text-[#6D4AFF] " />


          <button className="relative bg-[#6D4AFF] text-white px-3 py-2 rounded-xl">

            <ShoppingCart className="h-5 w-5" />

            <div className="absolute transition duration-200 ease-in -top-3 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center">
              0
            </div>

          </button>

          <button
            onClick={() => setMenuToggle(!menuToggle)}
          >
            {menuToggle ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>


      

     <div
  className={`absolute right-1 mt-1 lg:hidden rounded-lg border border-gray-300 bg-white w-40 pl-3 py-5 shadow-md transition-all duration-300 ease-in-out origin-top-right
  ${
    menuToggle
      ? "opacity-100 scale-100 translate-y-0 "
      : "opacity-0 scale-95 -translate-y-2"
  }`}
>

         

          <div className="flex flex-col gap-4 font-medium ">

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

          <div className="lg:flex gap-6 hidden">


            <User className="cursor-pointer" />

          </div>

        </div>

      

    </nav>
  );
};

export default Navbar;