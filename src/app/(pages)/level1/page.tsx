"use client"
import { useEffect, useState } from "react"

import ProbHeader from "@/app/components/probHeader"
import ProbFooter from "@/app/components/probFooter"
import Belongings from "@/app/components/belongings"
import Chatbot from "@/app/components/chatbot"
import ClearLamp from "@/app/components/clearLamp"

import Prob1_1 from "@/app/components/level1/prob1_1"
import Prob1_2 from "@/app/components/level1/prob1_2"
import Prob1_3 from "@/app/components/level1/prob1_3"
import Prob1_4 from "@/app/components/level1/prob1_4"
import Prob1_5 from "@/app/components/level1/prob1_5"
import { useGameStore } from "@/app/stores/GameStore"

const Level1 = () => {
  const problemNumber: number = 5;

  const { level } = useGameStore();
  const [clearLampList, setClearLampsList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<any>(true)
  const [userData, setUserData] = useState<any>({})

  const getUserData = async () => {

    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`)

    const userData = await res.json()

    console.log(userData)

    setUserData(userData)
    setClearLampsList(userData.clearLampList)
    // setBadges(userData.badges)

    // let zeroCount = 0

    // Object.values(userData.clearLampList).forEach(array => {

    //   zeroCount += array.filter(item => item === "1").length;
    // });

    // setClearCount(zeroCount)
    setIsLoading(false)
  }

  useEffect(() => {
    getUserData()
  }, [])
  
  return (
    <div className="relative">
      <ProbHeader level={level}/>
      <div>
        {!isLoading && <Prob1_1 clearLampList={clearLampList}/>}
        <Prob1_2/>
        <Prob1_3/>
        <Prob1_4/>
        <Prob1_5/>
      </div>
      {!isLoading && <ClearLamp clearLampList={clearLampList}/>}
      <Belongings />
      <Chatbot />
      <ProbFooter />
    </div>
  )
}

export default Level1