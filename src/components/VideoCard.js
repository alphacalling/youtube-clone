import React from "react";
import { PublishedTimeOfVideo } from "../utils/publishedData";


const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { channelTitle, description, thumbnails, publishedAt } = snippet;
    const viewNumber = parseInt(statistics.viewCount);

    //setting views in International Number System
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
        <div className="flex m-2 p-2 rounded-lg shadow-lg sm:w-[17rem] sm:flex-wrap">
            <ul>
                <img className="h-42 rounded-xl" src={thumbnails?.high?.url} alt="thumbnail" />
                <li className="text-lg font-bold">{snippet?.localized?.title.split(" ").slice(0, 4).join(" ") + "..."} </li>
                <li className="text-md font-sans font-bold">{channelTitle} </li>
                <li className="text-sm font-medium">{viewCount(viewNumber) + " views"}</li>
                <p className='text-sm font-medium'>{PublishedTimeOfVideo(publishedAt)}</p>

            </ul>
        </div>
    )
};

export const ADVideoCard = ({ info }) => {
    const { snippet } = info;

    return (
        <div className="m-2 p-2 border border-red-700 shadow-2xl rounded-lg sm:h-[18rem] sm:w-[17rem] cursor-pointer">
            <ul>
                <img className="h-42 rounded-xl " src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
                <li className="text-lg font-bold">{snippet?.localized?.title.split(" ").slice(0, 4).join(" ") + "..."} </li>
                <li className="text-md font-bold">{snippet?.channelTitle} </li>
                <li className="text-md font-medium">Sponsored 💰</li>
            </ul>
        </div>
    )
}
export default VideoCard;

