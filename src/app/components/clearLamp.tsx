

const ClearLamp = ({ clearLampList }: { clearLampList: any }) => {

  return (
    <div className="fixed bottom-[120px] left-8">
      {clearLampList['level1'].map((clearLamp: any, index: number) => (
        <div key={index}
          className={`w-[20px] h-[20px] mb-2 rounded-[50%] border-black border-[1px] ${clearLamp === "0" ? "bg-white" : "bg-gradient-to-br from-red-400 via-red-600 to-red-800 bg-opacity-90 filter brightness-80"}`}
        ></div>
      ))}
    </div>
  )
}

export default ClearLamp