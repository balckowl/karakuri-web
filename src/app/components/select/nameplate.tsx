import { ReactNode } from "react"


const Nameplate = ({children}: {children:ReactNode}) => {
  return (
    <div className="absolute">
      <div 
        className="relative w-[300px] h-[100px] border-t-[10px] border-r-[10px] border-b-[10px] flex items-center
        bg-[#bbb] border-[#696969]
        "
      >
        { children }
        <div className="absolute w-[30px] h-[30px] bg-black bottom-2 right-4 rounded-[50%]"></div>
      </div>
    </div>
  )
}

export default Nameplate