 import { Funnel } from "lucide-react";
 import { useState } from "react";
// const FilterToggle = () => {
//     const [FilterToggle, setFilterToggle] = useState(false)
const FilterToggle = ({ open, setOpen }) => {
  return (
    <>
{/* <div className="w-full flex"> */}
{/* <div className="flex p-3  relative  sm:hidden w-full "> ⚠️ w-full yahan galat hai */}
  {/* <h2 className="text-lg font-bold text-[#2B2344]">
    All Products
  </h2>
</div>
<div> */}
<div className="flex p-3 relative sm:hidden flex-1">   {/* w-full ko flex-1 se replace karo */}
  <h2>All Products</h2>
</div>
<div className="flex-shrink-0">   {/* button wrapper ko shrink ni hony deta */}
  {/* <button onClick={()=>{setFilterToggle(!FilterToggle)}} className={`flex items-center gap-2 bg-[#6D4AFF] hover:bg-[#5A38EA] text-white px-4 py-2 rounded-lg transition duration-200`}> */}
  <button onClick={()=>{
   console.log("Filter button clicked, current open state:", open);
    setOpen(!open)}} className={`flex items-center gap-2 bg-[#6D4AFF] hover:bg-[#5A38EA] text-white px-4 py-2 rounded-lg transition duration-200`}>
    <Funnel className="h-5 w-5" />
    <span className="text-sm font-medium">Filter</span> 
  </button>
</div>
{/* <div className={`bg-red-500 h-60 w-full ${FilterToggle ? "flex" :"hidden"}`}> */}
{/* 
</div> */}
</>

 
 

  )
}

export default FilterToggle