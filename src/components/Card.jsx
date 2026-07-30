const Card = ({
  img,
  tag,
  category,
  productName,
  price,
}) => {
  return (
    <div className="w-[220px] border border-transparent hover:border hover:border-[#5A3FF2] rounded-lg cursor-pointer transition-all duration-300 ease-in group p-2 bg-[#FFFDF9] shadow-[0_4px_18px_rgba(31,32,56,0.10)]">
      <div className="relative h-48 items-center rounded-lg justify-center w-full overflow-hidden flex  bg-[#F2EBFB]">
        <img className="h-full w-full transition-all duration-200 ease-in group-hover:scale-110 rounded-lg relative object-contain" src={img} alt={productName} />
        <div className="absolute top-3 left-2 text-[#5A3FF2] bg-white text-sm rounded-lg text-gray-700 border border-gray-600/20 px-2 py-1">{tag}</div>
      </div>
      <div className="bg-[#FFFDF9] flex flex-col">
        <span className="text-sm font-medium ">{category}</span>
        <h1 className="font-bold capitalize text-lg text-[#1F2038]"> {productName}</h1>
        <p className="text-[#5A3FF2] font-medium">{price}</p>
      </div> 
    </div>
  );
};
export default Card;
