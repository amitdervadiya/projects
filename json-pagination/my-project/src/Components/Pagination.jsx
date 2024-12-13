import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, apifetch, deletedata, editdata } from '../Features/Slice';
import Navbar from './Navbar';

export default function Pagination() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(apifetch());
    }, [dispatch]);

    useEffect(() => {
        dispatch(apifetch());
    })

    const apiuse = useSelector((state) => state.apikey.data);

    const add = () => {
        if (editId) {
            dispatch(editdata({ id: editId, category, price, title }));
            setEditId(null);
        }
        
         else {
            dispatch(adddata({ id: String(Date.now()), price, category, title }));
        }
      
        setCategory('');
        setPrice('');
        setTitle('');
        setEditId(null);
    };

    const edit = (e) => {
        setCategory(e.category);
        setPrice(e.price);
        setTitle(e.title);
        setEditId(e.id); // Set editId to the current item's id for editing
    };

    return (
        <>
            <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
                <Navbar />

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Add or Edit Product</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        onClick={add}
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700 transition duration-200"
                    >
                        {editId ? 'Update Data' : 'Add Data'}
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {apiuse &&
                            apiuse.map((e, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded shadow-md p-4 hover:shadow-lg transition duration-300"
                                >
                                    <img
                                        src={e.image ? e.image : 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='}
                                        alt={e.title}
                                        className="h-48 w-full object-contain mb-4"
                                    />
                                    <h2 className="text-lg font-bold mb-2">{e.title}</h2>
                                    <p className="text-gray-600 mb-1">{e.category}</p>
                                    <p className="text-gray-600 mb-4">${e.price}</p>
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => dispatch(deletedata(e.id))}
                                            className="bg-red-500 text-white py-1 px-4 rounded shadow hover:bg-red-600 transition duration-200"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => edit(e)}
                                            className="bg-yellow-500 text-white py-1 px-4 rounded shadow hover:bg-yellow-600 transition duration-200"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
