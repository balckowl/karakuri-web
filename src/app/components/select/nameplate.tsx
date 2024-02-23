import Image from "next/image"
import { ReactNode } from "react"

const Nameplate = ({ children, currentBadge }: { children: ReactNode, currentBadge: number }) => {
  return (
    <div className="absolute">
      <div
        className="relative w-[300px] h-[100px] border-t-[10px] border-r-[10px] border-b-[10px] flex items-center
        justify-between
        bg-[#bbb] border-[#696969]
        "
      >
        {children}
        <div className={`w-[50px] h-[50px] rounded-[50%] mr-4 ${currentBadge != -1 && "bg-white"}`}>
          {currentBadge != -1 && <Image
            src={`/images/selectLevel/level${currentBadge + 1}_badge.png`}
            alt="" width={65} height={65}
            className="rounded-[50%]"
          />}
        </div>
      </div>
    </div>
  )
}

export default Nameplate