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
  product,
  colorBtn1Name,
   colorBtn2Name,
  colorBtn3Name,
 
  setCartItems
})  => {
const [activeColor, setActiveColor] = useState("Black")
const [SelectedSize, setSelectedSize] = useState("M")
   let navigate =useNavigate()
 

  const buyNavigate= () =>{
    navigate('/Checkout')
  }

    const btnClicked ={
    normal :"border-gray-200",
    clicked:"text-[#2B2344] border border-[#2B2344] font-medium",
}
const addToCart= ()=>{
  setCartItems ((prev)=>[...prev,
    {
    ...product,
    selectedColor:activeColor,
    SelectedSize:SelectedSize
    }
    ])

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
              <button onClick={()=>setActiveColor(colorBtn1Name)}
                aria-label="Color option 1"
                className={`${colorBtn1} ${activeColor ===colorBtn1Name ?  "ring-slate-900 ring-2 ring-offset-2" : ""}`}
              ></button>
            )}
            {colorBtn2 && (
              <button onClick={()=>setActiveColor(colorBtn2Name)}
                aria-label="Color option 2"
                className={`${colorBtn2} ${activeColor ===colorBtn2Name ?  "ring-stone-300 ring-2 ring-offset-2" : ""}`}
              ></button>
            )}
            {colorBtn3 && (
              <button onClick={()=>setActiveColor(colorBtn3Name)}
                aria-label="Color option 3"
                className={`${colorBtn3} ${activeColor ===colorBtn3Name ?  " ring-indigo-200 ring-2 ring-offset-2" : ""}`}
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
            <button onClick={()=>setSelectedSize("S")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${SelectedSize==="S" ? btnClicked.clicked :btnClicked.normal }`}>
              S
            </button>
            <button onClick={()=>setSelectedSize("M")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${SelectedSize==="M" ? btnClicked.clicked :btnClicked.normal }`}>
              M
            </button>
            <button onClick={()=>setSelectedSize("L")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${SelectedSize==="L" ? btnClicked.clicked :btnClicked.normal }`}>
              L
            </button>
            <button onClick={()=>setSelectedSize("XL")} className={`rounded-lg border px-3 py-1   sm:px-4 sm:py-2 ${SelectedSize==="XL" ? btnClicked.clicked :btnClicked.normal }`}>
              XL
            </button>
            <button onClick={()=>setSelectedSize("XXL")} className={`rounded-lg border px-3 py-1  sm:px-4 sm:py-2 ${SelectedSize==="XXL" ? btnClicked.clicked :btnClicked.normal }`}>
              XXL
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10 space-y-2">
          <button onClick={()=>{addToCart();}} className="bg-[#6D4AFF] transition duration-200 ease-in active:scale-95 hover:bg-[#5A38EA] h-10 w-36 cursor-pointer flex justify-center items-center text-white font-medium gap-1 rounded-lg ">
            {" "}
            <ShoppingCart className="h-6 w-6" /> Add to Cart
          </button>
          <button onClick={buyNavigate} className="bg-[#1F2038] gap-1 cursor-pointer hover:bg-[#2B2344] transition duration-200 ease-in active:scale-95 h-10 w-36 flex justify-center items-center text-white font-medium rounded-lg">
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
