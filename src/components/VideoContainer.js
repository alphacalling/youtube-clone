import React, { useEffect, useState } from 'react';
import { Youtube_API } from '../utils/constant';
import VideoCard, { ADVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { Shimmer } from './Shimmer';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [nextPage, setNextPage] = useState("");

    //api call for videos
    useEffect(() => {
        getVideos();
    }, []);

    //calling useEffect when new page added
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll, true);
        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll, true);
        }
    }, [nextPage]);

    // const getVideos = async () => {
    //     const url = nextPage !== "" ? `${Youtube_API}&pageToken=${nextPage}` : Youtube_API;
    //     const data = await fetch(url);
    //     const json = await data.json();
    //     setNextPage(json?.nextPage);
    //     setVideos([...videos, ...json.items]);
    // }

    const getVideos = async () => {
        // Construct the URL for the API request
        const url = nextPage !== "" ? `${Youtube_API}&pageToken=${nextPage}` : Youtube_API;

        // Fetch data from the API
        const data = await fetch(url);

        // Parse the response as JSON
        const json = await data.json();

        // Check if json.items is an array before updating the state
        if (json.items && Array.isArray(json.items)) {
            // If it's an array, update the state with the new videos
            setNextPage(json.nextPage);

            // Use the previous state of videos and add the new videos to it
            setVideos((prevVideos) => [...prevVideos, ...json.items]);
        }
        else {
            // Handle the case where json.items is not an array
            console.error("Invalid response format. Expected 'items' to be an array.", json);
        }
    };


    //infinite handler
    const handleInfiniteScroll = () => {
        if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
            getVideos();
        }
    }

    if (!videos) return null;

    return (videos.length == 0) ? (<Shimmer />) : (
        <div className='sm:flex sm:flex-wrap sm:justify-evenlyp'>

            {/* Sponsored Video */}
            {videos[10] && <ADVideoCard info={videos[10]} />}

            {/* all videos */}
            {videos.map((video) => (
                <Link key={video.id} to={'/watch?v=' + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer;
