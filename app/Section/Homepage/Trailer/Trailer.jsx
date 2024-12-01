"use client";

import React from "react";
import { motion } from "framer-motion";

const trailers = [
  {
    link: "https://www.youtube.com/watch?v=73_1biulkYk&t=6s",
    imageUrl:
      "https://i.ytimg.com/vi/73_1biulkYk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDP4ZYrqfMZhteJJ5yKF0IFdvn5yA",
  },

  {
    link: "https://www.youtube.com/watch?v=LEjhY15eCx0&t=3s",
    imageUrl:
      "https://i.ytimg.com/vi/LEjhY15eCx0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe6-NEndJtQPj0tqzayBEUeiewFg",
  },

  {
    link: "https://www.youtube.com/watch?v=67vbA5ZJdKQ",
    imageUrl:
      "https://i.ytimg.com/vi/67vbA5ZJdKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSZCOz4Z1tpFzW_bxcQ7q1NngfYw",
  },
  {
    link: "https://www.youtube.com/watch?v=__2bjWbetsA&t=2s",
    imageUrl:
      "https://i.ytimg.com/vi/HyIyd9joTTc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLEskJn8FHB3F5XzTmLjO01Dv22Q",
  },
  {
    link: "https://www.youtube.com/watch?v=_OKAwz2MsJs",
    imageUrl:
      "https://i.ytimg.com/vi/_OKAwz2MsJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPs5r64tExa3a4Hy1gQs7gzcCW0Q",
  },
  {
    link: "https://www.youtube.com/watch?v=kg3Q63gzF6I",
    imageUrl:
      "https://i.ytimg.com/vi/kg3Q63gzF6I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiawDyHa_onUs8_7dkSFDBBHY_3A",
  },
  {
    link: "https://www.youtube.com/watch?v=Go8nTmfrQd8&t=1s",
    imageUrl:
      "https://i.ytimg.com/vi/Go8nTmfrQd8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbN6b8-tXgxduk5ccKWqe4m8nIUg",
  },
  {
    link: "https://www.youtube.com/watch?v=7l3hfD74X-4",
    imageUrl:
      "https://i.ytimg.com/vi/7l3hfD74X-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5Ob4614wKE4c4KZXooZtYFy4j1Q",
  },

  {
    link: "https://www.youtube.com/watch?v=8YjFbMbfXaQ&t=1s",
    imageUrl:
      "https://i.ytimg.com/vi/8YjFbMbfXaQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTypF1yTn0EcW37auHCj8DnvkgPA",
  },

  {
    link: "https://www.youtube.com/watch?v=aWzlQ2N6qqg&t=13s",
    imageUrl:
      "https://i.ytimg.com/vi/aWzlQ2N6qqg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqEVUzcUs517Q228R5STiEXhP7xQ",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TrailerGrid() {
  return (
    <div className="px-6 lg:px-12">
      <motion.h1 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white"
      >
        Trailer Film Terpopuler
      </motion.h1>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 group"
      >
        {trailers.map((trailer, index) => (
          <motion.div
            key={index}
            variants={item}
            className="TrailerContainer relative overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg group-hover:grayscale hover:!grayscale-0"
          >
            <a href={trailer.link} className="block" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={trailer.imageUrl}
                  alt={trailer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-300"></div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
