import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiShoppingBagFill } from "@remixicon/react";


const ProductDetailCard = ({
  image,
  tag,
  heading,
  category,
  price,
  para,
  colorBtn1,
  colorBtn2,
  colorBtn3,
  colorBtn4,
})  => {
const [button, setButton] = useState("")
   let navigate =useNavigate()
  const btnNavigate= () =>{
    navigate('/Cartpage')
  }

    const btnClicked ={
    normal :"border-gray-200",
    clicked:"text-[#2B2344] border border-[#2B2344] font-medium",
}

  return (
    <div className="grid gap-5 sm:gap-10 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(31,32,56,0.08)] md:grid-cols-2">
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-[#F2EBFB] sm:p-6">
        <img
          src={image}
          alt={heading}
          className="max-h-[300px] w-full object-contain"
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600">
            {tag}
          </span>
          <h1 className="text-3xl font-bold text-[#1F2038]">{heading}</h1>
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {category}
          </p>
          <h1 className="text-2xl font-semibold text-[#5A3FF2]">{price}</h1>
          <p className="text-base leading-7 text-gray-600">{para}</p>
        </div>
        <div className="space-y-2 flex lg:block flex-row gap-7 items-center">
          <div>
            <h1 className="font-semibold text-[#1F2038]">Color:</h1>
          </div>
          <div className="flex gap-3">
            {colorBtn1 && (
              <button
                aria-label="Color option 1"
                className={colorBtn1}
              ></button>
            )}
            {colorBtn2 && (
              <button
                aria-label="Color option 2"
                className={colorBtn2}
              ></button>
            )}
            {colorBtn3 && (
              <button
                aria-label="Color option 3"
                className={colorBtn3}
              ></button>
            )}
            {colorBtn4 && (
              <button
                aria-label="Color option 4"
                className={colorBtn4}
              ></button>
            )}
          </div>
        </div>
        <div className="space-y-2 flex lg:block items-center gap-7">
          <div>
            <h1 className="font-semibold text-[#1F2038]">Size:</h1>
          </div>
          <div className="flex flex-wrap sm:gap-3 gap-2">
            <button onClick={()=>setButton("small")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${button==="small" ? btnClicked.clicked :btnClicked.normal }`}>
              S
            </button>
            <button onClick={()=>setButton("medium")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${button==="medium" ? btnClicked.clicked :btnClicked.normal }`}>
              M
            </button>
            <button onClick={()=>setButton("large")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${button==="large" ? btnClicked.clicked :btnClicked.normal }`}>
              L
            </button>
            <button onClick={()=>setButton("Xlarge")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${button==="Xlarge" ? btnClicked.clicked :btnClicked.normal }`}>
              XL
            </button>
            <button onClick={()=>setButton("XXlarge")} className={`rounded-lg border px-3 py-1  sm:px-4 sm:py-2 ${button==="XXlarge" ? btnClicked.clicked :btnClicked.normal }`}>
              XXL
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10 space-y-2">
          <button onClick={btnNavigate} className="bg-[#6D4AFF] transition duration-200 ease-in active:scale-95 hover:bg-[#5A38EA] h-10 w-36 cursor-pointer flex justify-center items-center text-white font-medium gap-1 rounded-lg ">
            {" "}
            <ShoppingCart className="h-6 w-6" /> Add to Cart
          </button>
          <button className="bg-[#1F2038] gap-1 cursor-pointer hover:bg-[#2B2344] transition duration-200 ease-in active:scale-95 h-10 w-36 flex justify-center items-center text-white font-medium rounded-lg">
            <RiShoppingBagFill
            className="h-6 w-6 text-white"
          />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
