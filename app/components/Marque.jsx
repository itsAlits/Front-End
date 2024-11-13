"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  const dataKiri = [{}];

  const dataKanan = [{}];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-y-0 z-40 left-0 w-[30%] bg-gradient-to-r from-[#151515] via-[#151515a1] to-transparent"></div>
      <div className="absolute inset-y-0 z-40 right-0 w-[30%] bg-gradient-to-l from-[#151515] via-[#151515a1] to-transparent"></div>

      <div className="relative z-10">
        <div>
          <Marquee>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Website ini mudah digunakan, dengan tampilan yang simpel dan
                navigasi yang jelas.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Desain modern dan responsif, nyaman digunakan di ponsel maupun
                komputer.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Fitur unik ini membantu menemukan film yang cocok sesuai mood,
                meskipun kadang kurang akurat.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Filter genre dan rating mempermudah pencarian film sesuai
                selera.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Menawarkan banyak pilihan film dari berbagai genre dan tahun
                rilis.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Website ini ringan dan memuat halaman dengan cepat.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Desain yang minimalis membuat pengalaman lebih fokus ke film.
              </p>
            </div>
          </Marquee>
        </div>
        <div className="mt-4">
          <Marquee direction={"right"}>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Selalu menampilkan film-film terbaru, cocok untuk pencinta film
                yang ingin up-to-date.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Fitur ini membantu menemukan film berkualitas dengan rating
                tinggi dari pengguna lain.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Desain yang simpel membuat situs ini mudah dipahami dan bebas
                dari gangguan.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Tersedia mode gelap yang nyaman untuk mata, terutama saat
                browsing malam hari.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Memberikan informasi rating dari berbagai sumber, seperti IMDb
                dan Rotten Tomatoes.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Setiap film dilengkapi dengan deskripsi, pemain, dan ulasan,
                jadi tidak perlu cari info tambahan.
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex justify-center items-center text-center py-2">
              <p className="text-sm">
                Navigasi intuitif membuat pengguna tidak kebingungan saat
                mencari film
              </p>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
