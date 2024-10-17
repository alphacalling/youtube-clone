import React, { useEffect, useState } from 'react';
import LiveChat from './LiveChat';
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName, makeString } from '../utils/RandomName';

const LiveChatCard = () => {
    const [liveChat, setLiveChat] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const data = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeString(15) + '🚀',
            }));
        }, 1000);

        return () => clearInterval(data);
    }, [dispatch]);

    return (
        <div className='h-[30rem] w-full max-w-lg border border-black mt-1 sm:mr-4 sm:pr-4 rounded-lg shadow-md mx-auto'>
            <span className='font-serif text-lg font-semibold border-b-2 block text-center py-2'>Live Chat</span>
            <div className='h-[25rem] sm:h-[20rem] md:h-[22rem] lg:h-[25rem] w-full border border-black flex flex-col-reverse overflow-y-scroll'>
                <div>
                    {chatMessage.map((chat, index) => (
                        <LiveChat key={index} name={chat.name} message={chat.message} />
                    ))}
                </div>
            </div>
            <form
                className='flex items-center p-2'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Vikas",
                        message: liveChat,
                    }));
                    setLiveChat("");
                }}
            >
                <input
                    className='w-full m-1 rounded-md border border-blue-900 p-2'
                    type="text"
                    value={liveChat}
                    onChange={(e) => setLiveChat(e.target.value)}
                    placeholder="Type your message..."
                />
                <button className='p-2 m-1 bg-green-300 rounded-lg'>Chat</button>
            </form>
        </div>
    );
};

export default LiveChatCard;
