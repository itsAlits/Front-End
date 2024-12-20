"use client";

import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div>
      <section
        id="Hero"
        className="heroBg flex min-h-screen w-full items-center px-6 lg:px-12"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className=" text-5xl text-center lg:text-start lg:text-7xl font-semibold"
          >
            The Wild Robot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 w-full  text-[14px]  text-center lg:text-start lg:w-[46%] font-light"
          >
            The Wild Robot berawal saat kapal kargo bernama Universal Dynamics
            yang kehilangan 6 robot serbaguna bernama Rozzum, akibat dihantam
            oleh topan. Semua robot rusak dari kecelakaan, kecuali satu robot
            Rozzum Unit 7134 yang dijuluki Roz.Roz terdampar di hutan, dan tidak
            sengaja diaktifkan oleh satwa liar di lingkungan tersebut. Kemudian
            Roz menawarkan jasa dan bantuan ke hewan-hewan di hutan, tetapi
            justru membuat mereka ketakutan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://www.youtube.com/watch?v=67vbA5ZJdKQ"
                target="_blank"
                className="btn btn-primary rounded-none mt-4 text-white"
              >
                Tonton Trailer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="btn ms-2 mt-4 rounded-none bg-transparent border-white hover:bg-[#151515] text-white"
              >
                Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
