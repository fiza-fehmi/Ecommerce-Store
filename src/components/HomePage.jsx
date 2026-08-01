import CardBar from "./CardBar"
import Leftbar from "./Leftbar"

const HomePage = ({ menuToggle, setMenuToggle }) => {
  return (
    <div className=" sm:flex m-0 sm:mx-2 sm:my-2 sm:justify-between gap-3">
      <div className="">
 <Leftbar   menuToggle={menuToggle}
  setMenuToggle={setMenuToggle} />
      </div>
      <div className="flex-1">
        <CardBar />
      </div>

      
    </div>
  )
}

export default HomePage