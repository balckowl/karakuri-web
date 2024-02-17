import Link from "next/link"

const SelectLevel = () => {
  return (
    <div>
      <p>レベル選択</p>
      <div>
        <Link href="/level1">
          <p className="p-2">レベル1</p>
        </Link>
        <Link href="/level2">
          <p className="p-2">レベル2</p>
        </Link>
        <Link href="/level3">
          <p className="p-2">レベル3</p>
        </Link>
      </div>
    </div>
  )
}

export default SelectLevel