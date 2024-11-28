import React from 'react';
import { motion } from 'framer-motion';

export default function Stair() {
    const star = {
        initial: { top: '0%' },
        animate: { top: '100%' },
        exit: { top: '0%' },
    };

    const reverseIndex = (index) => {
        const totalSteps = 6;
        return totalSteps - index - 1;
    };

    return (
        <div className="relative w-full h-screen">
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    className="bg-white absolute h-full w-full"
                    variants={star}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                />
            ))}
        </div>
    );
}
