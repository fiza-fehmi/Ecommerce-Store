import { Link } from "react-router-dom";

const Card = ({
  id,
  img,
  tag,
  category,
  productName,
  price,
}) => {
  const imageSize =()=>{
    return "h-[160px] w-full object-contain"

  }
  return (
    <Link
      to={`/products/${id}`}
      className="block w-[240px] sm:w-[190px] border border-gray-600/20 rounded-lg cursor-pointer transition-all duration-300 overflow-hidden ease-in group p-2 bg-[#FFFDF9] shadow-[0_4px_18px_rgba(31,32,56,0.10)]"
    >
      <div className="relative h-44 items-center rounded-lg justify-center w-full overflow-hidden flex  bg-[#F2EBFB]">
        <img className={` ${imageSize()}h-full w-full object-contain transition-all duration-200 ease-in group-hover:scale-110 rounded-lg relative`} src={img} alt={productName} />
        <div className="absolute top-1 left-1 bg-white text-xs rounded-lg text-gray-700 border border-gray-600/20 px-2 py-1">{tag}</div>
      </div>
      <div className="bg-[#FFFDF9] flex flex-col">
        <span className="text-sm font-medium text-gray-500">{category}</span>
        <h1 className="font-bold capitalize text-lg text-[#1F2038]"> {productName}</h1>
        <p className="text-[#5A3FF2] font-medium">{price}</p>
      </div> 
    </Link>
  );
};
export default Card;
