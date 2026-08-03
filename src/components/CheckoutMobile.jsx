import {
  ArrowLeft,
  ShoppingBag,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CheckoutMobile = () => {
  const navigate = useNavigate();
    const btnClick = () => {
    navigate(-1);
  };
  const [delivery, setDelivery] = useState("standard")
  const [payment, setPayment] = useState("credit")

  return (
    <div className="min-h-screen bg-[#F7F5FF] sm:hidden">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3">

        <button onClick={btnClick} className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
          <ArrowLeft className="h-5 w-5 text-[#2B2344]" />
        </button>

        <div>
          <h1 className="text-lg font-bold text-[#2B2344]">
            Checkout
          </h1>

          <p className="text-xs text-gray-500">
            Complete your order
          </p>
        </div>

      </div>

      <div className="px-4 py-5 space-y-5">

        {/* Order Summary */}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="flex justify-between items-center px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-xl bg-[#EEE8FF] flex items-center justify-center">

                <ShoppingBag className="text-[#6D4AFF] h-6 w-6" />

              </div>

              <div>

                <h2 className="font-semibold text-[#2B2344]">
                  Order Summary
                </h2>

                <p className="text-xs text-gray-500">
                  0 Items
                </p>

              </div>

            </div>

            <ChevronDown className="h-5 w-5 text-gray-500" />

          </div>

          <div className="border-t border-gray-100 px-5 py-5">

            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between text-sm mb-5">
              <span className="text-gray-500">Tax</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between">

              <span className="font-semibold text-[#2B2344]">
                Total
              </span>

              <span className="font-bold text-xl text-[#6D4AFF]">
                $0.00
              </span>

            </div>

            <div className="mt-5 bg-[#F8F6FF] rounded-xl p-3 flex items-center gap-3">

              <ShieldCheck className="text-[#6D4AFF] h-5 w-5 flex-shrink-0" />

              <p className="text-xs text-gray-600 leading-5">
                Secure checkout with encrypted payment and buyer protection.
              </p>

            </div>

          </div>

        </div>

     
    {/* Contact Information */}

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

  <h2 className="text-[#2B2344] text-base font-semibold mb-5">
    Contact Information
  </h2>

  <div className="space-y-4">

    <div>
      <label className="text-sm font-medium text-gray-700 block mb-2">
        Full Name
      </label>

      <input
        type="text"
        placeholder="John Doe"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-700 block mb-2">
        Email Address
      </label>

      <input
        type="email"
        placeholder="john@email.com"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-700 block mb-2">
        Phone Number
      </label>

      <input
        type="text"
        placeholder="+92 300 1234567"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
      />
    </div>

  </div>

</div>

{/* Shipping Address */}

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

  <h2 className="text-[#2B2344] text-base font-semibold mb-5">
    Shipping Address
  </h2>

  <div className="space-y-4">

    <input
      type="text"
      placeholder="Street Address"
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
    />

    <input
      type="text"
      placeholder="Apartment, Suite (Optional)"
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
    />

    <input
      type="text"
      placeholder="City"
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
    />

    <div className="grid grid-cols-2 gap-3">

      <input
        type="text"
        placeholder="Postal Code"
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
      />

      <input
        type="text"
        placeholder="Country"
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6D4AFF]"
      />

    </div>

  </div>

</div>

{/* Delivery Method */}

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

  <h2 className="text-[#2B2344] text-base font-semibold mb-5">
    Delivery Method
  </h2>

  <div className="space-y-3">

    <div onClick={()=>setDelivery("standard")}
    
     className={`${delivery=== "standard" ? "border-2 border-[#6D4AFF] rounded-xl" : "border-2 border-gray-200 rounded-xl" } p-4`}>

      <div  className="flex justify-between">

        <div>
          <h3  className="font-semibold text-[#2B2344]">
            Standard Delivery
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            3–5 Business Days
          </p>

        </div>

        <span className={`${delivery==="standard" ? "text-[#6D4AFF]"  : "text-gray-500 "} font-semibold `}>
          Free
        </span>

      </div>

    </div>

    <div onClick={()=>setDelivery("express")}
    
     className={`${delivery=== "express" ? "border-2 border-[#6D4AFF] rounded-xl" : "border-2 border-gray-200 rounded-xl" } p-4`}>

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold text-[#2B2344]">
            Express Delivery
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Next Day Delivery
          </p>

        </div>

        <span className={`${delivery==="express" ? "text-[#6D4AFF]"  : "text-gray-500 "} font-semibold `}>
          $15
        </span>

      </div>

    </div>

  </div>

</div>

{/* Payment */}

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

  <h2 className="text-[#2B2344] text-base font-semibold mb-5">
    Payment Method
  </h2>

  <div className="space-y-3">

    <div onClick={()=>setPayment("credit")} className={`${payment === "credit" ? "border-2 border-[#6D4AFF] rounded-xl" : "border-2 border-gray-200 rounded-xl"}  rounded-xl px-4 py-4`}>
      Credit / Debit Card
    </div>

    <div onClick={()=>setPayment("cash")} className={`${payment === "cash" ? "border-2 border-[#6D4AFF] rounded-xl" : "border-2 border-gray-200 rounded-xl"}  rounded-xl px-4 py-4`}>
      Cash on Delivery
    </div>

    <div onClick={()=>setPayment("paypal")} className={`${payment === "paypal" ? "border-2 border-[#6D4AFF] rounded-xl" : "border-2 border-gray-200 rounded-xl"}  rounded-xl px-4 py-4`}>
      PayPal
    </div>

  </div>

</div>

{/* Place Order */}

<button className="w-full bg-[#6D4AFF] hover:bg-[#5A38EA] text-white font-semibold py-4 rounded-xl transition duration-200 active:scale-95">
  Place Order
</button>

<p className="text-center text-xs text-gray-500 leading-5 mb-8">
  By placing your order, you agree to our Terms & Conditions and Privacy Policy.
</p>
 </div>

    </div>
  );
};

export default CheckoutMobile;