"use client"
import { useEffect, useState } from "react"
import "./level1.css"
import Image from "next/image";
import { useGameStore } from "@/app/stores/GameStore";
import Popup from "../Popup";

const Prob1_5 = ({ clearLampList }: { clearLampList: any }) => {

  const [isGetGreenPoiner, setIsGetGreenPoiner] = useState<boolean>(false);
  const { getBelonging, havingItem, setClearLampAtIndex } = useGameStore();

  function deepCopy2DArray(arr: any) {
    return arr.map(function(subArray: any) {
        return Array.isArray(subArray) ? deepCopy2DArray(subArray) : subArray;
    });
}

  const isvalid = (i: number, j: number) => {
    if(0<=i && i<gridSize && 0<=j && j<gridSize){
      if(grid[i][j] != "#"){
        return true
      }
    }
    return false
  }

  const handleMove = (operate: string) => {
    let x = playerX
    let y = playerY
    let dir = direction
    if(operate == "U"){
      if(isvalid(playerX-1, playerY)){
        x -= 1
        dir = "U"
      }
    }else if(operate == "D"){
      if(isvalid(playerX+1, playerY)){
        x += 1
        dir = "D"
      }
    }else if(operate == "L"){
      if(isvalid(playerX, playerY-1)){
        y -= 1
        dir = "L"
      }
    }else if(operate == "R"){
      if(isvalid(playerX, playerY+1)){
        y += 1
        dir = "R"
      }
    }
    const newGrid = deepCopy2DArray(grid)
    newGrid[playerX][playerY] = "."
    newGrid[x][y] = dir
    newGrid[2][3] = "G"
    setGrid(newGrid)
    setPlayerX(x)
    setPlayerY(y)
    setDirection(dir)
    if(x==0 && y==3){
      console.log("goal")
    }
  }
  
  useEffect(()=>{
    const newGrid = deepCopy2DArray(grid)
    newGrid[0][0] = "R"
    setGrid(newGrid)
  },[]);

  const gridSize = 5
  const [playerX, setPlayerX] = useState<number>(0);
  const [playerY, setPlayerY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("R");
  const [grid, setGrid] = useState<string[][]>(
    [
      [".",".",".",".","."],
      [".",".",".","#","#"],
      [".",".","#","G","x"],
      ["#",".",".","#","."],
      [".",".",".",".","."],
    ]
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative h-[86vh] flex items-center container">
      <div className="h-[60vh] flex items-center flex-col mx-auto">
        <div className="mx-auto outline mb-12">
          {grid.map((mass, index) => (
            <div key={index} className="flex">
              {mass.map((item, index) => (
                <div
                  key={index}
                  className={`w-[100px] h-[100px] border-black dark:border-white border-[1px] ${item=="#" && "bg-black dark:bg-white"}`}
                >
                  <p className="h-full flex items-center justify-center text-4xl font-bold">
                    {"URDLG".includes(item) && item}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xl">0100 0000 0100</p>
        </div>
      </div>
      {/* 操作盤 */}
      <div className="absolute grid grid-cols-3 grid-rows-3 right-10 bottom-[160px]">
          <div
            onClick={()=>handleMove("U")} 
            className="w-[50px] h-[50px] bg-[#eceadc] cursor-pointer hover:bg-[#b8b897] transition-all border-black border-[1px] col-start-2 col-span-1 flex items-center justify-center border-b-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="up-level1"></div>
            </div>
          </div>
          <div
            onClick={()=>handleMove("R")} 
            className="w-[50px] h-[50px] bg-[#eceadc] cursor-pointer hover:bg-[#b8b897] transition-all border-black border-[1px] col-start-3 col-span-1 row-start-2 row-span-1 flex items-center justify-center border-l-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="right-level1"></div>
            </div>
          </div>
          <div
            onClick={()=>handleMove("D")} 
            className="w-[50px] h-[50px] bg-[#eceadc] transition-all hover:bg-[#b8b897] border-black border-[1px] col-start-2 col-span-1 row-start-3 row-span-1  flex items-center justify-center border-t-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="down-level1"></div>
            </div>
          </div>
          <div
            onClick={()=>handleMove("L")} 
            className="w-[50px] h-[50px] bg-[#eceadc] cursor-pointer hover:bg-[#b8b897] transition-all border-black border-[1px] col-start-1 row-start-2 flex items-center justify-center border-r-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="left-level1"></div>
            </div>
          </div>
          <div
            className="w-[50px] h-[50px] bg-[#eceadc] col-start-2 col-span-1 row-start-2 row-span-1  flex items-center justify-center">
          </div>
      </div>
      
      {/* Green Pointer(Item) */}
      {!isGetGreenPoiner && 
        <div
          onClick={() => {getBelonging("greenPointer"); setIsGetGreenPoiner(true); handleOpenPopup()} }
          className="cursor-pointer absolute right-[60px] bottom-[360px]"
        >
          <Image src="/images/level1/greenPointer.png" width={100} height={100} alt="greenPointer"></Image>
        </div>
      }

      {/* クリアマーク */}
      {clearLampList['level1'][4] === "1" &&
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]">
          <Image src="/images/prob1/clear_stamp.png" width={400} height={70} alt=""/>
        </div>
      }
      
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <Image src={"/images/level1/greenPointer.png"} width={100} height={100} alt="greenPointer" className="mb-2"></Image>
        <p>レーザーポインター(緑色)</p>
      </Popup>
    </div>
  )
}

export default Prob1_5