import classnames from "classnames";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/app/components/ui/hover-card"
import { signOut as signOutNextAuth, useSession } from "next-auth/react";
import { signOut as signOutFirebase } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import DarkModeToggle from "./darkModeToggle";

const ProbHeader = ({ level }: { level: number }) => {

  //クライアントコンポーネントでのuser情報の取得方法
  const { data: session } = useSession()

  const bgColor = classnames({
    "bg-[#E78895]": level === 1,
    "bg-green-500": level === 2,
    "bg-purple-500": level === 3,
  });

  const logOut = async () => {

    //firebaseからのログアウト
    await signOutFirebase(auth)
    //nextauthからログアウト
    signOutNextAuth({ callbackUrl: '/' })
  }

  return (
    <header className={`h-[80px] ${bgColor} flex items-center`}>
      <div className="container mx-auto flex justify-between">
        <h2 className="text-3xl font-bold text-white">Lv.{level}</h2>
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
              <li className="p-2 border-black dark:border-white border-b-[1px]">
                <div onClick={() => logOut()} className="w-full cursor-pointer">Logout</div>
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