

const ClearLamp = ({clears} : {clears: boolean[]}) => {
  
  return (
    <div className="fixed bottom-[120px] left-8">
      {clears.map((clear, index) => (
        <div key={index} 
          className={`w-[20px] h-[20px] mb-2 rounded-[50%] border-black border-[1px] ${clear ? "bg-red-600" : "bg-white"}`}
        ></div>
      ))}
    </div>
  )
}

export default ClearLamp