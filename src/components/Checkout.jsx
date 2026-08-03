import {
  UserRound,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Mosque,
  Lock,
  House,
  Truck,
  CreditCard,
  LockKeyhole,
  ShoppingBag,
  ShieldCheck,
  KeyRound,
  
} from "lucide-react";
import { RiBankCardFill ,RiCashLine ,RiPaypalFill } from "@remixicon/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutMobile from "./CheckoutMobile";

const Checkout = () => {
  const [Delivery, setDelivery] = useState("standard");
  const [Payment, setPayment] = useState("credit")
const navigate =useNavigate()
const backHome= ()=>{
    navigate('/')
}
  return (
    <>
  <CheckoutMobile />
<div className="flex flex-col w-full justify-center items-center p-5 sm:flex hidden">
        <h1 className="text-3xl font-bold text-[#2B2344]">Checkout</h1>
        <p className="text-gray-500 font-medium text-sm">
          Complete your order by providing a few details
        </p>
      </div>
    <div className="px-15  w-full hidden sm:flex">
      
      <div className="flex gap-5">

      <div className=" bg-[#FFFDF9] border rounded-lg border-[#EAEAEA] shadow-sm px-5 py-4 w-[60%] flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-4 ">
            <div className="h-8 w-8 flex justify-center items-center bg-[#F1ECFF] rounded-full">
              <UserRound className="h-5 w-5 text-[#6D4AFF]" />
            </div>
            <h1 className="font-medium text-lg">Contact Information</h1>
          </div>
          <div className="mt-4 flex justify-center gap-10 w-full">
            <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
              <User className="h-5 w-5 text-[#6D4AFF]" />
              <input
                className="text-sm focus:outline-none border-none  "
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
              <Mail className="h-5 w-5 text-[#6D4AFF]" />
              <input
                className="text-sm focus:outline-none border-none  "
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
              <Phone className="h-5 w-4 text-[#6D4AFF]" />
              <input
                className="text-sm focus:outline-none border-none  "
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 ">
            <div className="h-8 w-8 flex justify-center items-center bg-[#F1ECFF] rounded-full">
              <MapPin className="h-5 w-5 text-[#6D4AFF]" />
            </div>
            <h1 className="font-medium text-lg">Shipping Address</h1>
          </div>
          <div className="mt-4 flex flex-col w-full gap-3">
            <div className="flex justify-center gap-10">
              <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
                <Globe className="h-5 w-5 text-[#6D4AFF]" />
                <input
                  className="text-sm focus:outline-none border-none  "
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
                <Mosque className="h-5 w-5 text-[#6D4AFF]" />
                <input
                  className="text-sm focus:outline-none border-none  "
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="h-9 w-56 pl-2 rounded-md items-center gap-2 flex border border-[#D9D9D9]">
                <Lock className="h-5 w-5 text-[#6D4AFF]" />
                <input
                  className="text-sm focus:outline-none border-none  "
                  type="number"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="border-[#D9D9D9] border h-9 flex pl-2 gap-2 items-center w-full rounded-md">
              <House className="h-5 w-5 text-[#6D4AFF]" />
              <input
                className="text-sm focus:outline-none w-full   "
                type="number"
                placeholder="Street Address"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
             <div className="flex items-center gap-4">
                <div className="h-9 w-9 flex justify-center items-center bg-[#F1ECFF] rounded-full">
                  <Truck className="h-6 w-6 text-[#6D4AFF]" />
                </div>

                <h1 className="font-medium text-lg">Delivery Method</h1>
              </div>
           

            <div className="mt-4 flex gap-5">
                
              <div
                onClick={() => setDelivery("standard")}
                className={`flex justify-between items-center rounded-xl px-5 py-4 cursor-pointer w-[50%] ${
                  Delivery === "standard"
                    ? "border-2 border-[#6D4AFF] bg-[#F8F6FF]"
                    : "border border-[#D9D9D9]"
                }`}
              >
                <div className="flex gap-4">
                  <div className="h-5 w-5 rounded-full border-2 border-[#6D4AFF] flex justify-center items-center">
                    {Delivery === "standard" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"></div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#2B2344]">
                      Standard Delivery
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      3 – 5 business days
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-[#6D4AFF]">FREE</p>
              </div>

              <div
                onClick={() => setDelivery("express")}
                className={`flex justify-between items-center rounded-xl px-5 py-4 cursor-pointer w-[50%] ${
                  Delivery === "express"
                    ? "border-2 border-[#6D4AFF] bg-[#F8F6FF]"
                    : "border border-[#D9D9D9]"
                }`}
              >
                <div className="flex gap-4">
                  <div className="h-5 w-5 rounded-full border-2 border-[#6D4AFF] flex justify-center items-center">
                    {Delivery === "express" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"></div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#2B2344]">
                      Express Delivery
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      1 – 2 business days
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-[#6D4AFF]">PKR 500</p>
              </div>
            </div>
            <div>
             
               <div className="flex items-center gap-4 mt-5">
              <div className="h-9 w-9 flex justify-center items-center bg-[#F1ECFF] rounded-full">
                <CreditCard  className="h-6 w-6 text-[#6D4AFF]" />
              </div>

              <h1 className="font-medium text-lg">Payment Method</h1>
            </div>

              <div className="mt-3 flex gap-5 ">
                
                <div onClick={()=>setPayment("credit")} className={`cursor-pointer flex rounded-lg h-10 w-60 items-center pl-2 gap-1 ${
                    Payment ==="credit" ?
                    "border-2 border-[#6D4AFF] bg-[#F8F6FF]"
                    : "border border-[#D9D9D9]"
                
                }`}
                >
                    <div className="h-5 w-5 rounded-full mr-2 border-2 border-[#6D4AFF] flex justify-center items-center">
                        {Payment === "credit" && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"></div>

                        )}

                </div>
                    <RiBankCardFill className="h-5 w-5 text-[#6D4AFF]" />

                    <h3 className="text-[#2B2344] text-sm font-medium">Credit/Debit Card</h3>
                </div>
                 <div onClick={()=>setPayment("cash")} className={`cursor-pointer flex rounded-lg h-10 w-60 items-center gap-1 pl-2 ${
                    Payment ==="cash" ?
                    "border-2 border-[#6D4AFF] bg-[#F8F6FF]"
                    : "border border-[#D9D9D9]"
                
                }`}>
                    <div className="h-5 w-5 rounded-full border-2 mr-2 border-[#6D4AFF] flex justify-center items-center">
                        {Payment === "cash" && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"></div>

                        )}

                </div>
                    <RiCashLine className="text-green-700" />
                    <h3 className="text-[#2B2344] text-base font-medium">Cash on Delivery</h3>
                </div>
                 <div onClick={()=>setPayment("paypal")} className={`cursor-pointer flex rounded-lg h-10 w-60 items-center pl-2 gap-1 ${
                    Payment ==="paypal" ?
                    "border-2 border-[#6D4AFF] bg-[#F8F6FF]"
                    : "border border-[#D9D9D9]"
                
                }`}>
                    <div className="h-5 w-5 rounded-full border-2 mr-2 border-[#6D4AFF] flex justify-center items-center">
                        {Payment === "paypal" && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"></div>

                        )}

                </div>
                    <RiPaypalFill className="h-5 w-5 text-blue-500" />
                    <h3 className="text-[#2B2344] font-medium">PayPal</h3>
                </div>
           
              </div>
              <div className="cursor-pointer mt-6"> 
              <button className="w-full h-10 hover:bg-[#5A38EA] transition duration-200 ease-in flex justify-center cursor-pointer items-center gap-2 rounded-lg text-white text-lg font-medium bg-[#6D4AFF]"><LockKeyhole className="h-5 w-5" />Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFDF9] px-4 border rounded-lg border-[#EAEAEA] shadow-sm w-[40%]">
        <h1 className="flex py-4  items-center gap-2 font-medium text-lg"><Lock className="text-[#6D4AFF]" />Order Summary</h1>
        <div className="w-full pb-5 flex flex-col items-center mt-4 border-b border-gray-500/40">
           <div className="h-24 w-24 flex  justify-center items-center rounded-full bg-[#F1ECFF]">
            <ShoppingBag className="h-12 w-12 text-[#6D4AFF]" />
           </div>
           <h1 className="font-medium text-2xl mt-2">No items yet</h1>
           <p className="text-center mt-2 font-medium text-[#2B2344]  leading-5">Looks like you haven't added any <br /> Products yet</p>
           <button onClick={backHome}  className="mt-4 bg-[#6D4AFF] hover:bg-[#5A38EA] active:scale-95 cursor-pointer text-white px-6 py-2 rounded-xl font-medium transition duration-300">
            Start Shopping
          </button>
          
        </div>
        <div className="py-3 flex flex-col border-b border-gray-500/40">
            <div className="flex justify-between font-medium text-[#2B2344]">
                <p>Subtotal</p>
                <p>PKR 0</p>
            </div>
            <div className="flex justify-between font-medium text-[#2B2344]">
                <p>Shipping</p>
                <p>PKR 0</p>
            </div>
            <div className="flex justify-between font-medium text-[#2B2344]">
                <p>Discount</p>
                <p>PKR 0</p>
            </div>
            <div className="flex justify-between font-medium text-[#2B2344]">
                <p>Tax (15%)</p>
                <p>PKR 0</p>
            </div>
        </div>
        <div className="flex justify-between text-[#2B2344] pt-2">
            <h1 className="font-bold text-xl">Total</h1>
            <p className="font-medium">PKR 0.0</p>
        </div>
        <div className="flex items-center justify-between bg-[#FFFDF9] border rounded-lg border-[#EAEAEA] shadow-sm h-20 px-4 mt-3">
            <div className="flex items-center">
                <div>
                <ShieldCheck className="h-10 w-10 text-[#6D4AFF]" />
                </div>
                <div className="text-[#2B2344] text-center">
                <h1 className="font-medium text-lg">Secure Checkout</h1>
                <p className="text-sm font-medium">SSL Encrypted</p>
                </div>
            </div>
              <div className="flex items-center">
                <div>
                <KeyRound className="h-10 w-10 text-[#6D4AFF]" />
                </div>
                <div className="text-[#2B2344] text-center">
                <h1 className="font-medium text-lg">30-Day Returns</h1>
                <p className="text-sm font-medium">Easy Returns</p>
                </div>
            </div>
          
          
        </div>

      </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
