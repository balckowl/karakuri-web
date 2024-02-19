import { db } from "@/lib/firebase/admin"
import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params
    const { ans } = await req.json()
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' });
    }

    const { uid } = session.user
    const userDoc = await db.collection("users").doc(uid).get()
    const userData = userDoc.data()
    const updatedLevel1 = [...userData?.clearLampList.level1];

    if (id === "1") {
        if (ans === "HELLO") {
            updatedLevel1[0] = "1"

            await db.collection("users").doc(uid).set({
                clearLampList: {
                    ...userData?.clearLampList,
                    level1: updatedLevel1
                }
            }, { merge: true })

            return NextResponse.json({ judge: "correct" })
        } else {
            return NextResponse.json({ judge: "incorrect" })
        }
    }

    if (id === "2") {
        if (ans === "NEXT") {
            updatedLevel1[1] = "1"

            await db.collection("users").doc(uid).set({
                clearLampList: {
                    ...userData?.clearLampList,
                    level1: updatedLevel1
                }
            }, { merge: true })

            return NextResponse.json({ judge: "correct" })
        } else {

        }
    }

    console.log(ans)

    return NextResponse.json({})
}

export { POST }