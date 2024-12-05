import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';
import { apifetch } from '../Features/Slice';

export default function Mens() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(apifetch())
    }, [dispatch])
    const mendata = useSelector((state) => state.apikey.data)
    const home = ()=>{
        navigate('/')
    }
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8 flex  flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-bold mb-4">Men's Clothing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {mendata && (
                    mendata.map((e, i) => (
                        e.category === "men's clothing" && (
                            <div key={i} className="bg-white rounded shadow-md p-4 hover:shadow-lg transition duration-300">
                                <img src={e.image} alt="" className='h-48 w-full object-contain' />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold">{e.title}</h2>
                                    <p className="text-gray-600">{e.category}</p>
                                    <p className="text-gray-600">{e.price}</p>
                                    <p className="text-gray-600">Rating: {e.rating.rate} ({e.rating.count} reviews)</p>
                                </div>
                            </div>
                        )
                    ))
                )}
            </div>
                  <button onClick={home} className='h-9 w-[120px] bg-black text-white '> 
                    back
                  </button>
        </div>
    )
}