import Card from "./Card";
import hoodie from "../components/images/hoodie.png";

const CardBar = () => {
  const Links = [
    {
      img: hoodie,
      tag: "New",
      category: "Clothing",
      productName: "Minimal hoodie",
      price: "PKR 2,499",
      id:"item1"
    },
  ];
  return (
    <div className="p-5">
      {Links.map((link)=>(
      <Card
      key={link.id}
      img={link.img}
      tag={link.tag}
      category={link.category}
      productName={link.productName}
      para={link.para}
      price={link.price}
      colorBtn1={link.colorBtn1}
      colorBtn2={link.colorBtn2}
      colorBtn3={link.colorBtn3}
       />
      ))}
    </div>
  );
};

export default CardBar;
