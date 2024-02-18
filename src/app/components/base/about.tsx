
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
        <div className="w-full border-black border-b-[1px] flex justify-between mb-16">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub1.webp"} alt="down" width={300} height={300} className="select-none w-full h-full object-cover" />
          </div>
          <div className="w-[50%]">
            <h3 className="text-[24px] mb-2 lg:text-[32px]">① 豊富なギミック</h3>
            <p className="mx-2 lg:text-[18px]">チピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ ブーブーブーチピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ　</p>
          </div>
        </div>
        <div className="w-full border-black border-b-[1px] flex flex-row-reverse justify-between mb-16">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub2.webp"} alt="down" width={300} height={300} className="select-none w-full h-full object-cover" />
          </div>
          <div className="w-[50%]">
            <h3 className="text-[24px] mb-2 lg:text-[32px]">② AIによるサポート</h3>
            <p className="mx-2 lg:text-[18px]">チピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ　チピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ ブーブーブー</p>
          </div>
        </div>
        <div className="w-full border-black border-b-[1px] flex justify-between mb-16">
          <div className="w-[40%] max-w-[400px]">
            <Image src={"/images/sub3.webp"} alt="down" width={300} height={300} className="select-none w-full h-full object-cover" />
          </div>
          <div className="w-[50%]">
            <h3 className="text-[24px] mb-2 lg:text-[32px]">③ ページのカスタマイズ</h3>
            <p className="mx-2 lg:text-[18px]">チピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ　チピチピ チャパチャパ ルビルビ ラバラバ パチコミルビルビ ブーブーブー</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About