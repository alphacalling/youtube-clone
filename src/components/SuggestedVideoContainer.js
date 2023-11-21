// import React, { useEffect, useState } from 'react';
// import { Suggested_Video_Api } from '../utils/constant';
// import SuggestedVideo from './SuggestedVideo';
// import { Link } from 'react-router-dom';
// import { Shimmer } from './Shimmer';

// const SuggestedVideoContainer = ({ params }) => {
//     const [suggestVideo, setSuggestVideo] = useState([])
//     const getSuggestVideo = async () => {
//         const data = await fetch(Suggested_Video_Api + params.get("v"));
//         const json = await data.json();
//         setSuggestVideo(json.items)
//         console.log(json)
//     }

//     useEffect(() => {
//         getSuggestVideo()
//     }, [])
//     if (!suggestVideo) return null;
//     return (

//         <div className='flex flex-col gap-4 flex-wrap'>

//             {suggestVideo.length > 0 ? (
//                 suggestVideo.map((suggestVideo) => (
//                     <div
//                         className=''
//                         key={suggestVideo.id}><Link to={"/watch?v=" + suggestVideo.id.videoId}><SuggestedVideo info={suggestVideo} /></Link></div>
//                 ))
//             ) : (
//                 < Shimmer />
//             )}
//         </div>
//     )
// }

// export default SuggestedVideoContainer;