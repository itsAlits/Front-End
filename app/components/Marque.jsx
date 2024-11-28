"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ReviewCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className="border ms-4 h-44 border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2"
  >
    <p className="text-sm">{children}</p>
  </motion.div>
);

export default function Marque() {
  const dataKiri = [{}];
  const dataKanan = [{}];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-y-0 z-40 left-0 w-[30%] bg-gradient-to-r from-[#151515] via-[#151515a1] to-transparent"></div>
      <div className="absolute inset-y-0 z-40 right-0 w-[30%] bg-gradient-to-l from-[#151515] via-[#151515a1] to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div>
          <Marquee>
            <ReviewCard>
              Website ini mudah digunakan, dengan tampilan yang simpel dan
              navigasi yang jelas.
            </ReviewCard>
            <ReviewCard>
              Desain modern dan responsif, nyaman digunakan di ponsel maupun
              komputer.
            </ReviewCard>
            <ReviewCard>
              Fitur unik ini membantu menemukan film yang cocok sesuai mood,
              meskipun kadang kurang akurat.
            </ReviewCard>
            <ReviewCard>
              Filter genre dan rating mempermudah pencarian film sesuai
              selera.
            </ReviewCard>
            <ReviewCard>
              Menawarkan banyak pilihan film dari berbagai genre dan tahun
              rilis.
            </ReviewCard>
            <ReviewCard>
              Website ini ringan dan memuat halaman dengan cepat.
            </ReviewCard>
            <ReviewCard>
              Desain yang minimalis membuat pengalaman lebih fokus ke film.
            </ReviewCard>
          </Marquee>
        </div>
        <div className="mt-4">
          <Marquee direction={"right"}>
            <ReviewCard>
              Selalu menampilkan film-film terbaru, cocok untuk pencinta film
              yang ingin up-to-date.
            </ReviewCard>
            <ReviewCard>
              Fitur ini membantu menemukan film berkualitas dengan rating
              tinggi dari pengguna lain.
            </ReviewCard>
            <ReviewCard>
              Desain yang simpel membuat situs ini mudah dipahami dan bebas
              dari gangguan.
            </ReviewCard>
            <ReviewCard>
              Tersedia mode gelap yang nyaman untuk mata, terutama saat
              browsing malam hari.
            </ReviewCard>
            <ReviewCard>
              Memberikan informasi rating dari berbagai sumber, seperti IMDb
              dan Rotten Tomatoes.
            </ReviewCard>
            <ReviewCard>
              Setiap film dilengkapi dengan deskripsi, pemain, dan ulasan,
              jadi tidak perlu cari info tambahan.
            </ReviewCard>
            <ReviewCard>
              Navigasi intuitif membuat pengguna tidak kebingungan saat
              mencari film
            </ReviewCard>
          </Marquee>
        </div>
      </motion.div>
    </motion.div>
  );
}
