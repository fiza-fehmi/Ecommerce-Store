import { Funnel ,RotateCcw } from "lucide-react"
const Filters = () => {
  return (
    <div className="w-full bg-[#FFFDF9] border py-3 items-center justify-between flex   border-[#EAEAEA] shadow-sm px-5 rounded-xl">
        <div className="flex h-full justify-center items-center gap-2 border-r px-4 border-gray-400/30">
            <div className="h-9 w-9 flex justify-center items-center bg-[#F1ECFF] rounded-full">
        <Funnel className="h-5 w-5 text-[#6D4AFF]" />
        </div>
             <h1 className="font-medium text-xl">Filter</h1>
        </div>
        <div className="flex justify-center gap-5">
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
        <div className="group transition duration-200 ease-in">
        <button className=" h-full px-4 cursor-pointer transition duration-200 ease-in group-hover:text-red-500 border-gray-400/30 flex justify-center items-center gap-1 border-l text-[#6D4AFF] font-medium ">
<RotateCcw className="h-5 w-5 text-[#6D4AFF] transition duration-200 ease-in group-hover:text-red-500"/>
             Clear All
                
        </button>
        </div>
       
    </div>
  )
}

export default Filters