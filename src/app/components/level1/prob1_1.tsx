"use client"
import { useGameStore } from "@/app/stores/GameStore";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react"

const Prob1_1 = ({ clearLampList }: { clearLampList: any }) => {
  const [isGetScrollBar, setIsGetScrollBar] = useState<boolean>(false);
  const [isFitScrollBar, setIsFitScrollBar] = useState<boolean>(false);
  const { getBelonging, havingItem } = useGameStore();
  const [ansProb1_1, setAnsProb1_1] = useState<string>("");

  const sendAns = async (e: FormEvent) => {

    e.preventDefault();

    if (!ansProb1_1) {
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level1/judge/1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ans: ansProb1_1 })
    })

    const data = await res.json()

    console.log(data)

    if (data.judge == "correct") {
      window.alert('正解')
    } else {
      window.alert('不正解')
    }

  }

  return (
    <div className="relative flex bg-white dark:bg-gray-800 h-[80vh]">
      <div className="flex items-center mx-auto container">
        <div>
          <div className="w-[600px] mx-auto h-[100px] flex items-end outline outline-2">
            <Image src={"/images/Hello_up.jpg"} alt="up" width={600} height={200} className="select-none" />
          </div>
          {/* ギミック */}
          <div
            onClick={() => { havingItem == "scrollBar" && setIsFitScrollBar(true) }}
            className={`relative w-[600px] mx-auto h-[100px] ${isFitScrollBar && "overflow-x-scroll"} overflow-hidden outline outline-2`}
          >
            <div className="w-[800px] ml-[65px]">
              <Image src={"/images/Hello_down.jpg"} alt="down" width={600} height={200} className="select-none" />
            </div>
          </div>
          {!isFitScrollBar &&
            <div className="absolute w-[600px] h-[14px] outline outline-2 translate-y-[-14px]"></div>
          }
        </div>
        <div className="w-full text-center justify-end">
          {/* item */}

          <div onClick={() => { setIsGetScrollBar(true); getBelonging("scrollBar") }}>setIsGetScrollBar</div>
        </div>

        {/* 回答フォーム */}
        {clearLampList["level1"][0] === "0" && <form
          onSubmit={sendAns}
          className="absolute right-20 bottom-20 text-4xl border-black border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px]"
        >
          <label htmlFor="ans-prob1_1" className="focus-within:text-purple-600">
            A.
          </label>
          <input id="ans-prob1_1" type="text"
            onChange={(e) => setAnsProb1_1(e.target.value)}
            value={ansProb1_1}
            className="outline-none focus:border-purple-700 w-[200px] px-2 dark:bg-slate-800"
          />
        </form>}

        {clearLampList['level1'][0] === "1" &&
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]">
            <Image src="/images/clear_stamp.png" width={400} height={70} alt=""/>
          </div>
        }

      </div>
    </div>

  )
}

export default Prob1_1