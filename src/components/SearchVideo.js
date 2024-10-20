import React from 'react';

const SearchVideoCard = ({ info }) => {
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 shadow-lg rounded-lg w-full sm:w-[20rem] md:w-[18rem] lg:w-[20rem] mx-auto'>
            <img
                className="h-42 w-full sm:w-[20rem] md:w-[18rem] lg:w-[20rem] rounded-xl"
                src={thumbnails.high.url} alt="thumbnail" 
            />
            <ul>
                <li className="text-lg md:text-xl font-sans font-semibold">
                    {title.split(" ").slice(0, 10).join(" ") + "..."}
                </li>
                <li className="text-md font-serif font-medium">{channelTitle}</li>
            </ul>
        </div>
    );
}

export default SearchVideoCard;
