import ProbFooter from "../probFooter"
import Image from "next/image";

const TopFooter = () => {
  return (
    <div className="container">
      <div className="flex mb-12 border-black border-t-[1px] pt-10">
        <div className="w-[30%]">
          <Image src={"/images/logo/karakuri-web_logo.png"} alt="gyudon" width={230} height={230} className="mx-auto" />
          <p className="text-center">karakuri web</p>
        </div>
        <div className="flex w-[70%] justify-around pt-10">
          {/* 牛丼 */}
          <div className="w-[30%] flex flex-col h-full justify-between">

            <div>
              <div className="flex justify-between mb-4">
                <Image src={"/images/icon/gyudon.png"} alt="牛丼" width={70} height={70} className="rounded-[50%]" />
                <div className="w-[50%]">
                  <p className="font-semibold">牛丼</p>
                  <p className="text-sm mb-2 text-[#444]">gyudon</p>
                  <div className="w-[26px] h-[2px] bg-black"></div>
                </div>
              </div>
              <p className="text-sm">- バックエンドエンジニア</p>
              <p className="text-sm">- プロダクトマネージャー</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-all"><Image src={"/images/twitter.png"} alt="twitter" width={30} height={30} className="rounded-[10px]" /></a>
              <a href="#" className="hover:opacity-80 transition-all"><Image src={"/images/bluesky.png"} alt="bluesky" width={30} height={30} className="rounded-[10px]" /></a>
            </div>
          </div>

          {/* くしらっちょ */}
          <div className="w-[30%] flex flex-col h-full justify-between">

            <div>
              <div className="flex justify-between mb-4">
                <Image src={"/images/icon/kusirattyo.jpg"} alt="kusirattyo" width={70} height={70} className="rounded-[50%]" />
                <div className="w-[50%]">
                  <p className="font-semibold">くしらっちょ</p>
                  <p className="text-sm mb-2 text-[#444]">kusirattyo</p>
                  <div className="w-[26px] h-[2px] bg-black"></div>
                </div>
              </div>
              <p className="text-sm">- フロントエンドエンジニア</p>
              <p className="text-sm">- Webデザイナー</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-all"><Image src={"/images/twitter.png"} alt="twitter" width={30} height={30} className="rounded-[10px]" /></a>
            </div>
          </div>
        </div>
      </div>
      <ProbFooter />
    </div>
  )
}

export default TopFooter