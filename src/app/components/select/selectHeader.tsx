import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/app/components/ui/hover-card"
import { signOut as signOutNextAuth, useSession } from "next-auth/react";
import { signOut as signOutFirebase } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

import Image from "next/image";
import Link from "next/link"
import { useEffect } from "react";

const SelectHeader = ({ pathname = "/" }: { pathname?: string }) => {
  const { data: session } = useSession()
  const logOut = async () => {

    //firebaseからのログアウト
    await signOutFirebase(auth)
    //nextauthからログアウト
    signOutNextAuth({ callbackUrl: '/' })
  }

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  },[])

  return (
    <header className="bg-[#000] h-[80px] flex bg-opacity-80">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex">
            <Image src={"/images/logo/karakuri-web_logo.png"} alt="logo" width={100} height={100} className="object-cover" />
            <h1 className="flex items-center text-[38px] font-bold lg:text-[40px] text-white">karakuri-web</h1>
          </div>
        </Link>
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
                <li className="p-2">
                  <div onClick={() => logOut()} className="w-full cursor-pointer">Logout</div>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
      </div>
    </header>
  )
}

export default SelectHeader