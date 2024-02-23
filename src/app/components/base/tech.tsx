import Image from "next/image";

const Tech = () => {
  return (
    <div className="container mb-60">
      {/* 見出し */}
      <div className="mb-10 lg:mb-16">
        <p className="text-[#AE8818] lg:text-[18px]">・技術スタック</p>
        <h2 className="text-[50px] leading-[50px] mb-2 font-bold">TECH</h2>
        <p className="ml-1 lg:text-[18px]">karakuri-webで使用された技術スタックです。</p>
      </div>

      <div className="flex justify-between relative">
        <div>
          <ul>
            <li>
              <p className="mb-2 lg:text-[18px]">・フロントエンド</p>
              <div className="flex gap-4 mb-8 items-center">
                <Image src={"/images/top/nextjs.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"/images/top/typescript.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"/images/top/tailwindcss.png"} alt="tailwindcss" width={100} height={100} className="w-[83px] h-[50px] object-cover" />
                <Image src={"/images/top/zustand.png"} alt="zustand" width={100} height={60} className="w-[70px] h-[70px] object-cover" />
                <Image src={"/images/top/framer.png"} alt="framer" width={60} height={60} className="object-cover" />
                <Image src={"/images/top/shadcn.png"} alt="shadcn" width={60} height={60} className="object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・バックエンド</p>
              <div className="flex gap-4 mb-8 items-center">
                <Image src={"/images/top/nextjs.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"/images/top/typescript.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"images/top/google-gemini.svg"} alt="gemini" width={150} height={150} className="object-cover" />
                <Image src={"/images/top/langchain.png"} alt="langchain" width={80} height={60} className="object-cover" />
                <Image src={"/images/top/nextauth.png"} alt="nextauth" width={54} height={60} className="object-cover" />
                <Image src={"/images/top/firebase.webp"} alt="firebase" width={54} height={60} className="w-[62px] object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・インフラ</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/top/vercel.png"} alt="vercel" width={60} height={60} className="object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・その他ツール</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/top/figma.png"} alt="next" width={40} height={40} className="w-[45px] h-[60px] object-cover" />
                <Image src={"/images/top/git.png"} alt="next" width={60} height={60} className="w-[60px] h-[60px] object-cover" />
                <Image src={"/images/top/github.png"} alt="next" width={50} height={50} className="w-[60px] h-[60px] object-cover" />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Tech