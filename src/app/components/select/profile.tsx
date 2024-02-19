import React from "react"
import Nameplate from "./nameplate"
import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session } = useSession()
  return (
    <div className=" h-[80vh]">
      <div className="translate-x-[-2px] pt-6">
        <Nameplate>
          <p className="text-white text-xl pl-6">{session?.user.name}</p>
        </Nameplate>
      </div>
      <div className="pt-[160px] px-10">

        {/* バッジ */}
        <div className="relative">
          <p className="relative z-[1] px-2 w-max h-max mx-auto bg-white text-lg">バッジ</p>
          <div className="absolute w-[100%] h-[1px] bg-black translate-y-[-16px] mb-10"></div>
          
          <div className="w-[70%] mx-auto my-20 flex justify-between">
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-[50%]"></div>
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-[50%]"></div>
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-[50%]"></div>
          </div>
        </div>

        {/* 実績 */}
        <div className="relative z-[-1] bg-white">
          <p className="relative z-[1] px-2 w-max h-max mx-auto bg-white text-lg">実績</p>
          <div className="absolute w-[100%] h-[1px] bg-black translate-y-[-16px] mb-10"></div>

          <div className="w-[70%] mx-auto my-20 flex justify-between text-lg">
            <p>クリア数</p>
            <p>15</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile