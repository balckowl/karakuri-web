import { db } from "@/lib/firebase/admin"
import { authOptions } from "@/lib/next-auth/options"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"


// const GET = async (req: NextApiRequest, res: NextApiResponse) => {

//     const session = await getServerSession(req, res, authOptions)

//     // const userData = await db.collection('users').doc('sQ909jGwv9OqNmeDQFYqTwcbAsz2').get()
//     const userData = await db.collection('users').doc(session?.user.uid).get()

//     return NextResponse.json(userData.data())
// }

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