"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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

const SelectLevel = () => {

  const [userData, setUserData] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [clearCount, setClearCount] = useState<number | null>()
  const [badges, setBadges] = useState<string[]>()

  const { clearLampList, setClearLampList } = useGameStore();

  const getUserData = async () => {

    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`)

    const userData = await res.json()

    setUserData(userData)
    setBadges(userData.badges)

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
  const stageName = ["始まりの部屋", "中間の盆地", "終わりの平地"]
  const keyframes = direction == "" ? [0] : direction === "L" ? ["20vw", 0] : ["-20vw", 0];
  const [clearLampsList, setClearLampsList] = useState<number[][]>([[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])

  const positionMove = (operation: string) => {
    if (operation === "L" && position !== 0) {
      setPosition((prev) => prev - 1);
    } else if (operation === "R" && position !== 2) {
      setPosition((prev) => prev + 1);
    }
  }

  return (
    <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/select_back_black.jpg)' }}>

      <SelectHeader />
      <div>
        <div className="relative">

          <Dialog>
            <DialogTrigger>
              <div className="absolute top-6 z-[0] cursor-pointer transition-all">
                <Nameplate><p className="text-blck text-xl pl-6">{session?.user.name}</p></Nameplate>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <div className="text-black">

                  <Profile clearCount={clearCount} badges={badges} />

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
                      <Link href={`/level${index + 1}`} className="hover:opacity-80 transition-all">
                        <div className="absolute top-[-296px] h-[270px] bg-[#ececdc] border-[#615734] border-[1px] w-max translate-x-[calc(-50%+22px)] p-6 rounded-lg">
                          <div>
                            <p className="mb-2">レベル{index + 1} : {stageName[index]}</p>
                            <div className="flex gap-2 mb-2">
                              {/* {clearLampsList[index].map((clearLamps: number, jndex: number) => (
                                <div key={jndex}>
                                  <div className={`w-[20px] h-[20px] bg-red border-[#615734] border-[1px] rounded-[50%] ${clearLampsList[index][jndex] == 0 ? "bg-white" : "bg-[#ee8f8f]"}`}></div>
                                </div>
                              ))} */}
                              {!isLoading && clearLampList[`level${index + 1}`].map((clearLamps: string, jndex: number) => (
                                <div key={jndex}>
                                  <div className={`w-[20px] h-[20px] bg-red border-[#615734] border-[1px] rounded-[50%] ${!isLoading && clearLampList[`level${index + 1}`][jndex] === "1" && "bg-red-500"}`}></div>
                                </div>
                              ))}
                            </div>
                            <Image src={`/images/level${index}.jpg`} width={400} height={400} alt="level1" className="w-[200px] h-[160px] object-cover mb-2"></Image>
                          </div>
                        </div>
                        <div className="relative down w-full mx-auto z-0"></div>
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