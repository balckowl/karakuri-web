import { useGameStore } from "../stores/GameStore";


const Belongings = () => {
  const { belongingList, havingItem,setHavingItem } = useGameStore();
  return (
    <div className="fixed flex bottom-10 left-8">
      {belongingList.map((belonging:string, index: number) => (
        <div 
          key={index}
          onClick={() => setHavingItem(belonging)}
          className={`w-[50px] h-[50px] ${belonging==havingItem && havingItem !== "" ? "bg-blue-600" : "bg-white"} border-black border-2`}
        >{belonging}</div>
      ))}
    </div>
  )
}

export default Belongings