"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + Math.random() * 10; // Increase random increment for faster progress
        } else {
          clearInterval(timer);
          setIsLoadingComplete(true); // Set loading to complete once progress reaches 100
          return 100;
        }
      });
    }, 100); // Faster update interval (100ms)

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoadingComplete ? 0 : 1 }} // Fade out when loading completes
      transition={{ duration: 1.5 }} // Fade-out duration of 1 second
    >
      <div className="w-1/2 max-w-lg p-4 bg-white ">
        <motion.div
          className="h-2 bg-gray-300 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }} // Faster spring transition
        />
        <div className="mt-2 text-center text-gray-700 font-semibold">
          {Math.round(progress)}%
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
