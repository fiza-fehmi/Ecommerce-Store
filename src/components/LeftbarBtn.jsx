const LeftbarBtn = ({btnName,icon,active ,onClick}) => {
  return (
    <div className="font-medium flex">
        <button onClick={onClick} className={`flex h-11 w-52 cursor-pointer items-center rounded-lg pl-3 gap-2
          ${active ? "bg-[#EAE4F7] text-[#5A3FF2]" : "bg-transparent text-gray-500" }`}>
        {icon}
          {btnName}</button>
    </div>
  )
}

export default LeftbarBtn