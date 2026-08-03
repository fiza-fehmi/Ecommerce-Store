import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductDetailCard from "./ProductDetailCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const ProductDetail = ({cartItems,setCartItems}) => {
    const navigate = useNavigate();
    const btnClick = () => {
    navigate(-1);
  };
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
 

  if (!productId) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        <p className="text-lg font-semibold text-[#1F2038]">Product not found.</p>
        <Link to="/" className="mt-3 inline-block text-[#5A3FF2]">
          Back to products
        </Link>
      </div>
    );
  }

  return (
<>
<button onClick={btnClick} className="h-10 w-10 mt-4 ml-5 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
          <ArrowLeft className="h-5 w-5 text-[#2B2344]" />
        </button>
    <div className="mx-auto max-w-5xl sm:p-6 px-4">
      
      <ProductDetailCard
        image={product.img}
        tag={product.tag}
        heading={product.productName}
        category={product.category}
        price={product.price}
        product={product}
        cartItems={cartItems}
        setCartItems={setCartItems}
        para={`A curated ${product.category.toLowerCase()} pick designed for everyday comfort, quality, and value.`}
        colorBtn1="h-6 w-6 rounded-full border border-gray-300 bg-slate-900"
        colorBtn2="h-6 w-6 rounded-full border border-gray-300 bg-stone-300"
        colorBtn3="h-6 w-6 rounded-full border border-gray-300 bg-indigo-200"
      />
    </div>
    </>
  );
};

export default ProductDetail;
