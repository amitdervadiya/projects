import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const menscategory = () => {
        navigate('/Mens')
    }
    const Women = () => {
        navigate('/Womens')
    }
    const Jewelery = () => {
        navigate('/Jewelery')
    }
    const Electronics = () => {
        navigate('/Electronics')
    }
    return (
        <div className='h-7 w-full'>
            <button onClick={menscategory}>Mens</button>
            <button onClick={Women}>Women</button>
            <button onClick={Jewelery}>Jewelery</button>
            <button onClick={Electronics}>Electronics</button>
        </div>
    )
}
