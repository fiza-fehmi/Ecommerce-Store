import Card from "./Card";
import { products } from "../data/products";
import Filters from "./Filters";

const CardBar = () => {
  return (
    <div className="transition duration-300 ease-in">
       <div>
        <h1 className="uppercase text-black font-bold text-xl py-3 px-3">All Products</h1>
       
      </div>
      <div className="hidden sm:block mx-4 mb-5">
      <Filters />
      </div>
      
      <div className="flex w-full items-center flex-wrap justify-center gap-2 sm:gap-5 transition duration-300 ease-in">
      {products.map((link)=>(
      <Card
      key={link.id}
      id={link.id}
      img={link.img}
      tag={link.tag}
      category={link.category}
      productName={link.productName}
      price={link.price}
       />
      ))}
      </div>
    </div>
  );
};

export default CardBar;
