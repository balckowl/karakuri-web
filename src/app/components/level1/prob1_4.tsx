"use client"
import { useState } from "react";

const Prob1_4 = () => {

  const cardNumberList = [1, 8, 6, 3, 4];;
  const [isSelectCardList, setIsSelectCardList] = useState<boolean[]>([false,false,false,false,false]);
  const [nowNumber, setNowNumber] = useState<number>(0);

  const handleClickCard = (index:number) => {
    const newIsSelectCardList = [...isSelectCardList];
    if(isSelectCardList[index]){
      setNowNumber((prev) => prev-cardNumberList[index])
    } else {
      setNowNumber((prev) => prev+cardNumberList[index])
    }
    newIsSelectCardList[index] = !isSelectCardList[index];
    setIsSelectCardList(newIsSelectCardList);
  } 

  return (
    <div className="bg-[#FFF7F1] dark:bg-red-950 h-[86vh]">
      <div className="mx-auto container h-full flex items-center">
        <div className="w-[80vw] mx-auto h-max p-[60px] border-black border-2 rounded-lg">
          {/* ディスプレイ */}
          <div className="flex w-4/12 mx-auto justify-between mb-20">
            <div>
              <p className="text-center text-xl">合計値</p>
              <div className="w-[70px] h-[100px] border-black border-2 flex items-center justify-around">
                <p className="text-3xl font-bold text-blue-500">{nowNumber}</p>
              </div>
            </div>
            <div>
              <p className="text-center text-xl">目標値</p>
              <div className="w-[70px] h-[100px] border-black border-2 flex items-center justify-around">
                <p className="text-3xl font-bold text-red-500">20</p>
              </div>
            </div>
          </div>
          {/* カード */}
          <div className="flex w-10/12 mx-auto justify-between mb-10">
            {cardNumberList.map((cardNumber, index) =>(
              <div key={index}
                onClick={() => handleClickCard(index)}
                className={`w-[70px] h-[100px] border-black border-2 flex items-center justify-around cursor-pointer ${isSelectCardList[index] && "bg-blue-300 translate-y-[-10px]"}`}
              >
                <p className="text-3xl font-bold">{ cardNumber }</p>
              </div>
            ))
            }
          </div>
          <p className="text-3xl text-center">数字を選択して、それらの合計を <span className="font-bold text-red-500">20</span> にしてください。</p>
          <p className="text-xl text-center">(選択できるのは黒い数字)</p>
        </div>
      </div>
    </div>

  )
}

export default Prob1_4