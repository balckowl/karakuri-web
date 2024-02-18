"use client"

import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import SelectHeader from "@/app/components/select/selectHeader"
import Nameplate from "@/app/components/select/nameplate"
import ProbFooter from "@/app/components/probFooter"
import { useState } from "react"
const SelectLevel = () => {

  // const getUserData = async () => {

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
  //     cache: "no-store"
  //   })

  //   const userData = await res.json()

  //   return userData
  // }

  // const userData = await getUserData()

  const [position, setPosition] = useState<number>(0);

  const positionMove = (operation: string) => {
    if (operation === "L" && position !== 0) {
      setPosition((prev) => prev - 1);
    } else if (operation === "R" && position !== 2) {
      setPosition((prev) => prev + 1);
    }
  }

  return (
    <div className="relative h-[100vh]">
      <SelectHeader />
      <div>

        <div className="relative">
          <div className="absolute top-6">
            <Nameplate />
          </div>
          <div className="w-7/12 mx-auto h-[60vh] pt-[20vh] flex items-center justify-center">
            <div className="w-full flex justify-between">
              {/* Lv1 */}
              <div className="relative w-[40px] h-[40px] bg-[#F7CB26] border-[#615734] border-4 rounded-[50%]">
                { position === 0 &&
                  <div>
                    <div className="absolute top-[-100px]">aaa</div>
                    <div className="absolute top-[60px] w-[60px] h-[60px] bg-gray-500 rounded-[50%] translate-x-[-15px]"></div>
                  </div>
                }
              </div>

              {/* Lv2 */}
              <div className="relative w-[40px] h-[40px] bg-[#F7CB26] border-[#615734] border-4 rounded-[50%]">
                { position === 1 &&
                  <div>
                    <div className="absolute top-[-100px]">aaa</div>
                    <div className="absolute top-[60px] w-[60px] h-[60px] bg-gray-500 rounded-[50%] translate-x-[-15px]"></div>
                  </div>
                }
              </div>

              {/* Lv3 */}
              <div className="relative w-[40px] h-[40px] bg-[#F7CB26] border-[#615734] border-4 rounded-[50%]">
                { position === 2 &&
                  <div>
                    <div className="absolute top-[-100px]">aaa</div>
                    <div className="absolute top-[60px] w-[60px] h-[60px] bg-gray-500 rounded-[50%] translate-x-[-15px]"></div>
                  </div>
                }
              </div>

            </div>
            <div className="absolute w-7/12 h-[4px] border-black border-[2px] z-[-10]"></div>
          </div>

          <div className="flex w-10/12 justify-end">
            <div
              onClick={() => positionMove("L")}
              className="w-[50px] h-[50px]">←</div>
            <div
              onClick={() => positionMove("R")}
              className="w-[50px] h-[50px]">→</div>
          </div>
        </div>
        <Link href="/level1">level1</Link>
        <div className="absolute bottom-0 left-[50vw] translate-x-[-50%]">
        <ProbFooter />

        </div>
      </div>
    </div>
  )
}

export default SelectLevel