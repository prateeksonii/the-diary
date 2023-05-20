'use client';

import dayjs from "dayjs";
import {ChangeEventHandler, useEffect, useRef, useState} from "react";
import {IMessage} from "@/interfaces/IMessage";

export default function TodayForm() {
    const [messages, setMessages] = useState<IMessage[]>([]);
    let message = useRef<IMessage>();
    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('thediary_messages') ?? '[]') as IMessage[];
        message.current = messages.find(msg => msg.date === dayjs().format('DD/MM/YYYY'));
        setMessages(messages);
    }, []);

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const today = dayjs().format("DD/MM/YYYY");
        const messagesCopy = [...messages];
        if (messagesCopy.length > 0 && messagesCopy[0].date === today) {
            messagesCopy[0].message = event.target.value;
        } else {
            messagesCopy.unshift({date: today, message: event.target.value});
        }
        setMessages(messagesCopy);
        localStorage.setItem('thediary_messages', JSON.stringify(messagesCopy));
    };

    return (
        <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
                {dayjs().format("DD/MM/YYYY")}
            </h1>
            <textarea
                name="message"
                id="message"
                className="h-64 w-full bg-zinc-950 rounded-lg mt-4 p-4 text-zinc-300 text-xl"
                placeholder="Tell me about your day"
                onChange={handleChange}
                defaultValue={message.current?.message}
            ></textarea>
        </div>
    );
}
