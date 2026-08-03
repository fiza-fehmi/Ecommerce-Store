import Card from "./Card";
import { useState } from "react";
import { products } from "../data/products";
import Filters from "./Filters";
import FilterToggle from "./FilterToggle";
import { X } from "lucide-react";

const CardBar = ({category}) => {
  //new line inside compnent state management
  const [filterOpen, setFilterOpen] = useState(false);
    const displayedProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  
  return (
    <div className="relative transition duration-300 ease-in ">
      <div className="hidden sm:flex">
        <h1 className="uppercase text-black sm:font-bold font-medium text-lg sm:text-xl sm:py-3 sm:px-3">
         
          {category ==="all" ? " All Products" :category}
        </h1>
      </div>
      <div className="sm:hidden relative">
        <div className="flex items-center justify-between px-5 py-1 transition duration-200 ease-in">
          <FilterToggle
          category={category}
            open={filterOpen}
            setOpen={(value) => {
              setFilterOpen(value);

              if (value) {
                document.body.classList.add("overflow-y-hidden");
              } else {
                document.body.classList.remove("overflow-y-hidden");
              }
            }}
          />
        </div>
        {filterOpen && (
          <div
            className={`flex-col gap-10 ${filterOpen ? "flex" : "hidden "} fixed bottom-0 border-t-4 border-[#6D4AFF] left-0 right-0 z-20 bg-white px-8 py-6 rounded-t-4xl  shadow-md h-[78vh] `}
          >
            <div className="grid grid-cols-1 gap-7 ">
              <div className="flex justify-between items-center ">
                <h1 className="text-lg text-[#6D4AFF] font-medium">Filters </h1>
                <X
                  onClick={() => {
                    setFilterOpen(false);
                    document.body.classList.remove("overflow-y-hidden");
                  }}
                  className="right-3 -top-2 h-8 text-[#6D4AFF] font-bold"
                />
              </div>
              <div className="flex flex-col min-w-0 gap-2 transition duration-200 ease-in">
                <label className="font-medium text-base text-[#1F2038]">
                  Category
                </label>
                <select className="text-[15px] border border-[#D9D9D9] px-1 focus:ring-2 focus:ring-[#6D4AFF]/20 focus:border-[#6D4AFF] focus:outline-none w-full min-h-8 h-14 rounded-lg">
                  <option value="">All Categories</option>
                  <option value="">Clothing</option>
                  <option value="">Shoes</option>
                  <option value="">Bags</option>
                  <option value="">Watches</option>
                  <option value="">Accessories</option>
                  <option value="">Electronics</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-[#1F2038]">
                  Price
                </label>
                <select className="text-[15px] border px-1 border-[#D9D9D9] focus:ring-2 focus:ring-[#6D4AFF]/20 focus:border-[#6D4AFF] focus:outline-none  min-w-40 w-full min-h-8 h-14 rounded-lg">
                  <option value="">All Prices</option>
                  <option value="">PKR 1,000 – PKR 2,500</option>
                  <option value="">PKR 2,500 – PKR 5,000</option>
                  <option value="">PKR 5,000 – PKR 10,000</option>
                  <option value="">Above PKR 10,000</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-[#1F2038]">
                  Size
                </label>
                <select className="text-[15px] border px-1 border-[#D9D9D9] min-w-40 focus:ring-2 focus:ring-[#6D4AFF]/20 focus:border-[#6D4AFF] focus:outline-none w-full min-h-8 h-14 rounded-lg">
                  <option value="">All Sizes</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-[#1F2038]">
                  Color
                </label>
                <select className="text-[15px] border px-1 border-[#D9D9D9] focus:ring-2 focus:ring-[#6D4AFF]/20 focus:border-[#6D4AFF] focus:outline-none min-w-40 w-full min-h-8 h-14 rounded-lg">
                  <option value="">All Colors</option>
                  <option value="">Black</option>
                  <option value="">Pink</option>
                  <option value="">Green</option>
                  <option value="">Yellow</option>
                  <option value="">Brown</option>
                  <option value="">Gray</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 justify-between">
                <button className="w-full bg-[#6D4AFF] text-white font-medium h-14 rounded-lg active:scale-95 transition duration-300 ease-in">
                  Apply Filter
                </button>
                <button className="w-full border-2 border-[#6D4AFF] active:bg-red-500 text-[#6D4AFF] active:text-white active:border-red-500 active:border-2 font-medium active:scale-95 transition duration-300 ease-in  h-14 rounded-lg">
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden sm:block mx-4 mb-5">
        <Filters />
      </div>

      <div className="flex z-0 w-full items-center flex-wrap justify-center gap-2 sm:gap-5 transition duration-300 ease-in">
      {displayedProducts.map((link) => (
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
