import CardBar from "./CardBar"
import Leftbar from "./Leftbar"

const HomePage = ({ menuToggle, setMenuToggle }) => {
  return (
    <div className="flex m-0 sm:mx-2 sm:my-2 justify-between gap-3">
      <div className="">
 <Leftbar   menuToggle={menuToggle}
  setMenuToggle={setMenuToggle} />
      </div>
      <div className="flex-12">
        <CardBar />
      </div>

      
    </div>
  )
}

export default HomePage