import React from "react"
import Image from "next/image";
import { Button } from "@/app/components/ui/button"
import Link from "next/link"


const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex flex-col justify-end items-center mb-10">
    <Image
      src={"/images/karakuri-web_main.webp"}
      alt="main"
      width={1000}
      height={1000}
      className="w-full h-full object-cover"
    />
    <div className="absolute w-full h-full bg-black bg-opacity-80  z-50">
      <div className="w-max mx-auto h-full flex flex-col justify-center translate-y-[-16%]">
        <p className="text-3xl text-white mb-2">ようこそ、からくり館へ</p>
        <p className="text-white mb-20">
        あるサイトにログインしたとき、ある屋敷に閉じ込められてしまった。<br />
        どうやらこの屋敷にはWebを用いたからくりがあるらしい...<br />
        それらを攻略し、webサイトから脱出しよう。<br />
        想定プレイ時間: 1時間
        </p>
        <div className="w-full flex justify-end">
          <Button className=" bg-transparent border-white border-[1px] text-white hover:opacity-80 hover:bg-transparent transition-all w-max">
            <Link href="/auth/login">始めよう</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero