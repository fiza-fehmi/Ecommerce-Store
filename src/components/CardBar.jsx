import Card from "./Card";
import { products } from "../data/products";
import Filters from "./Filters";
import { Funnel } from "lucide-react";
import { useState } from "react";

const CardBar = () => {
  const [filterToggle, setFilterToggle] = useState(false)
  return (
    <div className="relative transition duration-300 ease-in">
       <div className="hidden sm:flex">
        <h1 className="uppercase text-black sm:font-bold font-medium text-lg sm:text-xl py-3 px-3">All Products</h1>  
      </div>
      <div className="sm:hidden relative">
      <div className=" flex items-center justify-between px-5 py-1">
        <h1 className="uppercase text-black sm:font-bold font-medium text-lg sm:text-xl py-3 px-3">All Products</h1> 
        <button onClick={()=>{setFilterToggle(!filterToggle); console.log("btn clicked")}} className="flex border h-8 w-20 justify-center items-center rounded-lg bg-gray-50 text-[#6D4AFF] border-[#6D4AFF]">
        <Funnel className="h-5 w-5 text-[#6D4AFF]" />
        Filter
        </button>
        </div>
         <div className={`flex flex-col absolute justify-center gap-5 sm:hidden ${filterToggle ? "translate-y-4 opacity-" :"translate-y-4 opacity-100"}`}>
        <div className="flex flex-col ">
        <div className="flex flex-col">
            <label className="font-medium text-base text-[#1F2038]">Category</label>
            <select className="text-[15px] border border-[#D9D9D9] w-40 h-8 rounded-lg">
                <option value="">All Categories</option>
                <option value="">Clothing</option>
                <option value="">Shoes</option>
                <option value="">Bags</option>
                <option value="">Watches</option>
                <option value="">Accessories</option>
                <option value="">Electronics</option>
            </select>
        </div>
         <div className="flex flex-col">
            <label className="font-medium text-base text-[#1F2038]">Price</label>
            <select className="text-[15px] border border-[#D9D9D9] w-40 h-8 rounded-lg">
                <option value="">All Prices</option>
                <option value="">Clothing</option>
                <option value="">Shoes</option>
                <option value="">Bags</option>
                <option value="">Watches</option>
                <option value="">Accessories</option>
                <option value="">Electronics</option>
            </select>
        </div>
          
           <div className="flex flex-col">
            <label className="font-medium text-base text-[#1F2038]">Size</label>
            <select className="text-[15px] border border-[#D9D9D9] w-40 h-8 rounded-lg">
                <option value="">All Sizes</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                
            </select>
        </div>
           <div className="flex flex-col">
            <label className="font-medium text-base text-[#1F2038]">Color</label>
            <select className="text-[15px] border border-[#D9D9D9] w-40 h-8 rounded-lg">
                <option value="">All Colors</option>
                <option value="">Black</option>
                <option value="">Pink</option>
                <option value="">Green</option>
                <option value="">Yellow</option>
                <option value="">Brown</option>
                <option value="">Gray</option>
            </select>
        </div>
        </div>
        </div>
        
      </div>
      
      <div className="hidden sm:block mx-4 mb-5">
      <Filters />
      </div>
      
      <div className="flex z-0 w-full items-center flex-wrap justify-center gap-2 sm:gap-5 transition duration-300 ease-in">
      {products.map((link)=>(
      <Card
      key={link.id}
      id={link.id}
      img={link.img}
      tag={link.tag}
      category={link.category}
      productName={link.productName}
      price={link.price}
       />
      ))}
      </div>
    </div>
  );
};

export default CardBar;
