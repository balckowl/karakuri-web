"use client"
import { useGameStore } from "@/app/stores/GameStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Prob1_4 = ({ clearLampList }: { clearLampList: any }) => {

  const cardNumberList = [1, 8, 6, 3, 4];;
  const [isSelectCardList, setIsSelectCardList] = useState<boolean[]>([false, false, false, false, false]);
  const { nowNumber, addNowNumber } = useGameStore();
  const { setClearLampAtIndex } = useGameStore()

  const handleClickCard = (index: number) => {
    const newIsSelectCardList = [...isSelectCardList];
    let tour1st;
    if (isSelectCardList[index]) {
      addNowNumber(-cardNumberList[index])
    } else {
      addNowNumber(cardNumberList[index])
    }
    newIsSelectCardList[index] = !isSelectCardList[index];
    setIsSelectCardList(newIsSelectCardList);
  }

  const sendAns = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level1/judge/4`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ans: nowNumber })
    })

    const data = await res.json()

    if (data.judge == "correct") {
      toast.success('正解')
      setClearLampAtIndex('level1', 3, "1");
    }
  }

  useEffect(() => {
    if (nowNumber === 20) {
      sendAns()
    }
  }, [nowNumber])

  return (
    <div className="bg-[#FFF7F1] dark:bg-[#190a25] h-[86vh]">
      <Toaster />
      <div className="mx-auto container h-full flex items-center">
        <div className="w-[80vw] mx-auto h-max p-[60px] border-black border-2 rounded-lg">
          {/* ディスプレイ */}
          <div className="flex w-4/12 mx-auto justify-between mb-20">
            <div>
              <p className="text-center text-xl">合計値</p>
              <div className="w-[70px] h-[100px] bg-[#fff7f1] border-black border-2 flex items-center justify-around">
                <p className="text-3xl font-bold text-blue-500">{nowNumber}</p>
              </div>
            </div>
            <div>
              <p className="text-center text-xl">目標値</p>
              <div className="w-[70px] h-[100px] bg-[#fff7f1] border-black border-2 flex items-center justify-around">
                <p className="text-3xl font-bold text-red-500">20</p>
              </div>
            </div>
          </div>
          {/* カード */}
          <div className="flex w-10/12 mx-auto justify-between mb-10">
            {cardNumberList.map((cardNumber, index) => (
              <div key={index}
                onClick={() => handleClickCard(index)}
                className={`w-[70px] h-[100px] border-black border-2 flex items-center justify-around cursor-pointer ${isSelectCardList[index] ? "bg-blue-200 translate-y-[-10px]" : "bg-[#fff7f1]"}`}
              >
                <p className="text-3xl font-bold text-black">{cardNumber}</p>
              </div>
            ))
            }
          </div>
          <p className="text-3xl text-center">数字を選択して、それらの合計を <span className="font-bold text-red-500 dark:text-[#ff7d88]">20</span> にしてください。</p>
          <p className="text-xl text-center">(選択できるのは黒っぽい数字)</p>
        </div>
      </div>

      {/* クリアマーク */}
      {clearLampList['level1'][3] === "1" &&
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]">
          <Image src="/images/clear_stamp.png" width={400} height={70} alt="" />
        </div>
      }
    </div>

  )
}

export default Prob1_4