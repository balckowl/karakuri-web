import classnames from "classnames";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/app/components/ui/hover-card"
import { signOut as signOutNextAuth, useSession } from "next-auth/react";
import { signOut as signOutFirebase } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import DarkModeToggle from "./darkModeToggle";
import Link from "next/link"

const ProbHeader = ({ level }: { level: number }) => {

  //クライアントコンポーネントでのuser情報の取得方法
  const { data: session } = useSession()

  const title = classnames({
    "はじまりの部屋": level === 1,
    "からくり部屋": level === 2,
    "終わりの回廊": level === 3,
  });

  const logOut = async () => {

    //firebaseからのログアウト
    await signOutFirebase(auth)
    //nextauthからログアウト
    signOutNextAuth({ callbackUrl: '/' })
  }

  return (
    <header className={`h-[80px] flex items-center`} style={{ backgroundImage: 'url(/images/selectLevel/select_back_black.jpg)'}} >
      <div className="container mx-auto flex justify-between">
        <h2 className="text-3xl font-bold text-white" >Lv.{level}　{title}</h2>
        <HoverCard>
          <HoverCardTrigger asChild  className="hover:opacity-90 transition-all cursor-pointer">
            <div className="flex items-center gap-6">
              <Avatar>
                <AvatarImage src={session?.user.photoURL}/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-white">{session?.user.name}</p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <ul>
              <li className="px-2 pb-4 border-black dark:border-white border-b-[1px]">
                <Link href="/selectLevel" className="hover:opacity-80 transition-all">セレクト画面に戻る</Link>
              </li>
              <DarkModeToggle />
            </ul>
          </HoverCardContent>
        </HoverCard>
      </div>
    </header>
  )
}

export default ProbHeader