import { ReactNode } from "react"


const Nameplate = ({children}: {children:ReactNode}) => {
  return (
    <div className="absolute">
      <div className="relative w-[300px] h-[100px] bg-gray-500 border-gray-900  border-t-[10px] border-r-[10px] border-b-[10px] flex items-center">
        { children }
        <div className="absolute w-[40px] h-[40px] bg-black bottom-2 right-4 rounded-[50%]"></div>
      </div>
    </div>
  )
}

export default Nameplate