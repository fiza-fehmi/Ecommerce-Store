import CardBar from "./CardBar"
import Leftbar from "./Leftbar"
import { useState } from "react"
import { Menu } from "lucide-react"
//old line
// const HomePage = ({ menuToggle, setMenuToggle }) => {
  //new line
  const HomePage = () => {
//new line
 const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" sm:flex m-0 sm:mx-2 sm:my-2 sm:justify-between gap-3">
      {/* Naya button - sirf mobile pe, sidebar ke liye alag */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden flex items-center gap-2 bg-[#6D4AFF] text-white px-3 py-2 rounded-lg mx-3 mt-2 w-fit"
      >
        <Menu className="h-5 w-5" />
        <span className="text-sm font-medium">Categories</span>
      </button>
      <div className="">
        {/* old line */}
 {/* <Leftbar   menuToggle={menuToggle}
  setMenuToggle={setMenuToggle} /> */}
    {/* new line */}
  <Leftbar menuToggle={sidebarOpen} setMenuToggle={setSidebarOpen} />
      </div>
      <div className="flex-1">
        <CardBar />
      </div>

      
    </div>
  )
}

export default HomePage