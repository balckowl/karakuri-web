import Image from "next/image";

const Tech = () => {
  return (
    <div className="container mb-60">
      {/* 見出し */}
      <div className="mb-10 lg:mb-16">
        <p className="text-[#AE8818] lg:text-[18px]">・技術スタック</p>
        <h2 className="text-[50px] leading-[50px] mb-2 font-bold">TECH</h2>
        <p className="ml-1 lg:text-[18px]">karakuri-webで使用された技術スタックです</p>
      </div>

      <div className="flex justify-between relative">
        <div>
          <ul>
            <li>
              <p className="mb-2 lg:text-[18px]">・フロントエンド</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/nextjs.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"/images/tailwindcss.png"} alt="tailwindcss" width={100} height={60} className="object-cover" />
                <Image src={"/images/zustand.png"} alt="zustand" width={100} height={60} className="object-cover" />
                <Image src={"/images/framer.png"} alt="framer" width={60} height={60} className="object-cover" />
                <Image src={"/images/shadcn.png"} alt="shadcn" width={60} height={60} className="object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・バックエンド</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/nextjs.png"} alt="nextjs" width={60} height={60} className="object-cover" />
                <Image src={"/images/tailwindcss.png"} alt="tailwindcss" width={100} height={60} className="object-cover" />
                <Image src={"/images/gemini.png"} alt="gemini" width={60} height={60} className="object-cover" />
                <Image src={"/images/langchain.png"} alt="langchain" width={80} height={60} className="object-cover" />
                <Image src={"/images/nextauth.png"} alt="nextauth" width={54} height={60} className="object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・インフラ</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/vercel.png"} alt="vercel" width={60} height={60} className="object-cover" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・その他ツール</p>
              <div className="flex gap-4 mb-8">
                <Image src={"/images/figma.png"} alt="next" width={48} height={60} className="object-cover" />
                <Image src={"/images/git.png"} alt="next" width={64} height={60} className="object-cover" />
                <Image src={"/images/github.png"} alt="next" width={64} height={60} className="object-cover" />
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block absolute right-0 bottom-0">
          <Image src={"/images/techstack.png"} alt="techstack" width={700} height={700} className="object-cover" />
        </div>
      </div>

    </div>
  )
}

export default Tech