import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { HiTrendingUp } from 'react-icons/hi';
import { BiSolidVideos } from 'react-icons/bi';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { RiVideoAddLine } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaNewspaper } from 'react-icons/fa';
import { CgTrending } from 'react-icons/cg';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { CgMediaLive } from 'react-icons/cg';
import { SiYoutubegaming } from 'react-icons/si';
import myContext from '../utils/myContext';



const SideBar = () => {

    const navigate = useNavigate();
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const { text, setText } = useContext(myContext);

    if (!isMenuOpen) return null;

    return (
        <>
            <div className="col-span-4 border shadow-lg p-8 m-5 w-80 rounded-md h-[64rem]">

                {/* first container */}
                <div className="font-bold text-xl border-b-2 pb-5">
                    <h2
                        className="flex m-1">
                        <AiOutlineHome
                            className="mx-6" />
                        <Link to='/'>Home</Link>
                    </h2>

                    <h2
                        onClick={(e) => {
                            const searchTerm = "Trending";
                            setText("Trending");
                            navigate(`/search/${searchTerm}`);
                        }}
                        className="flex m-1 pt-2 cursor-pointer">
                        <HiTrendingUp className="mx-6" />
                        Trending
                    </h2>

                    <h2
                        onClick={(e) => {
                            const searchTerm = "Shorts";
                            setText("Shorts");
                            navigate(`/search/${searchTerm}`);
                        }}
                        className="flex m-1 pt-2 cursor-pointer">
                        <BiSolidVideos className="mx-6" />
                        Shorts
                    </h2>
                </div>


                {/* second container */}
                <div className="text-lg border-b-2 pb-8">
                    <h2 className="font-bold text-xl ml-10">Yours...</h2>

                    <h2
                        className="flex m-1 pt-2 cursor-pointer">
                        <BiLike className="mx-6" />
                        Liked Videos
                    </h2>

                    <h2 className="flex m-1 pt-2 cursor-pointer">
                        <MdOutlineLibraryAdd className="mx-6" />
                        Library
                    </h2>

                    <h2 className="flex m-1 pt-2 cursor-pointer">
                        <FaHistory className="mx-6" />
                        History
                    </h2>

                    <h2 className="flex m-1 pt-2 cursor-pointer">
                        <FaRegClock className="mx-6" />
                        Watch later
                    </h2>
                </div>

                {/* third container */}
                <div className="border-b-2">
                    <h2 className="font-bold text-xl ml-10">Explore</h2>
                    <ul className="font-semibold text-lg">

                        <li
                            onClick={(e) => {
                                const searchTerm = "Web Development";
                                setText("Web Development");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <GiBrain
                                className="mx-6" />
                            Web Dev</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "Music";
                                setText("Music");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <BsMusicNoteBeamed className="mx-6" />
                            Music</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "News";
                                setText("News");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <FaNewspaper className="mx-6" />
                            News</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "UPSC";
                                setText("UPSC");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <CgTrending className="mx-6" />
                            UPSC</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "Movies";
                                setText("Movies");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <MdOutlineLocalMovies className="mx-6" />
                            Movies</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "Live";
                                setText("Live");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <CgMediaLive className="mx-6" />
                            Live</li>
                        <li
                            onClick={(e) => {
                                const searchTerm = "Gaming";
                                setText("Gaming");
                                navigate(`/search/${searchTerm}`);
                            }}
                            className="flex m-1 pt-2 cursor-pointer">
                            <SiYoutubegaming className="mx-6" />
                            Gaming</li>
                    </ul>
                </div>

                {/* fourth container */}
                <div className="border-b-2 pb-8">
                    <h2 className="font-bold text-xl ml-10">Subscriptions</h2>
                    <ul className="font-semibold text-lg">
                        <li>Insane Voice</li>
                        <li>Akshay Saini</li>
                        <li>WION</li>
                        <li>India TV</li>
                        <li>Mr Beans</li>
                        <li>Discovery TV</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar;