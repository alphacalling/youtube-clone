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
        <div className="sm:w-[17rem] w-full p-2 m-2 shadow-lg rounded-lg overflow-hidden">
        <ul className="flex flex-col justify-between">
            {/* Video Thumbnail */}
            <img className="h-64 sm:h-64 rounded-lg w-full object-cover" src={thumbnails?.high?.url} alt="thumbnail" />
            
            {/* Video Title */}
            <li className="text-md sm:text-lg font-semibold mt-2 line-clamp-2">
                {snippet?.localized?.title.split(" ").slice(4).join(" ") + "..."}
            </li>
    
            {/* Channel Info */}
            <div className="flex items-center mt-3">
                <img className="h-10 w-10 rounded-full mr-3" src={thumbnails?.high?.url} alt="channel-thumbnail" />
                <li className="text-sm sm:text-md font-medium">{channelTitle}</li>
            </div>
    
            {/* Views and Published Date */}
            <div className="flex flex-col text-xs sm:text-sm text-gray-600 mt-2">
                <li className="font-medium">{viewCount(viewNumber) + " views"}</li>
                <p className="font-medium">{PublishedTimeOfVideo(publishedAt)}</p>
            </div>
        </ul>
    </div>
    
    );
};

export const ADVideoCard = ({ info }) => {
    const { snippet } = info;

    return (
        // <div className="mt-4 sm:m-2 sm:p-2 border border-red-700 sm:border-blue-700 shadow-2xl rounded-lg w-full max-w-sm mx-auto sm:w-[17rem] cursor-pointer">
        <ul className="sm:p-2 sm:m-2 sm:w-[16rem] sm:shadow-lg p-2 m-2">
            <img className="sm:h-42 rounded-2xl w-full" src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
            <li className="text-lg font-bold px-1">
                {snippet?.localized?.title.split(" ").slice(0, 4).join(" ") + "..."}
            </li>
            <li className="text-md font-bold px-1">{snippet?.channelTitle}</li>
            <li className="text-md font-medium px-1">Sponsored 💰</li>
        </ul>
        // </div>
    );
}

export default VideoCard;
