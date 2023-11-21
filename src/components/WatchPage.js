import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatCard from "./LiveChatCard";
import VideoInfoContainer from "./VideoInfoContainer";


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [liveChat, setLiveChat] = useState(false);
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <>
            <div className="flex rounded-lg overflow-x-hidden py-2 p-1 m-2">
                <div className="flex pr-2 flex-col">
                    <div className="p-2 m-5 mx-5 px-5 rounded-lg">
                        <iframe height="550" className="rounded-xl sm:w-[100%] ml-5"
                            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* video details for current playing video */}
                    <div>
                        <VideoInfoContainer params={searchParams} />
                    </div>

                    {/* comment container */}
                    <div>
                        <CommentsContainer params={searchParams} />
                    </div>
                </div>

                {/* liveChat */}
                <div className="md:flex md:flex-col hidden">
                    <button
                        onClick={() => setLiveChat(!liveChat)}
                        className="rounded-md bg-gray-200 font-bold mr-2  mb-3 p-1">LiveChat</button>

                    {/* <button
                        onClick={() => setLiveChat(!liveChat)}
                        className="rounded-md bg-gray-200 font-bold p-1">Hide LiveChat</button> */}

                    {
                        liveChat ? <LiveChatCard /> : ""
                    }
                </div>
            </div>
        </>
    )
};

export default WatchPage;