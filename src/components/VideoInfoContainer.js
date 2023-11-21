import React, { useEffect, useState } from 'react';
import { Video_Info_Api } from '../utils/constant';
import VideoInfo from './VideoInfo';
import { VideoInfoShimmer } from './Shimmer';

const VideoInfoContainer = ({ params }) => {

    const [videoDetail, setVideoDetail] = useState("");
    const getDetail = async () => {
        const data = await fetch(Video_Info_Api + params.get("v"));
        const json = await data.json();
        setVideoDetail(json.items)
        // console.log(json.items)
    }


    useEffect(() => {
        getDetail()
    }, [params])
    return (
        <div>
            {videoDetail ? <VideoInfo info={videoDetail} params={params} /> : (<VideoInfoShimmer />)}
        </div>
    )
}

export default VideoInfoContainer;