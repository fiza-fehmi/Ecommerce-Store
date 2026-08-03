import {
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cartpage = ({cartItems}) => {
  const navigate = useNavigate()
  const btnClick =()=>{
    navigate ('/')
  }
  if(cartItems.length===0){
  return (
    
    <section className="bg-[#FFFDF9] min-h-screen pt-4 pb-2 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h1 className="text-2xl font-bold text-[#2B2344]">Your Cart</h1>
          </div>
          
        </div>

        <div className="mt-4 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm px-8 py-8 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-[#F3F0FF] flex items-center justify-center mb-8">
            <ShoppingCart size={60} className="text-[#6D4AFF]" />
          </div>


          <h2 className="text-4xl font-bold text-[#2B2344]">
            Your Cart Is Empty
          </h2>


          <button onClick={btnClick} className="mt-8 bg-[#6D4AFF] hover:bg-[#5A38EA] active:scale-95 cursor-pointer text-white px-8 py-3 rounded-xl font-medium transition duration-300">
            Start Shopping
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 text-center">
            <Truck className="mx-auto text-[#6D4AFF]" size={34} />
            <h3 className="font-semibold text-[#2B2344] mt-4">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              On orders above $50
            </p>
          </div>

          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 text-center">
            <ShieldCheck className="mx-auto text-[#6D4AFF]" size={34} />
            <h3 className="font-semibold text-[#2B2344] mt-4">
              Secure Payment
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              100% protected checkout
            </p>
          </div>

          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 text-center">
            <RotateCcw className="mx-auto text-[#6D4AFF]" size={34} />
            <h3 className="font-semibold text-[#2B2344] mt-4">
              Easy Returns
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              30-day return policy
            </p>
          </div>

          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 text-center">
            <Headset className="mx-auto text-[#6D4AFF]" size={34} />
            <h3 className="font-semibold text-[#2B2344] mt-4">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We're always here to help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
return (
   <div className="bg-[#FFFDF9] min-h-screen p-6">
      <h1 className="text-2xl font-bold text-[#2B2344] mb-6">
        Your Cart
      </h1>
      {cartItems.map((item)=>(
        <div className="flex items-center" key={item.id}>
          <img src={item.img} alt={item.productName}  className="h-24"></img>
          {item.productName}
          </div>

      ))}
      </div>
)
}

export default Cartpage;