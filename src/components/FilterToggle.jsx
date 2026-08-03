 import { Funnel } from "lucide-react";
const FilterToggle = ({ open, setOpen }) => {
  return (
    <>
<div className="flex p-3 relative sm:hidden flex-1"> 
  <h2 className="font-medium">All Products</h2>
</div>
<div className="flex-shrink-0">   
  <button onClick={()=>{
   console.log("Filter button clicked, current open state:", open);
    setOpen(!open)}} className={`flex items-center gap-2 bg-[#6D4AFF] hover:bg-[#5A38EA] text-white px-4 py-2 rounded-lg transition duration-200`}>
    <Funnel className="h-5 w-5" />
    <span className="text-sm font-medium">Filter</span> 
  </button>
</div>

</>

 
 

  )
}

export default FilterToggle