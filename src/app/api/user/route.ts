import { db } from "@/lib/firebase/admin"
import { authOptions } from "@/lib/next-auth/options"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"


const GET = async () => {

    const userData = await db.collection('users').doc('sQ909jGwv9OqNmeDQFYqTwcbAsz2').get()

    return NextResponse.json( userData.data() )
}

export { GET }