"use client"

import { Button } from "@/app/components/ui/button"
import { auth } from "@/lib/firebase/client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const Login = () => {

    const { data: session, status } = useSession()
    const router = useRouter()


    //ページブロックを実装
    if(status === "loading"){
        return <div>Loaing...</div>
    }else if(status === "authenticated"){
        router.push('/')
    }


    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider).then((credential) => {
            return credential.user.getIdToken(true)
        }).then((idToken) => {
            signIn("credentials", { idToken, callbackUrl: '/selectLevel' })
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="hero h-[500px] flex justify-center items-center bg-red-500">
            <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    )
}

export default Login