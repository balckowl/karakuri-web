"use client"

import TopHeader from "@/app/components/base/topHeader"
import { Button } from "@/app/components/ui/button"
import { auth, db } from "@/lib/firebase/client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import ProbFooter from "@/app/components/probFooter"
import { useState } from "react"
import Loading from "@/app/loading"

const Login = () => {

    const { data: session, status } = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = async() => {

        setIsLoading(true)

        await signInWithPopup(auth, googleProvider).then(async (credential) => {

            const idToken = await credential.user.getIdToken(true)

            const userDocRef = doc(db, "users", credential.user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    clearLampList: { level1: Array(5).fill("0"), level2: Array(5).fill("0"), level3: Array(5).fill("0") },
                    badges: ["0", "0", "0"],
                    currentBadge: -1,
                });
            }

            signIn("credentials", { idToken, callbackUrl: '/selectLevel' })

        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })

    }

    if(isLoading){
        return <Loading />
    }

    return (
        <div className="h-[100vh] relative">
            <TopHeader pathname='/auth/login' />
            <div className="hero mt-[70px]">
                <h2 className="text-center mb-7 text-[30px] font-bold">Login to karakuri-web</h2>
                <div className="flex justify-center">
                    <Button onClick={signInWithGoogle} className="flex gap-2 bg-white border border-black text-black hover:text-white">
                        <Image src="/images/auth/google-icon.svg" width={20} height={20} alt="google-icon" />
                        <p>Sign In with Google</p>
                    </Button>
                </div>
            </div>
            <div className="w-[400px] mx-auto">
                <p className="mt-20">利用規約</p>
                <div className=" h-[300px] overflow-hidden overflow-y-scroll border-black border-[1px] mx-auto p-4">
                    <h4 className="text-2xl font-bold mb-4">お客様から取得する情報</h4>
                    <ul className="list-disc ml-8">
                        <li>氏名(ニックネームやペンネームも含む)</li>
                        <li>メールアドレス</li>
                        <li>Cookie(クッキー)を用いて生成された識別情報</li>
                    </ul>

                    <p className="text-2xl font-bold mt-4">お客様の情報を利用する目的</p>
                    <p className="mt-4">当ウェブサイトは、お客様から取得した情報を、以下の目的のために利用します。</p>
                    <ul className="list-disc ml-8">
                        <li>当ウェブサイトサービスの提供、維持、保護及び改善のため</li>
                    </ul>

                    <p className="text-2xl font-bold mt-4">第三者提供</p>
                    <p className="mt-4">当ウェブサイトは、お客様から取得する情報のうち、個人データ（個人情報保護法第１６条第３項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。</p>
                    <ul className="list-disc ml-8">
                        <li>個人データの取扱いを外部に委託する場合</li>
                        <li>当ウェブサイトや当ウェブサイトサービスが買収された場合</li>
                        <li>事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）</li>
                        <li>その他、法律によって合法的に第三者提供が許されている場合</li>
                    </ul>

                    <p className="text-2xl font-bold mt-4">アクセス解析ツール</p>
                    <p className="mt-4">当ウェブサイトは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。</p>
                    <p>Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
                    <p>Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。</p>
                    <p>Googleアナリティクスについて、詳しくは以下からご確認ください。<a className="text-blue-500" href="https://marketingplatform.google.com/about/analytics/terms/jp/">https://marketingplatform.google.com/about/analytics/terms/jp/</a></p>

                    <p className="text-2xl font-bold mt-4">プライバシーポリシーの変更</p>
                    <p className="mt-4">当ウェブサイトは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>

                    <p className="mt-4">ハッカソン名: からくリンゴ</p>
                    <p>2024年02月20日 制定</p>

                </div>
            </div>
            <div className="absolute bottom-0 w-[100%]">
                <ProbFooter />
            </div>
        </div>
    )
}

export default Login