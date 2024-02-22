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
import Popup from "@/app/components/Popup"
import { useGameStore } from "@/app/stores/GameStore"
import MouseHighlight from "@/app/components/level1/mouseHighlight"
import Loading from "@/app/loading"
import Image from "next/image"

const Level1 = () => {
  const problemNumber: number = 5;

  const { level } = useGameStore();
  const [isLoading, setIsLoading] = useState<any>(true)
  const [userData, setUserData] = useState<any>({})
  const { clearLampList, setClearLampList } = useGameStore();
  const { havingItem } = useGameStore();

  const getUserData = async () => {

    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`)

    const userData = await res.json()

    setUserData(userData)
    setClearLampList(userData.clearLampList)
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

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // 完全クリア判定
  const isCompleted = (index: number) => {
    const sum = clearLampList["level1"].reduce((acc:number, current:string) => acc + parseInt(current), 0);
    const isSumGreaterThanOrEqualTo3 = sum == 5;
    
    if (isSumGreaterThanOrEqualTo3) {
      return true
    } else {
      return false
    }
  }

  
  if(isLoading){
    return <Loading />
  }  

  return (
    <div className="relative">

      { isCompleted(level) && 
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} popupTime={5}>
          <p className="mb-2 text-center">コンプリートおめでとうございます</p>
          <div className="w-[300px] h-[200px] flex flex-col items-center justify-center">
            <Image src={"/images/selectLevel/level1_badge.png"} width={100} height={100} alt="scroll" className="object-fit  mb-2"></Image>
            <p>バッジを入手しました</p>
          </div>
        </Popup>
      }
      { havingItem == "greenPointer" &&
        <MouseHighlight />
      }
      <ProbHeader level={level}/>
      <div>
        {!isLoading && <Prob1_1 clearLampList={clearLampList}/>}
        {!isLoading && <Prob1_2 clearLampList={clearLampList}/>}
        {!isLoading && <Prob1_3 clearLampList={clearLampList}/>}
        {!isLoading && <Prob1_4 clearLampList={clearLampList}/>}
        {!isLoading && <Prob1_5 clearLampList={clearLampList}/>}
      </div>
      {!isLoading && <ClearLamp clearLampList={clearLampList}/>}
      <Belongings />
      <Chatbot />
      <ProbFooter />
    </div>
  )
}

export default Level1