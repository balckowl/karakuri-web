import React from "react"
import Image from "next/image";
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

const TopHeader = ({ pathname = "/" }: { pathname?: string }) => {

  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex">
            <Image src={"/images/karakuri-web_logo.png"} alt="logo" width={70} height={70} className="select-none" />
            <div className="flex items-center text-3xl font-bold">karakuri-web</div>
          </div>
        </Link>
        {
          pathname == "/" &&
          <div className="flex">
            <Button className="bg-white border-black border-[1px] text-black hover:text-white">
              <Link href="/auth/login">始めよう</Link>
            </Button>
          </div>
        }
      </div>
    </header>
  )
}

export default TopHeader