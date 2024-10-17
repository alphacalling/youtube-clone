import React, { useEffect, useState } from 'react';
import { Comments_Api } from '../utils/constant';
import Comment from './Comment';
import userIcon from '../assets/user-icon.png';
import { CommentShimmer } from './Shimmer';

const CommentsContainer = ({ params, comment }) => {
    const [commentData, setCommentData] = useState([]);

    // Fetch comments on mount or when `params` changes
    useEffect(() => {
        fetchComments();
    }, [params]);

    const fetchComments = async () => {
        try {
            const response = await fetch(Comments_Api + params.get("v"));
            if (!response.ok) {
                throw new Error(`Failed to fetch comments. Status: ${response.status}`);
            }
            const json = await response.json();
            setCommentData(json.items);
        } catch (error) {
            console.error("Error fetching comments:", error.message);
        }
    };

    if (!commentData) {
        return null;
    }

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-wrap items-center ml-4 sm:ml-2 mt-4 sm:mt-6">
                <h1 className="font-bold text-xl sm:text-lg mr-4">
                    {comment} Comments
                </h1>
                <h1 className="font-semibold text-base sm:text-sm">Sort by ↪</h1>
            </div>

            {/* Comments Section */}
            <div className="w-11/12 sm:w-full border sm:border-0 border-gray-300 p-4 rounded-lg m-4 sm:m-2">
                {/* User Icon and Input */}
                <div className="flex items-center mt-6 ml-4 sm:ml-2">
                    <img
                        src={userIcon}
                        alt="User Icon"
                        className="rounded-full h-10 w-10 sm:h-8 sm:w-8"
                    />
                    <input
                        className="border border-gray-400 w-2/3 sm:w-3/4 ml-4 sm:ml-2 p-2 rounded-md text-sm"
                        type="text"
                        placeholder="Add a comment..."
                    />
                </div>

                {/* Comments Mapping */}
                <div className="mt-6">
                    {commentData.length > 0 ? (
                        commentData.map((comment) => (
                            <div key={comment.id}>
                                <Comment info={comment} />
                            </div>
                        ))
                    ) : (
                        <CommentShimmer />
                    )}
                </div>
            </div>
        </>
    );
};

export default CommentsContainer;
