import TopHeader from "./components/base/topHeader"
import Hero from "./components/base/hero"
import About from "./components/base/about"
import News from "./components/base/news"
import Tech from "./components/base/tech"
import TopFooter from "./components/base/topFooter"

import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Home = async () => {

  //サーバーコンポーネントでのuser情報の取得方法
  const session = await getServerSession(authOptions)

  if(session){
    redirect('/selectLevel')
  }

  return (
    <div>
      <TopHeader />
      <Hero />
      <div className="p-[10vh] flex w-max mx-auto">
        <div className="w-[30px] h-[4px] rotate-[45deg] bg-black"></div>
        <div className="w-[30px] h-[4px] rotate-[-45deg] translate-x-[-10px] bg-black"></div>
      </div>
      <About />
      <News />
      <Tech />
      <TopFooter />
    </div>
  )
}

export default Home