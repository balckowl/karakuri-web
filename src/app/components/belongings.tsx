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
          className={`w-[50px] h-[50px] border-black border-2 flex justify-center items-center bg-white ${belonging==havingItem && havingItem !== "" && "border-blue-900 border-[6px]"} select-none`}
        >
          {
            belonging=="scrollBar" ? <Image src="/images/level1/scroll.png" width={100} height={100} alt="scrollBar" className="w-[40px] h-[12px] object-fit"></Image> :
            belonging=="scrollBar" && <Image src="/images/Hello_up.jpg" width={48} height={48} alt="scrollBar"></Image>
          }
        </div>
      ))}
    </div>
  )
}

export default Belongings