import React from 'react';

const SearchVideoCard = ({ info }) => {
    const { snippet } = info;
    // console.log(info);
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className=' p-2 m-2 shadow-lg rounded-lg sm:w-[20rem] ml-5'>
            <img
                className="h-42 w-[20rem] rounded-xl"
                src={thumbnails.high.url} alt="thumbnail" />
            <ul>
                <li className="text-xl font-sans font-bold">{title.split(" ").slice(0, 10).join(" ") + "..."}</li>
                <li className="text-md font-serif font-semibold">{channelTitle}</li>

            </ul>

        </div>
    )
}

export default SearchVideoCard;