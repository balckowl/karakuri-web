import TopHeader from "./components/base/topHeader"
import Hero from "./components/base/hero"
import About from "./components/base/about"
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
      <About />
      <Tech />
      <TopFooter />
    </div>
  )
}

export default Home