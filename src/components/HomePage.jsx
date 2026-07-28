import CardBar from "./CardBar"
import CartBar from "./CartBar"
import Leftbar from "./Leftbar"

const HomePage = () => {
  return (
    <div className="flex mx-4 my-2">
      <div className="flex-2">
 <Leftbar />
      </div>
      <div className="flex-7">
        <CardBar />
      </div>
      <div className="flex-3">
        <CartBar />
      </div>
      
    </div>
  )
}

export default HomePage