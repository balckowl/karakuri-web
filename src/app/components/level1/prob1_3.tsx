"use client"
import axios from "axios";
import { FormEvent, useEffect, useState } from "react"

const Prob1_3 = () => {
  const [ansProb1_1, setAnsProb1_1] = useState<string>("");

  const sendAns = async (e: FormEvent) => {
    e.preventDefault();
    if (!ansProb1_1) {
      return
    }
    const res = await axios.post(`http://localhost:3000/api/level1/judge`, {
      ans: ansProb1_1,
    })
  }

  useEffect(()=>{
    console.log("tour1st")
  },[])

  return (
    <div className="h-[86vh] flex items-center relative">
      <div className="h-max mx-auto container">
        <div className="w-max mx-auto">
          <div className="w-[300px] h-[120px] mx-auto rounded-md border-[2px] border-black mb-[60px] text-[40px] text-white flex justify-center items-center">
            <p className="hidden dark:block">console</p>
          </div>
          <p className="text-[40px] dark:text-gray-800">くらくなると、<span className="text-red-600">み</span>え<span className="text-red-600">て</span>くるもの</p>
        </div>
      </div>
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
          value={ansProb1_1}
          className="outline-none focus:border-purple-700 w-[200px] px-2 dark:bg-slate-800 focus:bg-transparent"
        />
      </form>
    </div>
  )
}

export default Prob1_3