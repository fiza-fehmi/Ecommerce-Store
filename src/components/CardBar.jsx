import Card from "./Card";
import hoodie from "../components/images/hoodie.png"
import sneaker from "../components/images/sneakers.png"
import buds from "../components/images/earbuds.png"
import backpack from "../components/images/backpack.png"
import sunglass from "../components/images/sunglass.png"
import silverWatch from "../components/images/silverWatch.png"
import camera from "../components/images/camera.png"
import fashionSneaker from "../components/images/fashionSneaker.png"
import wallet from "../components/images/wallet.png"
import handbag from "../components/images/handbag.png"
import leatherWatch from "../components/images/leatherWatch.png"
import tShirt from "../components/images/t-shirt.png"
import headphones from "../components/images/headphones.png"
import trainers from "../components/images/trainers.png"
import sweatshirt from "../components/images/sweatshirt.png"
import runningShoes from "../components/images/runningShoes.png"
import tablet from "../components/images/tablet.png"
import shoulderbag from "../components/images/shoulderbag.png"
import bracelet from "../components/images/bracelet.png"
import chronograph from "../components/images/chronograph.png"
import shirt from "../components/images/casualShirt.png"
import laptop from "../components/images/slimLaptop.png"
import sneak from "../components/images/casualSneakers.png"
import travel from "../components/images/travelBackpack.png"
import baseball from "../components/images/baseballCap.png"
import luxury from "../components/images/luxuryWatch.png"
import jacket from "../components/images/jacket.png"

const CardBar = () => {
const Links = [
  {
    img: hoodie,
    tag: "New",
    category: "Clothing",
    productName: "Minimal Hoodie",
    price: "PKR 2,499",
    id: "item1",
  },
  {
    img: sneaker,
    tag: "Popular",
    category: "Shoes",
    productName: "Classic Sneakers",
    price: "PKR 4,299",
    id: "item2",
  },
  {
    img: buds,
    tag: "Sale",
    category: "Electronics",
    productName: "Wireless Earbuds",
    price: "PKR 4,999",
    id: "item3",
  },
  {
    img: backpack,
    tag: "New",
    category: "Bags",
    productName: "Minimal Backpack",
    price: "PKR 3,499",
    id: "item4",
  },
  {
    img: sunglass,
    tag: "Trending",
    category: "Accessories",
    productName: "Classic Sunglasses",
    price: "PKR 1,799",
    id: "item5",
  },
  {
    img: silverWatch,
    tag: "Popular",
    category: "Watches",
    productName: "Classic Silver Watch",
    price: "PKR 6,999",
    id: "item6",
  },

  {
    img: camera,
    tag: "New",
    category: "Electronics",
    productName: "Digital Camera",
    price: "PKR 24,999",
    id: "item7",
  },
  {
    img: fashionSneaker,
    tag: "Trending",
    category: "Shoes",
    productName: "White Fashion Sneakers",
    price: "PKR 4,999",
    id: "item8",
  },
  {
    img: wallet,
    tag: "New",
    category: "Accessories",
    productName: "Leather Wallet",
    price: "PKR 1,999",
    id: "item9",
  },
  {
    img: handbag,
    tag: "Popular",
    category: "Bags",
    productName: "Leather Handbag",
    price: "PKR 4,999",
    id: "item10",
  },
  {
    img: leatherWatch,
    tag: "Sale",
    category: "Watches",
    productName: "Classic Leather Watch",
    price: "PKR 4,799",
    id: "item11",
  },
  {
    img: tShirt,
    tag: "New",
    category: "Clothing",
    productName: "Classic White T-Shirt",
    price: "PKR 1,499",
    id: "item12",
  },
  {
    img: headphones,
    tag: "Popular",
    category: "Electronics",
    productName: "Wireless Headphones",
    price: "PKR 7,499",
    id: "item13",
  },
  {
    img: trainers,
    tag: "New",
    category: "Shoes",
    productName: "Everyday Trainers",
    price: "PKR 4,499",
    id: "item14",
  },

  {
    img: sweatshirt,
    tag: "Trending",
    category: "Clothing",
    productName: "Oversized Sweatshirt",
    price: "PKR 2,799",
    id: "item15",
  },
  {
    img: runningShoes,
    tag: "Popular",
    category: "Shoes",
    productName: "Sport Running Shoes",
    price: "PKR 5,499",
    id: "item16",
  },
  {
    img: tablet,
    tag: "New",
    category: "Electronics",
    productName: "Modern Tablet",
    price: "PKR 34,999",
    id: "item17",
  },
  {
    img: shoulderbag,
    tag: "Sale",
    category: "Bags",
    productName: "Classic Shoulder Bag",
    price: "PKR 3,799",
    id: "item18",
  },
  {
    img: bracelet,
    tag: "Popular",
    category: "Accessories",
    productName: "Minimal Bracelet",
    price: "PKR 1,299",
    id: "item19",
  },
  {
    img: chronograph,
    tag: "New",
    category: "Watches",
    productName: "Premium Chronograph",
    price: "PKR 7,499",
    id: "item20",
  },
  {
    img: shirt,
    tag: "Sale",
    category: "Clothing",
    productName: "Casual Shirt",
    price: "PKR 2,199",
    id: "item21",
  },
  {
    img: laptop,
    tag: "Popular",
    category: "Electronics",
    productName: "Slim Laptop",
    price: "PKR 89,999",
    id: "item22",
  },
  {
    img: sneak,
    tag: "New",
    category: "Shoes",
    productName: "Casual Sneakers",
    price: "PKR 3,799",
    id: "item23",
  },
  {
    img: travel,
    tag: "Trending",
    category: "Bags",
    productName: "Travel Backpack",
    price: "PKR 4,299",
    id: "item24",
  },
  {
    img: baseball,
    tag: "New",
    category: "Accessories",
    productName: "Classic Baseball Cap",
    price: "PKR 999",
    id: "item25",
  },
  {
    img: luxury,
    tag: "Trending",
    category: "Watches",
    productName: "Luxury Wrist Watch",
    price: "PKR 8,999",
    id: "item26",
  },
   {
    img: jacket,
    tag: "popular",
    category: "Clothing",
    productName: "Leather Jacket",
    price: "PKR 3,999",
    id: "item27",
  },
];
  return (
    <div>
       <div className="flex">
        <h1 className="uppercase text-black font-medium text-xl py-3">All Products</h1>
      </div>
      <div className="flex flex-wrap">
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
    </div>
  );
};

export default CardBar;
