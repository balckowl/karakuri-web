import { db } from "@/lib/firebase/admin"
import { NextResponse } from "next/server"

const GET = async() => {
    const newsData = await db.collection("news").get()

    const newsDataList = newsData.docs.map((news)=>{
        return news.data()
    })

    return NextResponse.json(newsDataList)

}

export { GET }