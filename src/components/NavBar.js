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


    // setting Initial theme to Light Mode
    document.documentElement.classList.toggle('dark', darkMode);

    // DarkMode toggling
    const toggleTheme = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }



    useEffect(() => {
        //API call for suggestion search
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setShowSuggestion(searchCache[searchQuery]);
            }
            else {
                getSuggestion();
            }
        }, 500);
        // console.log(searchQuery);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery, searchCache]);

    const getSuggestion = async () => {
        const data = await fetch(Youtube_Search_API + searchQuery)
        const json = await data.json();
        // console.log(json);
        setShowSuggestion(json[1]);

        //updating cache
        dispatch(cacheResult({
            [searchQuery]: json[1],
        })
        );
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
        // console.log("Navigate");
        navigate(`/search/${searchQuery}`);
    }


    return (

        <div className={`grid grid-flow-col w-full py-2 p-1 m-2 shadow-lg justify-items-stretch sticky top-0 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>

            {/* Hamburger and Logo */}
            <div className='flex col-span-2 md:col-span-1'>
                <img src={Hamburger}
                    className='h-7 cursor-pointer my-2 mx-2 dark:text-white'
                    alt="Hamburger-Icon"
                    onClick={() => {
                        toggleHandler()
                    }}
                />
                <a href="/">
                    <img src={YoutubeIcon}
                        className='h-12 mx-4'
                        alt="Youtube-Icon"
                    />
                </a>
            </div>

            {/* search */}
            {/* <div className='col-span-8 px-10 '> */}
            <div className='col-span-10 max-sm:flex max-sm:justify-end '>
                <input type="text"
                    placeholder='search'
                    className='border rounded-l-2xl w-1/2  border-gray-400 p-2'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setHideSuggestion(true)}
                    onBlur={() => setHideSuggestion(false)}

                    //checking which key is entered
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />

                {/* search button */}
                <button
                    className='p-2 border border-gray-400 rounded-r-2xl left-[26rem] hover:bg-gray-100'
                    onClick={(e) => {
                        handleSearch(e);
                    }}
                >
                    🔍
                </button>

                {/* suggestions */}
                {hideSuggestion && (
                    <div className='bg-white sm:w-[32rem] sm:px-6 my-2 rounded-lg shadow-xl border border-gray-200 fixed'>
                        <ul>
                            {showSuggestion.map((search => <li key={search} className='p-1 px-2 m-2 hover:bg-gray-200
                            cursor-pointer'>🔍  {search}</li>))}
                        </ul>
                    </div>
                )}
            </div>

            {/* userIcon */}
            <div className='col-span-1 p-2 m-1'>
                <img src={userIcon}
                    className='h-[2rem] w-[2rem] cursor-pointer'
                    alt="user-Icon"
                />
            </div>

            {/* DarkMode Icon */}
            <div className='flex items-center col-span-1 mr-3 pr-3'>
                {!darkMode ? (
                    <button className='cursor-pointer' onClick={() => toggleTheme()}>
                        <MdOutlineDarkMode className="text-2xl" />
                    </button>
                ) : (
                    <button className='cursor-pointer' onClick={() => toggleTheme()}>
                        <MdOutlineLightMode className="text-2xl text-white" />
                    </button>
                )}
            </div>
        </div>
    )
}
export default NavBar;


