import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Video_Search_Api } from '../utils/constant'
import { API_Key } from '../utils/constant';
import myContext from '../utils/myContext';
import SearchVideo from './SearchVideo';
import SideBar from './SideBar';
import { Shimmer } from './Shimmer';

const SearchVideoContainer = () => {

    const params = useParams();
    const [searchVideo, setSearchVideo] = useState([]);
    const { text, setText } = useContext(myContext);

    // search functions for Sidebar icon

    useEffect(() => {
        getSearchVideo();
    }, [params.searchTerm]);

    const getSearchVideo = async () => {
        const data = await fetch(Video_Search_Api + params.searchTerm + "&type=video&key=" + API_Key);
        const json = await data.json();
        console.log("search", json);
        setSearchVideo(json.items);
    };


    // if search bar is null
    if (!searchVideo) {
        return null;
    }
    return (searchVideo.length == 0) ? (<Shimmer />) : (
        <div>
            <div className="flex">
                <div className="flex w-full flex-wrap ml-8">
                    {searchVideo.map((searchVideo) => (
                        <Link key={searchVideo.id.VideoId} to={"/watch?v=" + searchVideo.id.videoId}>
                            <SearchVideo info={searchVideo} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchVideoContainer;