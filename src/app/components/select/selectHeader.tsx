
import Image from "next/image";
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import Nameplate from "./nameplate";

const SelectHeader = ({ pathname = "/" }: { pathname?: string }) => {
  return (
    <header className="bg-white h-[100px] flex">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex">
            <Image src={"/images/karakuri-web_logo.png"} alt="logo" width={100} height={100} className="object-cover" />
            <h1 className="flex items-center text-[38px] font-bold lg:text-[40px]">karakuri-web</h1>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default SelectHeader