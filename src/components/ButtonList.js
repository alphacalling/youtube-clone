import React from 'react';
import Button from './Button'

const ButtonList = () => {
    return (
        <div className='md:flex md:flex-wrap hidden lg:flex '>
            <Button name="All" />
            <Button name="Live" />
            <Button name="NEWS" />
            <Button name="Music" />
            <Button name="Dance" />
            <Button name="Science" />
            <Button name="Comedy" />
            <Button name="Bhakti" />
            <Button name="Cricket" />
            <Button name="Ramayan" />
            <Button name="Akshay Saini" />
        </div>
    )
}

export default ButtonList;