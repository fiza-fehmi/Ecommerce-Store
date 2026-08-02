 import { Funnel } from "lucide-react";
 import { useState } from "react";
const FilterToggle = () => {
    const [FilterToggle, setFilterToggle] = useState(false)
  return (
    <>
<div className="w-full flex">
<div className="flex p-3  relative  sm:hidden w-full ">
  <h2 className="text-lg font-bold text-[#2B2344]">
    All Products
  </h2>
</div>
<div>

  <button onClick={()=>{setFilterToggle(!FilterToggle)}} className={`flex items-center gap-2 bg-[#6D4AFF] hover:bg-[#5A38EA] text-white px-4 py-2 rounded-lg transition duration-200`}>
    <Funnel className="h-5 w-5" />
    <span className="text-sm font-medium">Filter</span> 
  </button>
  </div>
  </div>
<div className={`bg-red-500 h-60 w-full ${FilterToggle ? "flex" :"hidden"}`}>

</div>
</>

 
 

  )
}

export default FilterToggle