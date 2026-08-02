import Card from "./Card";
import { products } from "../data/products";
import Filters from "./Filters";
import FilterToggle from "./FilterToggle";

const CardBar = () => {
  return (
    <div className="relative transition duration-300 ease-in">
       <div className="hidden sm:flex">
        <h1 className="uppercase text-black sm:font-bold font-medium text-lg sm:text-xl sm:py-3 sm:px-3">All Products</h1>  
      </div>
      <div className="sm:hidden">
      <div className=" flex items-center justify-between px-5 py-1">
        <FilterToggle />
         <div className={` flex-col  gap-5 hidden`}>
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
                <option value="">PKR 1,000 – PKR 2,500</option>
                <option value="">PKR 2,500 – PKR 5,000</option>
                <option value="">PKR 5,000 – PKR 10,000</option>
                <option value="">Above PKR 10,000</option>
                
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
