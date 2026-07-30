const LeftbarBtn = ({btnName,icon,active ,onClick,expanded}) => {
  return (
    <div className="font-medium flex">
        <button onClick={onClick} className={`flex cursor-pointer items-center rounded-lg pl-3 gap-2
          ${active ? "bg-[#EAE4F7] text-[#5A3FF2]" : " text-gray-500" } ${expanded ? "h-11 w-52 " : "h-10 w-12"} `}>
             {icon}
            {expanded ? btnName:null }
            
       
          </button>
    </div>
  )
}

export default LeftbarBtn