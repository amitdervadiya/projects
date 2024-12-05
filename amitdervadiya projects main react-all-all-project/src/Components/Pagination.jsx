import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apifetch } from '../Features/Slice';
import Navbar from './Navbar';

export default function Pagination() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [img, setImage] = useState();
    const [category, setCategory] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(apifetch());
    }, [dispatch]);


    const apiuse = useSelector((state) => state.apikey.data);
    const adddata = () => {

    }

    return (
        <div className="p-4">
            <Navbar />
            <br /><br />
            <div>
                <input type="text" onChange={(e) => setCategory(e.target.value)} />
                <br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
                <br />
                {/* <input type="text" onChange={(e)=>setImage()}/> */}
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <br />
                
                <button onClick={adddata}>
                    adddata
                </button>
            </div>
            {apiuse &&
                apiuse.map((e, i) => (
                    <div key={i} className="">

                        <p>{e.price}</p>
                        <p className="text-gray-800 font-medium">{e.category}</p>
                    </div>
                ))}
        </div>
    );
}
