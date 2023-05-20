'use client';

import TodayForm from "@/components/client/TodayForm";
import {useEffect, useState} from "react";
import {IMessage} from "@/interfaces/IMessage";
import dayjs from "dayjs";

export default function AppIndexPage() {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('thediary_messages') ?? '[]') as IMessage[];
        setMessages(messages);
    }, [])

    return (
        <div className="mx-auto container py-8">
            {messages.map((message) => {
                if (message.date === dayjs().format('DD/MM/YYYY')) {
                    return <TodayForm/>
                }

                return (
                  <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        {message.date}
                    </h1>
                    <p>{message.message}</p>
                </div>
                );
            })}
        </div>
    );
}
