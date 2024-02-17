"use client"
import axios from "axios";
import { FormEvent, useState } from "react"
import { useMediaQuery } from "react-responsive"
const Prob1_2 = () => {
  const [ansProb1_1, setAnsProb1_1] = useState<string>("");

  const sendAns = async(e: FormEvent) =>{
    e.preventDefault();
    if(!ansProb1_1){
      return
    }
    const res = await axios.post("http://localhost:3000/api/level1/judge", {
      ans: ansProb1_1,
    })
  }

  const isLarge = useMediaQuery({ query: "(min-width: 1500px)" })
  const isMidium = useMediaQuery({ query:"(min-width: 1200px)" })
  const isSmall = useMediaQuery({ query: "(min-width: 900px)" })
  const isExtraSmall = useMediaQuery({ query: "(min-width: 600px)" })

  return (
    <div className="bg-red-100 dark:bg-red-950 h-[80vh] relative">
      <div className="mx-auto container h-full flex items-center">

        {/* TODO Next.jsでReact-responsiveは使えないので、使わないで書く */}
        {/* <div className="mx-auto w-[800px] h-[200px] flex items-center justify-center outline bg-white">
          <div className="w-[200px] h-[200px] border-l border-black border-2 flex items-center justify-center text-[100px]">
            {isLarge && "N"}
          </div>
          <div className="w-[200px] h-[200px] border-l border-black border-2 flex items-center justify-center text-[100px]">
            {isMidium && !isLarge && "E"}
          </div>
          <div className="w-[200px] h-[200px] border-l border-black border-2 flex items-center justify-center text-[100px]">
            {isSmall && !isMidium && "X"}
          </div>
          <div className="w-[200px] h-[200px] border-l border-black border-2 flex items-center justify-center text-[100px]">
            {isExtraSmall && !isSmall && "T"}
          </div>
        </div> */}
        
        {/* 回答フォーム */}
        <form
          onSubmit={sendAns}
          className="absolute right-20 bottom-20 text-4xl border-black border-b-2 focus-within:border-purple-600 focus-within:border-b-[3px]"
        >
          <label htmlFor="ans-prob1_1" className="focus-within:text-purple-600">
            A.
          </label>
            <input id="ans-prob1_1" type="text"
              onChange={(e) => setAnsProb1_1(e.target.value)}
              value={ ansProb1_1 }
              className="bg-red-100 outline-none focus:border-purple-700 w-[200px] px-2 dark:bg-slate-800" 
            />
        </form>
      </div>
    </div>
  )
}

export default Prob1_2