import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { parseISO, format } from 'date-fns'

const getNewsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news`, {
    next: { revalidate: 60 * 60 * 24 }
  })

  const newsData = await res.json()

  return newsData
}


const News = async() => {

  const newsDataList = await getNewsData()

  return (
    <div className="container">
      {/* 見出し */}
      <div className="mb-20 lg:mb-28">
        <p className="text-[#AE8818] lg:text-[18px]">・新着情報</p>
        <h2 className="text-[50px] leading-[50px] mb-2 font-bold">NEWS</h2>
      </div>

      <div className="flex w-10/12 mx-auto flex-col mb-20 lg:mb-32">

        {newsDataList.map((newsData: any, index: number) => (
          <div className="border-black border-b-[1px] w-full flex justify-between pb-2 mb-10 lg:pb-4 lg:mb-16" key={index}>
            <p className="w-3/12 lg:text-[18px]">{format(new Date(newsData.createdAt._seconds * 1000), 'yyyy.MM.dd')}</p>
            <p className="w-9/12 max-w-[350px] lg:text-[18px]">{newsData.content}</p>
          </div>
        ))}

        {/* <div className="flex justify-end">
          <Button className="bg-white border-black border-[1px] text-black hover:text-white w-max p-6 lg:p-8">
            <Link href="/auth/login">始めよう</Link>
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default News