import {
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Cartpage = ({ cartItems, setCartItems }) => {
  const removeItem = (id) => {
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  };
  const [count, setCount] = useState(1)
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/");
  };
  if (cartItems.length === 0) {
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

            <button
              onClick={btnClick}
              className="mt-8 bg-[#6D4AFF] hover:bg-[#5A38EA] active:scale-95 cursor-pointer text-white px-8 py-3 rounded-xl font-medium transition duration-300"
            >
              Start Shopping
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 text-center">
              <Truck className="mx-auto text-[#6D4AFF]" size={34} />
              <h3 className="font-semibold text-[#2B2344] mt-4">
                Free Shipping
              </h3>
              <p className="text-sm text-gray-500 mt-2">On orders above $50</p>
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
              <p className="text-sm text-gray-500 mt-2">30-day return policy</p>
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
  }
  return (
   <div className="bg-[#FFFDF9] min-h-screen p-6">
  <h1 className="text-2xl font-bold text-[#2B2344]">
    Your Cart
  </h1>

  <div className="h-auto py-5 gap-4 flex flex-col px-4 w-full">
    {cartItems.map((item) => (
      <div
        className="relative flex justify-between gap-5 p-3 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm 
        w-full sm:w-[60%]"
        key={item.id}
      >

        <div className="flex flex-col sm:flex-row gap-4 w-full flex-wrap sm:flex-nowrap overflow-hidden">

          {/* Image */}
          <div className="h-36 w-full sm:h-32 overflow-hidden sm:w-32 shrink-0 rounded-lg flex justify-center items-center bg-[#F2EBFB]">
            <img 
              src={item.img}
              alt={item.productName}
              className="h-32 sm:h-24 object-contain"
            />
          </div>


          {/* Product Info */}
          <div className="flex flex-col gap-2 sm:gap-1 flex-1">

            <h3 className="font-bold text-[#2B2344] text-lg sm:text-xl">
              {item.productName}
            </h3>

            <span className=" sm:text-base font-medium">
              {item.category}
            </span>

            <span className="text-lg text-[#6D4AFF] font-bold">
              {item.price}
            </span>


            <div className="flex flex-wrap items-center gap-8 sm:gap-4">

              <div className="flex items-center gap-2">
                <span className="font-medium">
                  Color:
                </span>

                <span className="text-sm bg-[#F2EBFB] px-2 py-1 rounded-lg border border-gray-300">
                  {item.selectedColor}
                </span>
              </div>


              <div className="flex items-center gap-2">
                <span className="font-medium">
                  Size:
                </span>

                <span className="text-sm bg-[#F2EBFB] px-2 py-1 rounded-lg border border-gray-300">
                  {item.SelectedSize}
                </span>
              </div>

            </div>


            {/* Quantity Mobile */}
            <div className="sm:hidden mt-2">
              <div className="flex items-center justify-center gap-2 ">

                

                <div className="flex w-[50%] items-center w-28 rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">

                  <button
                    onClick={()=>setCount(count > 1 ? count-1 : 1)}
                    className="h-9 w-14 flex items-center justify-center text-xl font-semibold hover:bg-gray-100"
                  >
                    −
                  </button>

                  <div className="h-11 w-16 flex items-center justify-center text-white bg-[#6D4AFF] font-semibold">
                    {count}
                  </div>

                  <button
                    onClick={()=>setCount(count+1)}
                    className="h-9 w-14 flex items-center justify-center text-xl font-semibold text-[#6D4AFF] hover:bg-[#F4F1FF]"
                  >
                    +
                  </button>

                </div>

              </div>
            </div>

          </div>



          {/* Quantity Desktop (same place) */}
          <div className="hidden sm:flex items-center justify-center flex-1">
            <div className="flex flex-col items-center justify-center gap-2 mt-8">

              <h2 className="text-base font-medium text-gray-600">
                Quantity 
              </h2>

              <div className="flex items-center w-fit rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">

                <button
                  onClick={()=>setCount(count > 1 ? count-1 : 1)}
                  className="h-10 w-10 flex items-center justify-center text-xl font-semibold text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>

                <div className="h-10 w-12 flex items-center justify-center text-white text-xl font-semibold bg-[#6D4AFF]">
                  {count}
                </div>

                <button
                  onClick={()=>setCount(count+1)}
                  className="h-10 w-10 flex items-center justify-center text-xl font-semibold text-[#6D4AFF] hover:bg-[#F4F1FF]"
                >
                  +
                </button>

              </div>

            </div>
          </div>


        </div>


        {/* Delete */}
        <div
          onClick={() => removeItem(item.id)}
          className="absolute top-3 right-3 h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-[#6D4AFF]"
        >
          <Trash2 className="text-white h-5 w-5" />
        </div>


      </div>
    ))}
  </div>
</div>
  );
};

export default Cartpage;
