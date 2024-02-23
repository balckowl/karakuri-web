
import Image from "next/image";
import { useGameStore } from "../stores/GameStore";

const Belongings = () => {
  const { belongingList, havingItem,setHavingItem } = useGameStore();

  return (
    <div className="fixed flex bottom-10 left-8">
      {belongingList.map((belonging:string, index: number) => (
        <div 
          key={index}
          onClick={() => {belonging==havingItem ? setHavingItem(""): setHavingItem(belonging)}}
          className={`w-[50px] h-[50px] border-black border-2 flex justify-center items-center ${belonging==havingItem && havingItem !== "" ? "bg-green-200" :"bg-white"} select-none`}
        >
          {
          belonging=="scrollBar" ? <Image src="/images/level1/scroll.jpg" width={100} height={100} alt="scrollBar" className="w-[40px] h-[12px] object-fit"></Image>
          : belonging=="greenPointer" && <Image src="/images/level1/greenPointer.png" width={100} height={100} alt="greenPointer"></Image>
          }
          
        </div>
      ))}
    </div>
  )
}

export default Belongings