"use client"
import axios from "axios";
import { FormEvent, useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useGameStore } from "@/app/stores/GameStore";
import Image from "next/image";

const Prob1_2 = ({ clearLampList }: { clearLampList: any }) => {

  const [ansProb1_2, setAnsProb1_2] = useState<string>("");
  const { setClearLampAtIndex } = useGameStore()

  const sendAns = async (e: FormEvent) => {

    e.preventDefault();
    if (!ansProb1_2) {
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level1/judge/2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ans: ansProb1_2 })
    })

    const data = await res.json()

    console.log(data)

    if (data.judge == "correct") {
      window.alert('正解')
      setClearLampAtIndex('level1', 1, "1")
    } else {
      window.alert('不正解')
    }
  }

  const isLarge = useMediaQuery("(min-width: 1500px)")
  const isMidium = useMediaQuery("(min-width: 1200px)")
  const isSmall = useMediaQuery("(min-width: 900px)")
  const isExtraSmall = useMediaQuery("(min-width: 600px)")

  return (
    <div className="bg-[#FFF7F1] dark:bg-[#190a25] h-[86vh] relative">
      <div className="mx-auto container h-full flex items-center">

        {/* TODO Next.jsでReact-responsiveは使えないので、使わないで書く */}
        <div className="mx-auto w-[90%] max-w-[800px] h-[200px] flex items-center justify-center outline">
          <div className="w-[40%] h-full border-l border-black dark:border-white border-2 flex items-center justify-center text-[60px]">
            {isLarge && "N"}
          </div>
          <div className="w-[30%] h-full border-l border-black dark:border-white border-2 flex items-center justify-center text-[60px]">
            {isMidium && !isLarge && "E"}
          </div>
          <div className="w-[20%] h-full border-l border-black dark:border-white border-2 flex items-center justify-center text-[60px]">
            {isSmall && !isMidium && "X"}
          </div>
          <div className="w-[10%] h-full border-l border-black dark:border-white border-2 flex items-center justify-center text-[60px]">
            {isExtraSmall && !isSmall && "T"}
          </div>
        </div>

        {/* 回答フォーム */}
        {clearLampList["level1"][0] === "0" ? (
        <form
          onSubmit={sendAns}
          className="absolute right-20 bottom-20 text-4xl border-black border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px]"
        >
          <label htmlFor="ans-prob1_2" className="focus-within:text-purple-600">
            A.
          </label>

          <input id="ans-prob1_2" type="text"
            onChange={(e) => setAnsProb1_2(e.target.value)}
            value={ansProb1_2}
            className="outline-none focus:border-purple-700 w-[200px] px-2 dark:bg-slate-800 bg-transparent"
          />
        </form>
        ) : (
          <div
            className="absolute right-20 bottom-20 text-4xl border-[#ff5160] dark:border-[#ff7d88] border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px] flex"
          >
            <div className="text-[#ff5160] dark:text-[#ff7d88]">A.</div>
            <div className="text-[#ff5160] dark:text-[#ff7d88] w-[200px]">NEXT</div>
          </div>
        )}

        {/* クリアマーク */}
        {clearLampList['level1'][1] === "1" &&
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]">
            <Image src="/images/clear_stamp.png" width={400} height={70} alt=""/>
          </div>
        }

      </div>
    </div>
  )
}

export default Prob1_2