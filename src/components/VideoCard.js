import React from "react";
import { PublishedTimeOfVideo } from "../utils/publishedData";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, description, thumbnails, publishedAt } = snippet;
    const viewNumber = parseInt(statistics.viewCount);

    // Setting views in International Number System
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

    return (
        <div className="flex sm:m-2 ml-12 p-3 rounded-lg shadow-lg sm:w-[17rem] w-full h-full max-w-sm mx-auto sm:flex-wrap">
            <ul>
                <img className="h-42 rounded-xl w-full" src={thumbnails?.high?.url} alt="thumbnail" />
                <li className="text-lg font-bold">
                    {snippet?.localized?.title.split(" ").slice(0, 4).join(" ") + "..."}
                </li>
                <li className="text-md font-sans font-bold">{channelTitle}</li>
                <li className="text-sm font-medium">{viewCount(viewNumber) + " views"}</li>
                <p className='text-sm font-medium'>{PublishedTimeOfVideo(publishedAt)}</p>
            </ul>
        </div>
    );
};

export const ADVideoCard = ({ info }) => {
    const { snippet } = info;

    return (
        <div className="mt-4 sm:m-2 sm:p-2 border border-red-700 shadow-2xl rounded-lg w-full max-w-sm mx-auto sm:h-[18rem] sm:w-[17rem] cursor-pointer">
            <ul>
                <img className="sm:h-42 rounded-xl w-full" src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
                <li className="text-lg font-bold">
                    {snippet?.localized?.title.split(" ").slice(0, 4).join(" ") + "..."}
                </li>
                <li className="text-md font-bold">{snippet?.channelTitle}</li>
                <li className="text-md font-medium">Sponsored 💰</li>
            </ul>
        </div>
    );
}

export default VideoCard;
