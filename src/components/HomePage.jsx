import CardBar from "./CardBar"
import Leftbar from "./Leftbar"
import { useState } from "react"
const HomePage = () => {
  const [filters, setFilters] = useState("all")
  return (
    <div className="sm:flex m-0 sm:mx-2 sm:my-2 sm:justify-between gap-3">
      <div className="">
 <Leftbar filters={filters}
 setFilters ={setFilters}
 />
      </div>
      <div className="flex-1">
        <CardBar filters={filters} />
      </div>

      
    </div>
  )
}

export default HomePage