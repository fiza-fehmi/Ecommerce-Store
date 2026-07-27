const LeftbarBtn = ({btnName,icon}) => {
  return (
    <div className="text-red-700 flex">
        {icon}
        <button>{btnName}</button>
    </div>
  )
}

export default LeftbarBtn