import React, { useState } from "react";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
// import CommentContainer from "./CommentContainer";

const VideoInfo = ({ info, params }) => {
    const [Subscribe, setSubscribe] = useState(true);
    const [isLike, setIsLike] = useState(true);
    const [isDislike, setIsDislike] = useState(true);
    const [text, setText] = useState(info[0]?.snippet?.description || '');
    const [isExpand, setIsExpand] = useState(false);

    const less = () => {
        setIsExpand(!isExpand);
    };

    const more = () => {
        setIsExpand(!isExpand);
    };
    const viewNumber = parseInt(info[0]?.statistics.viewCount);

    // converting the viewCount in International System
    const viewCount = (viewNumber) => {
        if (viewNumber < 1000) {
            return viewNumber.toString();
        } else if (viewNumber >= 1000 && viewNumber < 1000000) {
            return (viewNumber / 1000).toFixed(1) + "K";
        } else if (viewNumber >= 1000000 && viewNumber < 1000000000) {
            return (viewNumber / 1000000).toFixed(1) + "M";
        } else if (viewNumber >= 1000000000 && viewNumber < 1000000000000) {
            return (viewNumber / 1000000000).toFixed(1) + "B";
        }
    };

    // console.log(info[0]);
    return (
        <div>
            <div className="border rounded-lg ml-4 p-6 bg-gray-200 w-5/12 sm:w-[100%] sm:flex sm:flex-col">
                <div className="font-bold text-lg">{info[0]?.snippet?.title}</div>
                <div className="flex gap-8 mt-8">
                    <div className="flex gap-2 cursor-pointer justify-between">
                        <img
                            src={info[0]?.snippet?.thumbnails?.high?.url}
                            alt="channel-logo"
                            className="rounded-full h-14 w-14"
                        />
                        <div className="">
                            <div className="font-bold text-lg pl-3">
                                {info[0]?.snippet?.channelTitle}
                            </div>
                            <div className="font-bold">{info[0]?.statistics?.likeCount} subscribers</div>
                        </div>
                    </div>
                    <div className="sm:flex">

                        <button className="flex justify-center items-center">

                            <span className="border border-black rounded-l-full bg-gray-200 px-4 p-2  flex gap-1 items-center hover:bg-gray-300">
                                <button
                                    onClick={() => setIsLike(!isLike)}
                                    className="border-slate-800 px-1"
                                >
                                    {isLike ? (
                                        <BiLike fontSize />
                                    ) : (
                                        <BiSolidLike fontSize />
                                    )}
                                </button>

                                <div className="font-semibold">
                                    {isLike
                                        ? info[0]?.statistics?.likeCount
                                        : parseInt(info[0]?.statistics?.likeCount) + 1}
                                </div>
                            </span>
                            <div className="border border-black rounded-r-full bg-gray-200 px-6 flex gap-1 items-center p-2 hover:bg-gray-300 ">
                                <button
                                    onClick={() => setIsDislike(!isDislike)}
                                    className="border-slate-800 px-1"
                                >
                                    {isDislike ? (
                                        <BiDislike fontSize />
                                    ) : (
                                        <BiSolidDislike fontSize />
                                    )}
                                </button>
                                <div className="font-semibold">
                                    {isDislike
                                        ? info[0]?.statistics?.commentCount
                                        : parseInt(info[0]?.statistics?.commentCount) - 1}
                                </div>
                            </div>
                        </button>
                        <div className="cursor-pointer pl-10 sm:pl-10">
                            <button onClick={() => setSubscribe(!Subscribe)}>
                                {Subscribe ? (
                                    <button className="rounded-full py-3 px-4 m-2  bg-black text-white">
                                        Subscribe
                                    </button>
                                ) : (
                                    <button className="rounded-full py-3 px-4 m-2 bg-gray-400 text-black font-bold">
                                        Subscribed
                                    </button>
                                )}
                            </button>
                        </div>
                    </div>
                    <span className="border border-black sm:flex gap-2 bg-gray-300 rounded-full p-2 px-6 m-1 justify-center items-center hover:bg-gray-700 hover:text-white cursor-pointer hidden">
                        <TbShare3 fontSize="18px" />
                        <div className="font-semibold">Share</div>
                    </span>
                    <span className="border border-black sm:flex gap-2 bg-gray-300 rounded-full p-2 px-5 m-1 justify-center items-center hover:bg-gray-700 hover:text-white cursor-pointer hidden">
                        <TfiDownload fontSize="18px" />
                        <div className="font-semibold">Download</div>
                    </span>
                </div>
            </div>

            <div className="w-5/12 sm:w-[100%] bg-gray-200 rounded-lg p-4 ml-4 mt-2">
                <div className="font-bold">{viewCount(viewNumber)} views</div>
                <div className="">
                    {info[0]?.snippet?.tags?.map((tag) => "#" + tag)}
                </div>

                {isExpand ? (
                    <div>
                        {text}
                        <button onClick={less}>
                            <div className="font-bold">...less</div>
                        </button>
                    </div>
                ) : (
                    <div>
                        {text.slice(0, 100)}
                        <button onClick={more}>
                            <div className="font-bold">...more</div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoInfo;
