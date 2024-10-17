import React, { useState, useEffect } from 'react';
import Hamburger from '../assets/hamburger.png';
import YoutubeIcon from '../assets/youtube.jpg';
import userIcon from '../assets/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Youtube_Search_API } from '../utils/constant';
import { cacheResult } from '../utils/searchSlice';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestion, setShowSuggestion] = useState([]);
    const [hideSuggestion, setHideSuggestion] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const searchCache = useSelector((store) => store.searchSlice);

    // Setting initial theme to Light Mode
    document.documentElement.classList.toggle('dark', darkMode);

    // DarkMode toggling
    const toggleTheme = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setShowSuggestion(searchCache[searchQuery]);
            } else {
                getSuggestion();
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery, searchCache]);

    const getSuggestion = async () => {
        const data = await fetch(Youtube_Search_API + searchQuery);
        const json = await data.json();
        setShowSuggestion(json[1]);

        // Updating cache
        dispatch(cacheResult({
            [searchQuery]: json[1],
        }));
    };

    const toggleHandler = () => {
        dispatch(toggleMenu());
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchQuery}`);
    }

    return (
        <div className={`grid grid-flow-col items-center p-2 shadow-lg sticky top-0 ${darkMode ? 'bg-gray-700' : 'bg-white'} w-full`}>
            {/* Hamburger and Logo */}
            <div className='flex items-center col-span-2 md:col-span-1'>
                <img src={Hamburger}
                    className='h-7 cursor-pointer mx-2'
                    alt="Hamburger-Icon"
                    onClick={toggleHandler}
                />
                <a href="/">
                    <img src={YoutubeIcon} className='h-10 mx-4' alt="Youtube-Icon" />
                </a>
            </div>

            {/* Search */}
            <div className='col-span-8 flex justify-between md:w-2/3 max-sm:w-full max-sm:justify-center'>
                <div className='flex w-full md:w-2/3'>
                    <input type="text"
                        placeholder='Search'
                        className='border rounded-l-2xl sm:w-full border-gray-400 p-2'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setHideSuggestion(true)}
                        onBlur={() => setHideSuggestion(false)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    />
                    <button
                        className='p-2 border border-gray-400 rounded-r-2xl hover:bg-gray-100'
                        onClick={handleSearch}
                    >
                        🔍
                    </button>
                </div>

                {/* Suggestions */}
                {hideSuggestion && (
                    <div className='bg-white w-full md:w-2/3 my-2 rounded-lg shadow-xl border border-gray-200 absolute'>
                        <ul>
                            {showSuggestion.map((search) => (
                                <li key={search} className='p-1 px-2 m-2 hover:bg-gray-200 cursor-pointer'>🔍 {search}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* User Icon */}
            <div className='col-span-1 p-2'>
                <img src={userIcon} className='h-8 w-8 cursor-pointer' alt="User Icon" />
            </div>

            {/* Dark Mode Icon */}
            <div className='flex items-center col-span-1 mr-3'>
                <button onClick={toggleTheme}>
                    {darkMode ? <MdOutlineLightMode className="text-2xl text-white" /> : <MdOutlineDarkMode className="text-2xl" />}
                </button>
            </div>
        </div>
    )
}
export default NavBar;
