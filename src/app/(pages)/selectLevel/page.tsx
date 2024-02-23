"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import Link from "next/link"
import Image from "next/image"
import SelectHeader from "@/app/components/select/selectHeader"
import Nameplate from "@/app/components/select/nameplate"
import Profile from "@/app/components/select/profile"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { motion } from "framer-motion";
import "./page.css"
import { useGameStore } from "@/app/stores/GameStore"
import Loading from "@/app/loading"

const SelectLevel = () => {

  const [userData, setUserData] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [clearCount, setClearCount] = useState<number | null>()
  const [badges, setBadges] = useState<string[]>()
  const [currentBadge, setCurrentBadge] = useState<number>(-1)

  const { clearLampList, setClearLampList } = useGameStore();

  const getUserData = async () => {

    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
      cache: "no-store"
    })

    const userData = await res.json()

    setUserData(userData)
    setBadges(userData.badges)
    setCurrentBadge(userData.currentBadge)

    let zeroCount = 0

    Object.values(userData.clearLampList).forEach((array: any) => {

      zeroCount += array.filter((item: any) => item === "1").length;
    });

    setClearCount(zeroCount)
    setClearLampList(userData?.clearLampList)
    setIsLoading(false)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const { data: session } = useSession()
  const [position, setPosition] = useState<number>(0);
  const [direction, setDirection] = useState<string>("");
  const stageName = ["始まりの部屋", "からくり部屋", "終わりの回廊"]
  const keyframes = direction == "" ? [0] : direction === "L" ? ["20vw", 0] : ["-20vw", 0];

  const positionMove = (operation: string) => {
    if (operation === "L" && position !== 0) {
      setPosition((prev) => prev - 1);
    } else if (operation === "R" && position !== 2) {
      setPosition((prev) => prev + 1);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  // クリア判定
  const isCleared = (index: number, num:number) => {
    if(index < 0){
      return true
    }
    const sum = clearLampList[`level${index + 1}`].reduce((acc:number, current:string) => acc + parseInt(current), 0);
    
    if (sum >= num) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/selectLevel/select_back_black.jpg)' }}>

      <SelectHeader />
      <div>
        <div className="relative">

          <Dialog>
            <DialogTrigger>
              <div className="absolute top-6 z-[0] cursor-pointer transition-all">
                <Nameplate currentBadge={currentBadge}><p className="text-blck text-xl pl-6">{session?.user.name}</p></Nameplate>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <div className="text-black">

                  <Profile clearCount={clearCount} badges={badges} currentBadge={currentBadge} setCurrentBadge={setCurrentBadge} />

                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="w-7/12 mx-auto h-[60vh] pt-[40vh] flex items-center justify-between">

            {[0, 1, 2].map((index: number) => (
              <div className="relative w-[40px] h-[40px] bg-[#F7CB26] border-[#615734] border-4 rounded-[50%] z-[10]" key={index}>
                {position === index &&
                  <div>
                    <motion.div
                      animate={{ y: [20, 0], opacity: [0, 1] }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 1 }}
                    >
                      <Link href={`/level${index + 1}`}
                        className={`${isCleared(index-1,3) ? "hover:opacity-80 transition-all" : "cursor-not-allowed"}`}
                        onClick={(e) => {isCleared(index-1,3) || e.preventDefault()}}
                      >
                        <div className="absolute top-[-296px] h-[270px] bg-[#ececdc] w-max translate-x-[calc(-50%+22px)] p-6 rounded-lg">
                          {/* 鍵 */}
                          { !isCleared(index-1,3) && (
                            <div className="absolute w-[96%] h-[96%] bg-black top-[2%] left-[2%] rounded-lg z-[2000] opacity-80 flex justify-center items-center">
                              <Image src="/images/selectLevel/closed.svg" width={100} height={100} alt="closed"></Image>
                            </div>
                          )}
                          {/* クリアマーク */}
                          { isCleared(index,5) ?  (
                            <div className="absolute w-[96%] h-[96%] top-[2%] left-[2%] rounded-lg z-[2000] flex justify-center items-center rotate-[-10deg]">
                              <Image src="/images/prob/clear_stamp.png" width={200} height={200} alt="closed "></Image>
                            </div>
                          ) : isCleared(index,3) && (
                            <div className="absolute w-[96%] h-[96%] top-[2%] left-[2%] rounded-lg z-[2000] flex justify-center items-center rotate-[-10deg]">
                              <Image src="/images/prob/clear_stamp_yellow.png" width={200} height={200} alt="closed "></Image>
                            </div>
                          )}

                          <div>
                            <p className="mb-2">レベル{index+1} : {stageName[index]}</p>

                            <div className="flex gap-2 mb-2">
                              {!isLoading && clearLampList[`level${index + 1}`].map((clearLamps: string, jndex: number) => (
                                <div key={jndex}>
                                  <div className={`w-[20px] h-[20px] bg-red border-[#615734] border-[1px] rounded-[50%] ${!isLoading && clearLampList[`level${index + 1}`][jndex] === "1" && "bg-gradient-to-br from-red-400 via-red-600 to-red-800 bg-opacity-90 filter brightness-80"}`}></div>
                                </div>
                              ))}
                            </div>
                            <Image src={`/images/selectLevel/level${index+1}.jpg`} width={400} height={400} alt="level1" className="w-[200px] h-[160px] object-cover mb-2"></Image>
                          </div>
                        </div>
                        <div className="relative down w-full mx-auto z-[-1]"></div>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ x: keyframes[0] }}
                      animate={{ x: keyframes[1] }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 1 }}
                    >
                      <div className="absolute top-[60px] w-[60px] h-[60px] rounded-[50%] translate-x-[-5px]">
                        <Avatar>
                          <AvatarImage src={session?.user.photoURL} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </motion.div>
                  </div>
                }
              </div>
            ))}

            <div className="absolute w-[calc(58%-20px)] translate-x-[10px] h-[20px] bg-[#ececdc] border-[#615734] border-[4px]"></div>
          </div>

          <div className="flex w-10/12 justify-end mt-10 gap-4">
            <div
              onClick={() => { positionMove("L"); setDirection("L") }}
              className="w-[80px] h-[80px] bg-[#eceadc] cursor-pointer hover:bg-[#b8b897] transition-all border-black border-[1px]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="left"></div>
              </div>
            </div>
            <div
              onClick={() => { positionMove("R"); setDirection("R") }}
              className="w-[80px] h-[80px] bg-[#eceadc] cursor-pointer hover:bg-[#b8b897] transition-all border-black border-[1px]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-[50vw] translate-x-[-50%]">
          <footer className="text-center">
            <small className="text-white">©2024 created by karakuringo</small>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default SelectLevel