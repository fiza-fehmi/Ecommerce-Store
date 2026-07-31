import CardBar from "./CardBar"
import Leftbar from "./Leftbar"

const HomePage = () => {
  return (
    <div className="flex m-0 sm:mx-2 sm:my-2 justify-between gap-3">
      <div className="flex-2">
 <Leftbar />
      </div>
      <div className="flex-10">
        <CardBar />
      </div>

      
    </div>
  )
}

export default HomePage