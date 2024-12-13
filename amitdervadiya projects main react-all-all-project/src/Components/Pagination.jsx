import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, apifetch, deletedata, editdata } from '../Features/Slice';
import Navbar from './Navbar';

export default function Pagination() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const [editdataproduct, setEditdataProduct] = useState()

    useEffect(() => {
        dispatch(apifetch());
    }, [dispatch]);

    useEffect(() => {
        dispatch(apifetch());
    })
    const apiuse = useSelector((state) => state.apikey.data);

    return (
        <div className="p-4">
            <Navbar />
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full mb-2"
                    value={title}
                />
                <button
                    onClick={() => editdataproduct ? dispatch(editdata({ editdataproduct, title, price, category })) : dispatch(adddata({ title, price, category }))}
                    className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 `}>
                    {editdataproduct ? "Update Data" : "Add Data"}
                </button>
            </div>

            <div className="mt-4">
                {apiuse && apiuse.map((e, i) => (
                    <div key={i} className="border p-4 rounded mb-4 shadow">
                        <p className="text-gray-700 font-medium">Price: {e.price}</p>
                        <p className="text-gray-600">Category: {e.category}</p>
                        <p className="text-gray-800 font-semibold">Title: {e.title}</p>
                        <div className="mt-2">
                            <button
                                onClick={() => dispatch(deletedata(e.id))}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mr-2">
                                Delete
                            </button>
                            <button
                                onClick={() => {
                                    setEditdataProduct(e.id)
                                    setCategory(e.category)
                                    setPrice(e.price)
                                    setTitle(e.title)
                                }}
                                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
