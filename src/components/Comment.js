import React from "react";
import { SlLike, SlDislike } from "react-icons/sl";

const Comment = ({ info }) => {
    return (
        <div className="flex flex-wrap gap-4 mt-6 ml-4 sm:ml-6 md:ml-8 lg:w-[80%] sm:w-full">
            {/* Author Image */}
            <div className="flex-shrink-0">
                <img
                    src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                    className="rounded-full h-12 w-12 sm:h-10 sm:w-10"
                    alt="Author Profile"
                />
            </div>

            {/* Comment Content */}
            <div className="flex flex-col w-full sm:w-auto">
                <div className="font-bold mb-1 text-sm sm:text-base">
                    {info?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                </div>
                <div className="text-sm sm:text-base mb-2">
                    {info?.snippet?.topLevelComment?.snippet?.textDisplay}
                </div>
                <div className="flex gap-4 text-sm sm:text-base items-center">
                    {/* Like Button */}
                    <span className="flex items-center gap-1">
                        <SlLike fontSize="16px" color="rgb(74, 73, 73)" />
                        <div>
                            {info?.snippet?.topLevelComment?.snippet?.likeCount}
                        </div>
                    </span>

                    {/* Dislike Button */}
                    <span className="flex items-center">
                        <SlDislike fontSize="16px" color="rgb(74, 73, 73)" />
                    </span>

                    <button className="font-semibold text-sm sm:text-base">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
