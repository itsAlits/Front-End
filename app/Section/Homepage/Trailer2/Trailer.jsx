"use client";

import React from "react";
import { motion } from "framer-motion";

const trailers = [
  {
    link: "https://www.youtube.com/watch?v=TcMBFSGVi1c&t=6s",
    imageUrl:
      "https://i.ytimg.com/vi/6ZfuNTqbHE8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7aF2-JChFSlAyhXqgNER_68M1LQ",
  },
  {
    link: "https://www.youtube.com/watch?v=73_1biulkYk&t=6s",
    imageUrl:
      "https://i.ytimg.com/vi/73_1biulkYk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDP4ZYrqfMZhteJJ5yKF0IFdvn5yA",
  },

  {
    link: "https://www.youtube.com/watch?v=x7Krla_UxRg",
    imageUrl:
      "https://i.ytimg.com/vi/x7Krla_UxRg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA238GBuKHvNAdBaxPU9MMZ3dDiw",
  },
  {
    link: "https://www.youtube.com/watch?v=_Z3QKkl1WyM&t=2s",
    imageUrl:
      "https://i.ytimg.com/vi/_Z3QKkl1WyM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4AnPMoxt1Lcf0S4Kfd49I1eT8oQ",
  },
  {
    link: "https://www.youtube.com/watch?v=wS_qbDztgVY",
    imageUrl:
      "https://i.ytimg.com/vi/wS_qbDztgVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCph3ces32aYtMsrPgEqSDxz966Tw",
  },
  {
    link: "https://www.youtube.com/watch?v=ZlNFpri-Y40",
    imageUrl:
      "https://i.ytimg.com/vi/ZlNFpri-Y40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDX7gbAeYoXTG7L-j8kMmap4nky6w",
  },
  {
    link: "https://www.youtube.com/watch?v=Go8nTmfrQd8&t=1s",
    imageUrl:
      "https://i.ytimg.com/vi/Go8nTmfrQd8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbN6b8-tXgxduk5ccKWqe4m8nIUg",
  },
  {
    link: "https://www.youtube.com/watch?v=5VYb3B1ETlk",
    imageUrl:
      "https://i.ytimg.com/vi/5VYb3B1ETlk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3Z0iR3J9RcL4pvOf39zb98EdgFg",
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

export default function TrailerGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className=" px-6 lg:px-12"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-semibold text-white"
      >
        Marvel Universe
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 group">
        {trailers.map((trailer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="TrailerContainer relative overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg group-hover:grayscale hover:!grayscale-0"
          >
            <a href={trailer.link} className="block" target="_blank">
              <div className="relative">
                <img
                  src={trailer.imageUrl}
                  alt={trailer.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-300"></div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
