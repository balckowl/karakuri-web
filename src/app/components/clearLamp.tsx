

const ClearLamp = ({ clearLampList }: { clearLampList: any }) => {

  return (
    <div className="fixed bottom-[120px] left-8">
      {clearLampList['level1'].map((clearLamp: any, index: number) => (
        <div key={index}
          className={`w-[20px] h-[20px] mb-2 rounded-[50%] border-black border-[1px] ${clearLamp === "0" ? "bg-white" : "bg-red-500"}`}
        ></div>
      ))}
    </div>
  )
}

export default ClearLamp