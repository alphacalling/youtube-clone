import React, { useState } from "react";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";

const VideoInfo = ({ info, params }) => {
    const [Subscribe, setSubscribe] = useState(true);
    const [isLike, setIsLike] = useState(true);
    const [isDislike, setIsDislike] = useState(true);
    const [text, setText] = useState(info[0]?.snippet?.description || '');
    const [isExpand, setIsExpand] = useState(false);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    };

    const viewNumber = parseInt(info[0]?.statistics.viewCount);

    const viewCount = (viewNumber) => {
        if (viewNumber < 1000) {
            return viewNumber.toString();
        } else if (viewNumber >= 1000 && viewNumber < 1000000) {
            return (viewNumber / 1000).toFixed(1) + "K";
        } else if (viewNumber >= 1000000 && viewNumber < 1000000000) {
            return (viewNumber / 1000000).toFixed(1) + "M";
        } else if (viewNumber >= 1000000000) {
            return (viewNumber / 1000000000).toFixed(1) + "B";
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="border rounded-lg p-6 bg-gray-200 w-full max-w-4xl">
                <div className="font-bold text-lg">{info[0]?.snippet?.title}</div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex gap-2 cursor-pointer items-center">
                        <img
                            src={info[0]?.snippet?.thumbnails?.high?.url}
                            alt="channel-logo"
                            className="rounded-full h-14 w-14"
                        />
                        <div className="">
                            <div className="font-bold text-xl">{info[0]?.snippet?.channelTitle}</div>
                            <div className="font-semibold text-sm">{info[0]?.statistics?.likeCount} subscribers</div>
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center">
                            <span className="border border-black rounded-l-full bg-gray-200 px-4 p-2 flex items-center hover:bg-gray-300">
                                <button
                                    onClick={() => setIsLike(!isLike)}
                                    className="flex items-center"
                                >
                                    {isLike ? (
                                        <BiLike fontSize="20px" />
                                    ) : (
                                        <BiSolidLike fontSize="20px" />
                                    )}
                                    <span className="font-semibold ml-1">
                                        {isLike
                                            ? info[0]?.statistics?.likeCount
                                            : parseInt(info[0]?.statistics?.likeCount) + 1}
                                    </span>
                                </button>
                            </span>
                            <span className="border border-black rounded-r-full bg-gray-200 px-4 p-2 flex items-center hover:bg-gray-300">
                                <button
                                    onClick={() => setIsDislike(!isDislike)}
                                    className="flex items-center"
                                >
                                    {isDislike ? (
                                        <BiDislike fontSize="20px" />
                                    ) : (
                                        <BiSolidDislike fontSize="20px" />
                                    )}
                                    <span className="font-semibold ml-1">
                                        {isDislike
                                            ? info[0]?.statistics?.commentCount
                                            : parseInt(info[0]?.statistics?.commentCount) - 1}
                                    </span>
                                </button>
                            </span>
                        </div>
                        <button
                            onClick={() => setSubscribe(!Subscribe)}
                            className={`rounded-full py-2 px-4 m-2 ${
                                Subscribe ? "bg-black text-white" : "bg-gray-400 text-black font-bold"
                            }`}
                        >
                            {Subscribe ? "Subscribe" : "Subscribed"}
                        </button>
                    </div>

                    <div className="hidden sm:flex gap-2">
                        <span className="border border-black bg-gray-300 rounded-full p-2 px-4 flex items-center hover:bg-gray-700 hover:text-white cursor-pointer">
                            <TbShare3 fontSize="18px" />
                            <div className="font-semibold ml-1">Share</div>
                        </span>
                        <span className="border border-black bg-gray-300 rounded-full p-2 px-4 flex items-center hover:bg-gray-700 hover:text-white cursor-pointer">
                            <TfiDownload fontSize="18px" />
                            <div className="font-semibold ml-1">Download</div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl bg-gray-200 rounded-lg p-4 mt-2">
                <div className="font-bold">{viewCount(viewNumber)} views</div>
                <div className="flex flex-wrap mt-1 mb-2">
                    {info[0]?.snippet?.tags?.map((tag, index) => (
                        <span key={index} className="mr-2 text-sm text-blue-600">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div>
                    {isExpand ? (
                        <div>
                            {text}
                            <button onClick={toggleExpand}>
                                <div className="font-bold text-blue-500 cursor-pointer">...less</div>
                            </button>
                        </div>
                    ) : (
                        <div>
                            {text.slice(0, 100)}...
                            <button onClick={toggleExpand}>
                                <div className="font-bold text-blue-500 cursor-pointer">...more</div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoInfo;
