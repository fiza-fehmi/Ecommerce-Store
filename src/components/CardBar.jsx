import Card from "./Card";
import { products } from "../data/products";

const CardBar = () => {
  return (
    <div>
       <div className="flex">
        <h1 className="uppercase text-black font-medium text-xl py-3 px-3">All Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
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
