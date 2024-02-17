"use client"
import { useEffect, useState } from "react"

const Prob1_5 = () => {
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
    newGrid[gridSize-1][gridSize-1] = "G"
    setGrid(newGrid)
    setPlayerX(x)
    setPlayerY(y)
    setDirection(dir)
    if(x==gridSize-1 && y==gridSize-1){
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
      [".",".","#",".","."],
      [".",".",".",".","."],
      [".",".",".",".","#"],
      [".","#",".","#","#"],
      [".",".",".",".","G"],
    ]
  );

  return (
    <div className="bg-white dark:bg-gray-800 h-[80vh] flex items-center">
      <div className="mx-auto outline">
        {grid.map((mass, index) => (
          <div key={index} className="flex">
            {mass.map((item, index) => (
              <div
                key={index}
                className={`w-[100px] h-[100px] border-black border-[1px] ${item=="#" && "bg-black"}`}
              >
                <p className="h-full flex items-center justify-center text-4xl font-bold">
                  {"URDLG".includes(item) && item}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div onClick={()=>handleMove("U")} className="p-2">↑</div>
      <div onClick={()=>handleMove("R")} className="p-2">→</div>
      <div onClick={()=>handleMove("D")} className="p-2">↓</div>
      <div onClick={()=>handleMove("L")} className="p-2">←</div>
    </div>
  )
}

export default Prob1_5