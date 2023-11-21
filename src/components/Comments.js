// import React from "react";
// import userIcon from '../assets/user-icon.png';
// // import Shimmer from "./Shimmer";

// const Comments = ({ data }) => {
//     const { name, comment, replies } = data;
//     return (
//         <>
//             <div className="flex">
//                 <div className="m-2">
//                     <img
//                         src={userIcon}
//                         className="h-6"
//                         alt="user" />
//                 </div>
//                 <div className="font-medium bg-gray-300 p-2 px-5 m-4 rounded-lg shadow-md">
//                     <p className="font-bold text-sm">{name}</p>
//                     <p className="font-semibold text-sm">{comment}</p>
//                 </div>
//             </div>
//         </>
//     )
// };


// export const CommentList = ({ comments }) => {
//     // Check if comments is an array before mapping over it
//     if (!Array.isArray(comments)) {
//         return null; // or return an error message or handle this case as needed
//     }
//     return comments.map((comment, index) => (
//         <div className="mb-5 bg-slate-100 mt-5 rounded-lg">
//             <Comments key={index} data={comment} />
//             <div className="pl-5 border border-l-red-400 ml-5">
//                 <CommentList comments={comment.replies} />
//             </div>
//         </div>
//     ));
// };


// export default Comments;