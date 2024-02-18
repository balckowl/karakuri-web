import { Button } from "@/app/components/ui/button"
import Link from "next/link"


const News = () => {
  return (
    <div className="container">
      {/* 見出し */}
      <div className="mb-20 lg:mb-28">
        <p className="text-[#AE8818] lg:text-[18px]">・新着情報</p>
        <h2 className="text-[50px] leading-[50px] mb-2 font-bold">NEWS</h2>
      </div>

      <div className="flex w-10/12 mx-auto flex-col mb-20 lg:mb-32">
        <div className="border-black border-b-[1px] w-full flex justify-between pb-2 mb-10 lg:pb-4 lg:mb-16">
          <p className="w-4/12 lg:text-[18px]">2024.1.1</p>
          <p className="w-8/12 max-w-[300px] lg:text-[18px]">ちぴちぴをちゃぱちゃぱしました。</p>
        </div>
        <div className="border-black border-b-[1px] w-full flex justify-between pb-2 mb-10 lg:pb-4 lg:mb-16">
          <p className="w-4/12 lg:text-[18px]">2024.1.1</p>
          <p className="w-8/12 max-w-[300px] lg:text-[18px]">Happy Happy Happy</p>
        </div>
        <div className="border-black border-b-[1px] w-full flex justify-between pb-2 mb-10 lg:pb-4 lg:mb-16">
          <p className="w-4/12 lg:text-[18px]">2024.1.1</p>
          <p className="w-8/12 max-w-[300px] lg:text-[18px]">hum?</p>
        </div>
        <div className="flex justify-end">
          <Button className="bg-white border-black border-[1px] text-black hover:text-white w-max p-6 lg:p-8">
            <Link href="/auth/login">始めよう</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default News