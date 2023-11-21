import React, { useEffect, useState } from 'react'
import { Comments_Api } from '../utils/constant';
import Comment from './Comment';
import userIcon from '../assets/user-icon.png';
import { CommentShimmer } from './Shimmer';


const CommentsContainer = ({ params, comment }) => {
    //  console.log(params)
    const [commentData, setCommentData] = useState([]);

    // api call for comment
    useEffect(() => {
        Comments()
    }, [params]);

    const Comments = async () => {
        try {
            const data = await fetch(Comments_Api + params.get("v"));
            if (!data.ok) {
                throw new Error(`Failed to fetch comments. Status: ${data.status}`);
            }
            const json = await data.json();
            setCommentData(json.items);
        } catch (error) {
            console.error("Error fetching comments:", error.message);
        }

    }

    // commentData is null
    if (!commentData) {
        return null;
    }
    return (
        <>
            {/* outerSection */}
            <div className='flex ml-14 mt-8 sm:overflow-x-hidden'>
                <h1 className='font-bold text-2xl mr-8 '>{comment} Comments</h1>
                <h1 className='font-semibold text-lg'>Sort by ↪</h1>
            </div>
            <div className='w-5/12 sm:w-[100%] sm:border border-gray-500 m-4 ml-4 rounded-lg'>

                {/* user image and input */}
                <div className='flex mt-10 ml-14'>
                    <img src={userIcon}
                        height="40px"
                        width="40px"
                        className='rounded-full ' />
                    <input
                        className='border border-gray-400 w-1/2 ml-4 rounded-md'
                        type='text'
                        placeholder='Add a comment... '>
                    </input>
                </div>

                {/* mapping comment data */}
                {commentData.length > 0 ?
                    (commentData.map((commentData) => (
                        <div key={commentData.id}>
                            <Comment info={commentData} comment={comment} />
                        </div>

                    ))) : (<CommentShimmer />)}
            </div>
        </>

    )
}

export default CommentsContainer;
