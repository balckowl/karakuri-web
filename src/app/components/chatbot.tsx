"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

const Chatbot = () => {

  interface messagesType {
    text: string;
    user: string;
  }

  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<messagesType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current
      scrollRef.current.scrollTop = scrollHeight - clientHeight
    }
  }, [messages]);

  const postMessage = async (e: FormEvent) => {

    e.preventDefault()

    if (!message) {
      return null;
    }

    setMessages((prevMessages) => [...prevMessages, { text: message, user: "human" }])

    setMessage('')
    setIsLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message })
    })

    const data = await res.json()

    setMessages((prevMessages) => [...prevMessages, { text: data.data, user: "alagin" }])
    setIsLoading(false)
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger className="fixed w-[60px] h-[60px] bg-white right-10 bottom-8 rounded-[13px] border border-black items-center">
          <FontAwesomeIcon icon={faMessage} className="text-[30px] mt-1 text-black" />
        </PopoverTrigger>
        <PopoverContent key="popover-content" className="w-[500px] h-[500px]" align={"end"}>
          <div className="flex flex-col justify-between h-full">
            <div className="w-full h-[400px] overflow-y-scroll px-2" ref={scrollRef}>
              <ul>
                {messages && messages.map((message, index) => (
                  <li key={index}>
                    <div className={`flex ${message.user === "alagin" ? "justify-start" : "justify-end"}`}>
                      <div className="flex gap-3">
                        {message.user === "alagin" &&
                          <Avatar>
                            <AvatarImage src="/images/icon/ai.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        }
                        <p className={`text-[13px] bg-green-300 dark:bg-[#0f3f0f] rounded-b ${message.user === "alagin" ? "rounded-tr" : "rounded-tl"} p-2 mt-[15px]`}>
                          {message.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={postMessage}>
              <div className="flex gap-3">
                <Input
                  type="input"
                  placeholder="ASK Alagin"
                  className="foucs: outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </Button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Chatbot