import React, { useState } from "react"
import Nameplate from "./nameplate"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../ui/button"

const Profile = ({ clearCount, badges, currentBadge, setCurrentBadge }: { clearCount: any, badges: any, currentBadge: number, setCurrentBadge: any }) => {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChangeBadge = async (index: number) => {

    setCurrentBadge(index)
    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/badge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentBadge: index })
    })

    setIsLoading(false)

    if (res.status === 200) {
      console.log('変更完了')
    }
  }

  return (
    <div className=" h-[80vh]">
      <div className="translate-x-[-2px] pt-6">
        <Nameplate currentBadge={currentBadge}>
          <p className="text-black text-xl pl-6">{session?.user.name}</p>
        </Nameplate>
      </div>
      <div className="pt-[160px] px-10">

        {/* バッジ */}
        <div className="relative">
          <p className="relative z-[1] px-2 w-max h-max mx-auto bg-white text-lg">バッジ</p>
          <div className="absolute w-[100%] h-[1px] bg-black translate-y-[-16px] mb-10"></div>
          <div className="w-[70%] mx-auto my-20 flex justify-between">
            {badges.map((badge: string, index: number) => (
              <div className="w-[90px] h-[90px] rounded-[50%] flex items-center justify-center" key={index}>
                {
                  badge === "1" ?
                    (<Image
                      src={`/images/selectLevel/level${index + 1}_badge.png`}
                      alt="" width={65} height={65}
                      className={`${currentBadge === index && "border-[5px] border-green-400 box-content"} rounded-[50%]`}
                      onClick={() => handleChangeBadge(index)}
                    />) :
                    (<div className="bg-gray-500 w-[65px] h-[65px] rounded-[50%] flex items-center justify-center">
                      <FontAwesomeIcon icon={faQuestion} className="text-white" />
                    </div>)
                }
              </div>
            ))}
          </div>
        </div>

        {/* 実績 */}
        <div className="relative z-[-1] bg-white">
          <p className="relative z-[1] px-2 w-max h-max mx-auto bg-white text-lg">実績</p>
          <div className="absolute w-[100%] h-[1px] bg-black translate-y-[-16px] mb-10"></div>

          <div className="w-[70%] mx-auto my-20 flex justify-between text-lg">
            <p>クリア数</p>
            <p>{clearCount}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile