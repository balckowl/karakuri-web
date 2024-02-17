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

const SelectLevel = async () => {

  // const getUserData = async () => {

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
  //     cache: "no-store"
  //   })

  //   const userData = await res.json()

  //   return userData
  // }

  // const userData = await getUserData()

  return (
    <div className="container mx-auto">
      {/* <p>レベル選択</p>
      <div className="bg-green-300">
        <div className="w-[400px] h-[100px] border border-black flex items-center flex-col justify-center">
          <h2 className="text-[50px]">hello</h2>
          <ul className="flex gap-3">
            {userData.badges.map((badge:string)=>(
              <li>{badge}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-[100px] h-[500px]">
          <div>
            <ul className="flex gap-3">
              {userData.clearLamp.level1.map((lamp: string, index: number) => (
                <li className={`${lamp == "0" ? 'bg-red-500' : 'bg-white'} border border-black rounded-full w-[20px] h-[20px]`} key={index}></li>
              ))}
            </ul>
            <Image src="/images/karakuri-web_main.webp" alt="" width={200} height={40} />
            <Link href="/level1">
              <p className="p-2">レベル1</p>
            </Link>
          </div>
          <div>
            <ul className="flex gap-3">
              {userData.clearLamp.level1.map((lamp: string, index: number) => (
                <li className={`${lamp == "0" ? 'bg-red-500' : 'bg-white'} border border-black rounded-full w-[20px] h-[20px]`} key={index}></li>
              ))}
            </ul>
            <Image src="/images/karakuri-web_main.webp" alt="" width={200} height={40} />
            <Link href="/level1">
              <p className="p-2">レベル2</p>
            </Link>
          </div>
          <div>
            <ul className="flex gap-3">
              {userData.clearLamp.level1.map((lamp: string, index: number) => (
                <li className={`${lamp == "0" ? 'bg-red-500' : 'bg-white'} border border-black rounded-full w-[20px] h-[20px]`} key={index}></li>
              ))}
            </ul>
            <Image src="/images/karakuri-web_main.webp" alt="" width={200} height={40} />
            <Link href="/level1">
              <p className="p-2">レベル3</p>
            </Link>
          </div>
        </div>
      </div> */}
      <div>
        <Link href="/level1">level1</Link>
      </div>
    </div>
  )
}

export default SelectLevel