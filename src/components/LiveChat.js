import React from 'react';
import userIcon from '../assets/user-icon.png';

const LiveChat = ({ name, message }) => {
    return (
        <div className='flex'>
            <img
                className='h-6 p-1'
                src={userIcon} alt="user" />
            <p className='mr-2 font-semibold'>{name}</p>
            <p>{message}</p>
        </div>
    )
}

export default LiveChat;