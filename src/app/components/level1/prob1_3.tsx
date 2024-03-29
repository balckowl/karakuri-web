"use client"
import { useGameStore } from "@/app/stores/GameStore";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const Prob1_3 = ({ clearLampList }: { clearLampList: any }) => {
  const [ansProb1_3, setAnsProb1_3] = useState<string>("");
  const { setClearLampAtIndex, darkMode } = useGameStore()
  const [isClickedTOUR1ST, setIsClickedTOUR1ST] = useState<boolean>(false)
  const { havingItem, addNowNumber } = useGameStore();

  const sendAns = async (e: FormEvent) => {
    e.preventDefault();
    if (!ansProb1_3) {
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level1/judge/3`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ans: ansProb1_3 })
    })

    const data = await res.json()

    if (data.judge == "correct") {
      toast.success('正解') 
      setClearLampAtIndex('level1', 2, "1");
    } else {
      toast.error('不正解')
    }
  }

  useEffect(() => {
    console.log("TOUR1ST");
  }, [])

  const handleClickTOUR1ST = () => {
    if (isClickedTOUR1ST) {
      setIsClickedTOUR1ST(false);
      addNowNumber(-1);
    } else {
      setIsClickedTOUR1ST(true);
      addNowNumber(1);
    }
  }

  return (
    <div className="h-[86vh] flex items-center relative">
      <Toaster />
      <div className="h-max mx-auto container">
        <div className="w-max mx-auto">
          <div className="w-[300px] h-[120px] mx-auto border-[2px] border-black dark:border-white rounded-md mb-[60px] text-[40px] text-white flex justify-center items-center">
            <p className="hidden dark:block">console</p>
          </div>
          <p className="text-[40px] text-[#020817]">くらくなると、<span className="text-red-600 dark:text-[#ff7d88]">み</span>え<span className="text-red-600 dark:text-[#ff7d88]">て</span>くるもの</p>
        </div>
      </div>

      {/* 回答フォーム */}
      {clearLampList["level1"][2] === "0" ? (
        <form
          onSubmit={sendAns}
          className="absolute right-20 bottom-20 text-4xl border-black dark:border-white border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px]"
        >
          <label htmlFor="ans-prob1_3" className="focus-within:text-purple-600">
            A.
          </label>

          <input id="ans-prob1_3" type="text"
            onChange={(e) => setAnsProb1_3(e.target.value)}
            value={ansProb1_3}
            className="outline-none focus:border-purple-700 w-[200px] px-2 bg-transparent"
          />
        </form>
      ) : (
        <div
          className="absolute right-20 bottom-20 text-4xl border-[#ff5160] dark:border-[#ff7d88] border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px] flex"
        >
          <div className="text-[#ff5160] dark:text-[#ff7d88]">A.</div>
          <div className="text-[#ff5160] dark:text-[#ff7d88] w-[200px] flex">
            <div>TOUR</div>
            <div
              className={`${havingItem == "greenPointer" && "cursor-pointer"}`}
              onClick={() => { havingItem == "greenPointer" && clearLampList['level1'][3] === "0" && handleClickTOUR1ST() }}
            ><div className={`inline-block ${isClickedTOUR1ST && "translate-y-[-6px]"}`}>1</div></div>
            <div>ST</div>
          </div>
        </div>
      )}

      {/* クリアマーク */}
      {clearLampList['level1'][2] === "1" &&
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]">
          <Image src={darkMode ? "/images/prob/clear_stamp_dark.png": "/images/prob/clear_stamp.png"} width={400} height={70} alt="" />
        </div>
      }

    </div>
  )
}

export default Prob1_3