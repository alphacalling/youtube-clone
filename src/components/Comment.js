import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const Comment = ({ info }) => {
    //    console.Console(info);
    return (
        <div className="flex gap-4 mt-6 ml-8 w-[1000px]">
            <div className="">
                <img
                    src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                    className="rounded-full"
                    height="50px"
                    width="50px"
                />
            </div>

            <div className="flex-col  ">
                <div className="font-bold mb-2">
                    {info?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                </div>
                <div className="mb-2">{info?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
                <div className="flex gap-6">
                    <span className="flex gap-2">
                        {/* like button */}
                        <SlLike fontSize="20px" color="rgb(74, 73, 73)" />
                        <div className="">
                            {info?.snippet?.topLevelComment?.snippet?.likeCount}
                        </div>
                    </span>

                    {/* dislike button */}
                    <div>
                        <SlDislike fontSize="20px" color="rgb(74, 73, 73)" />
                    </div>
                    <div className="font-bold text-sm">Reply</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
