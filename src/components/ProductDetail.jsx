import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetail = ({cartItems,setCartItems}) => {
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
    <div className="mx-auto max-w-5xl p-6">
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
  );
};

export default ProductDetail;
