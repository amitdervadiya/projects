import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    const menscategory = () => {
        navigate('/Mens');
    };
    const Women = () => {
        navigate('/Womens');
    };
    const Jewelery = () => {
        navigate('/Jewelery');
    };
    const Electronics = () => {
        navigate('/Electronics');
    };
    const Random = () => {
       navigate('/Random')
    }

    return (
        <div className="h-14 w-full bg-gray-800 flex justify-center items-center space-x-4">
            <button
                onClick={menscategory}
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Mens
            </button>
            <button
                onClick={Women}
                className="text-white bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-200"
            >
                Women
            </button>
            <button
                onClick={Jewelery}
                className="text-white bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-200"
            >
                Jewelery
            </button>
            <button
                onClick={Electronics}
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
                Electronics
            </button>
            <button
                onClick={Random}
<<<<<<< HEAD:amitdervadiya projects main json-pagination-my-project/src/Components/Navbar.jsx
                className="text-black bg-white px-4 py-2 rounded-lg transition duration-200"
=======
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
>>>>>>> 56b5206fc6cfcfe0818a0dace6cd0a5d1faa2ea9:json-pagination/my-project/src/Components/Navbar.jsx
            >
          Random
            </button>
        </div>
    );
}
