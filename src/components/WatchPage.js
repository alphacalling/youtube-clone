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
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <>
            <div className="flex flex-col md:flex-row rounded-lg overflow-x-hidden py-2 p-1 m-2">
                <div className="flex flex-col w-full md:w-2/3 pr-2">
                    <div className="p-2 m-2 md:m-5 rounded-lg">
                        <iframe
                            height="350" 
                            className="w-full md:h-[550px] rounded-xl"
                            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>

                    {/* Video details */}
                    <div className="p-2 m-2 md:m-5">
                        <VideoInfoContainer params={searchParams} />
                    </div>

                    {/* Comments */}
                    <div className="p-2 m-2 md:m-5">
                        <CommentsContainer params={searchParams} />
                    </div>
                </div>

                {/* Live Chat */}
                <div className="hidden md:flex md:flex-col w-full md:w-1/3">
                    <button
                        onClick={() => setLiveChat(!liveChat)}
                        className="rounded-md bg-gray-200 font-bold mr-2 mb-3 p-2 md:p-1 md:mr-0"
                    >
                        {liveChat ? "Hide LiveChat" : "Show LiveChat"}
                    </button>

                    {liveChat && <LiveChatCard />}
                </div>
            </div>
        </>
    );
};

export default WatchPage;
