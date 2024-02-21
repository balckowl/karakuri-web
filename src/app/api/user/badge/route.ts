import { db } from "@/lib/firebase/admin"
import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

const POST = async (req: NextRequest, res: NextResponse) => {
    const { currentBadge } = await req.json()
    console.log(currentBadge)
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' });
    }

    const { uid } = session.user

    await db.collection("users").doc(uid).set({
        currentBadge: currentBadge
    }, { merge: true })

    return NextResponse.json({}, { status: 200 })
}


export { POST }