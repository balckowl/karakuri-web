import { db } from "@/lib/firebase/admin"
import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

const GET = async (req: NextRequest, res: NextResponse) => {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' });
    }

    const { uid } = session.user

    console.log(session)

    const userData = await db.collection('users').doc(uid).get();

    return NextResponse.json(userData.data());
}

export { GET }