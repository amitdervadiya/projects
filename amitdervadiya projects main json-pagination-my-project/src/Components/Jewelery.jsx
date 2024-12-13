import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apifetch } from '../Features/Slice';

export default function Jewelery() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(apifetch());
    }, [dispatch]);

    const jeweleryData = useSelector((state) => state.apikey.data);

    const home = () => {
        navigate('/');
    };

    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-bold mb-4">Jewelery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {jeweleryData &&
                    jeweleryData.map((e, i) =>
                        e.category === "jewelery" ? (
                          <div
                          key={i}
                          className="bg-white rounded shadow-md p-4 hover:shadow-lg transition duration-300"
                      >
                          <img
                              src={e.image}
                              alt={e.title}
                              className="h-48 w-full object-contain mb-4"
                          />
                          <h2 className="text-lg font-bold mb-2">{e.title}</h2>
                          <p className="text-gray-600 mb-1">{e.category}</p>
                          <p className="text-gray-600 mb-4">${e.price}</p>
                      </div>
                  ) : null
              )}
      </div>
            <button
                onClick={home}
                className="h-9 w-[120px] bg-black text-white"
            >
                Back
            </button>
        </div>
    );
}
