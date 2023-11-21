import React from "react";

const Button = ({ name }) => {
    return (
        <div>
            <button
                className='p-1 px-4  m-2 border bg-gray-200 rounded-lg
             hover:bg-gray-700 hover:text-white'>{name}</button>
        </div>
    )
}
export default Button;