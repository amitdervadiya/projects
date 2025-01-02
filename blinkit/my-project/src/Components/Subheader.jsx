import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BiSolidDownArrow } from 'react-icons/bi'

export default function Subheader() {
    return (
        <>
            <header className='w-[100%] flex justify-center items-center h-[47px]'>
                <div className="center flex justify-center items-center w-[80%] h-full ">


                    <div className='h-full flex justify-center items-center px-3 '>
                        <a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Vegetables & Fruits</a>
                    </div>
                    <div className='h-full flex justify-center items-center px-3 '>
                        <a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Dairy & Breakfast</a>
                    </div>
                    <div className='h-full flex justify-center items-center px-3 '><a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Munchies</a></div>
                    <div className='h-full flex justify-center items-center px-3 '><a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Cold Drinks & Juices</a></div>
                    <div className='h-full flex justify-center items-center px-3 '><a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Instant & Frozen Food</a></div>
                    <div className='h-full flex justify-center items-center px-3 '><a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Tea, Coffee & Health Drinks</a></div>
                    <div className='h-full flex justify-center items-center px-3 '><a class="cat-0-list__item--name" href="" className='text-base text-[#666666]'>Bakery & Biscuits</a></div>
                    <div className='h-full flex justify-center items-center px-3 '><span class="cat-0-list__item--name cat-0-list__more-btn">More</span>
                        <span>
                          
                        </span></div>
                </div>
            </header>
        </>
    )
}
