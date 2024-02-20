
import Image from "next/image";

const About = () => {
  return (
    <div className="container">
      {/* 見出し */}
      <div className="mb-20 lg:mb-28">
        <p className="text-[#AE8818] lg:text-[18px]">・内容</p>
        <h2 className="text-[50px] leading-[50px] mb-2 font-bold">ABOUT</h2>
        <p className="ml-1 lg:text-[18px]">karakuri-webの特徴。karakuri-webの特徴。karakuri-webの特徴。</p>
      </div>

      <div className="flex flex-col">
        <div className="w-full border-[#ae8818] flex justify-between mb-16 gap-6">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub1.webp"} alt="sub1" width={300} height={300} className="max-w-[300px] select-none w-full h-full object-cover" />
          </div>
          <div className="w-[60%]">
            <h3 className="text-[24px] lg:text-[32px]">豊富なギミック</h3>
            <div className="w-[30px] h-[4px] bg-[#ae8818] mb-2"></div>
            <p className="mx-2 lg:text-[18px]">多彩なギミックを取り揃え、謎解きのバリエーションが豊富です。</p>
          </div>
        </div>
        <div className="w-full border-[#ae8818] flex flex-row-reverse justify-between mb-16">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub2.webp"} alt="sub2" width={300} height={300} className="max-w-[300px] select-none w-full h-full object-cover" />
          </div>
          <div className="w-[60%]">
            <h3 className="text-[24px] mb-2 lg:text-[32px]">AIによるサポート</h3>
            <div className="w-[30px] h-[4px] bg-[#ae8818] mb-2"></div>
            <p className="mx-2 lg:text-[18px]">ゲーム内でAIが独自のヒントや解説を提供します。プレイヤーが行き詰まった際にスマートかつ効果的なサポートが得られ、ストレスなく謎解きを進めれます。</p>
          </div>
        </div>
        <div className="w-full border-[#ae8818] flex justify-between mb-16">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub3.webp"} alt="sub3" width={300} height={300} className="max-w-[300px] select-none w-full h-full object-cover" />
          </div>
          <div className="w-[60%]">
            <h3 className="text-[24px] mb-2 lg:text-[32px]">ページのカスタマイズ</h3>
            <div className="w-[30px] h-[4px] bg-[#ae8818] mb-2"></div>
            <p className="mx-2 lg:text-[18px]">プレイヤーは自らの好みに合わせてゲームページをカスタマイズできます。個性的な雰囲気や難易度設定で、カスタム体験を楽しみましょう。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About