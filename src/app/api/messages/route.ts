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
            謎解き問題は以下のとおりです。
            ・最初の問題はスクロールバーを取得し、画像を合わせると文字が浮かび上がるというものです。
            ・二つ目は画面のレスポンシブを切り替えると文字が浮かび上がってくるというものです。
            ・三つ目はダークモードにすると文字が浮かび上がってきます。
            ・四つ目は、ポインターを使って、三つ目の問題の解答にかざすと、答えの糸口が見えてきます。
            ・五つ目つ目は、404ページに行き、ポインターを獲得して、かざすと糸口が見えます。

            これらの問題に対する質問が来たときに、答えを言わずにヒントを出して欲しいのです。
            また、それ以外の質問に対しては適当な回答を行なってもらっても大丈夫です。

            鉤括弧内がその質問です。「${data.message}」
            `,
        ],
    ]);

    return NextResponse.json({ data: res.content }, { status: 200 })

}

export { POST }