import { NextResponse } from "next/server"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    safetySettings: [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
    ],
});

const POST = async (req: Request) => {

    const data = await req.json()

    console.log(data.message)

    const res = await model.invoke([
        [
            "human",
            `
            このサイトはkarakuri-webという名前の謎解きサイトです。
            あなたはこのサイトでユーザーが謎解きに困った場合に質問されるロボです。
            名前はからくりロボです。その設定でユーザーと会話してください。

            
            ユーザーからのメッセージ：${data.message}
            `,
        ],
    ]);

    return NextResponse.json({ data: res.content }, { status: 200 })

}

export { POST }