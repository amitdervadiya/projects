import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Stair from '../Components/Stair'

export default function Stairtrnsition() {
    return (
        <>
            <AnimatePresence mode='wait'>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                    <Stair></Stair>
                </div>
            </AnimatePresence>
        </>
    )
}
