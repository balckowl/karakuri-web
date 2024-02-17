import { NextRequest, NextResponse } from "next/server"

const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params

    const { ans } = await req.json()

    if (id === "1") {
        if (ans === "HELLO") {
            return NextResponse.json({ judge: "correct" })
        } else {
            return NextResponse.json({ judge: "incorrect" })
        }
    }

    console.log(ans)

    return NextResponse.json({})
}

export { POST }