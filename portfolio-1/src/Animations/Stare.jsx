import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Stair from "../Components/Stair";
import Hero from "../Components/Hero";

export default function StairAnimation() {
    const [showStair, setShowStair] = useState(true); // Show the Stair animation
    const [showHero, setShowHero] = useState(false); // Transition to Hero after Stair animation

    useEffect(() => {
        const stairTimer = setTimeout(() => {
            setShowStair(false); // Hide the Stair animation
            setShowHero(true); // Show the Hero component
        }, 1000); // Duration should match the Stair animation timing

        return () => clearTimeout(stairTimer);
    }, []);

    return (
        <AnimatePresence>
            {/* Stair Animation */}
            {showStair && (
                <motion.div
                    key="stair"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-full h-screen"
                >
                    <Stair />
                </motion.div>
            )}

            {/* Hero Component (visible only after Stair animation ends) */}
            {showHero && (
                <motion.div
                    key="hero"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Hero />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
