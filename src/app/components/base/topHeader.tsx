
import Image from "next/image";
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

const TopHeader = ({ pathname = "/" }: { pathname?: string }) => {

  return (
    <header className="bg-white h-[100px] flex">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex">
            <Image src={"/images/logo/karakuri-web_logo.png"} alt="logo" width={100} height={100} className="object-cover" />
            <h1 className="flex items-center text-[38px] font-bold ">karakuri-web</h1>
          </div>
        </Link>
        {
          pathname == "/" &&
          <div className="flex">
            <Button className="bg-white border-black border-[1px] text-black hover:text-white p-6">
              <Link href="/auth/login">始めよう</Link>
            </Button>
          </div>
        }
      </div>
    </header>
  )
}

export default TopHeader