import React, { useEffect, useState } from 'react';
import LiveChat from './LiveChat';
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, makeString } from '../utils/RandomName'

const LiveChatCard = () => {

    const [liveChat, setLiveChat] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    useEffect(() => {
        // api polling
        const data = setInterval(() => {

            //dispatch an action
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeString(15) + '🚀',
            }))
        }, 1000);

        return () => {
            clearInterval(data);
        };
    }, []);
    return (
        <>
            <div className='h-[30rem] w-96 border border-black mt-1 sm:mr-4 sm:pr-4 rounded-lg shadow'>
                <span className='font-serif text-lg font-semibold border-b-2'>Live Chat</span>
                <div className='h-[25rem] w-96 border
        border-black flex flex-col-reverse overflow-y-scroll'>
                    <div className=''>
                        {chatMessage.map((chat, index) =>
                            <LiveChat key={index} name={chat.name} message={chat.message}
                            />)
                        }
                    </div>
                </div>

                <form className='focus:bg-slate-200 flex'
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("prevent default", liveChat);

                        //for showing on UI (dispatch action)
                        dispatch(addMessage({
                            name: "Vikas",
                            message: liveChat,
                        }));
                        setLiveChat("")
                    }}>

                    <input className='w-full m-1 rounded-md border border-blue-900'
                        type="text"
                        value={liveChat}
                        onChange={(e) => {
                            setLiveChat(e.target.value)
                        }}
                    />
                    <button className='p-2 m-1 bg-green-300 rounded-lg'>Chat</button>
                </form>
            </div>

        </>
    )
}

export default LiveChatCard;