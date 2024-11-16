"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import CardFilm from "../components/CardFilm";
import { Sidebar } from "../components/Sidebar";

export default function MovieRecommendationPage() {
  const [user, setUser] = useState(null);
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const truncateText = (text, maxLength = 150) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        alert("Anda Belum Login. Harap Login Terlebih Dahulu.");
        window.location.href = "/Auth/Login";
        return;
      }

      let userId;
      try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.id;
      } catch (error) {
        console.error("Token tidak valid", error);
        window.location.href = "/";
        return;
      }

      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(userResponse.data);
      } catch (error) {
        console.error("Gagal mengambil data pengguna", error);
      }

      try {
        const sparqlQuery = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX d: <http://www.semanticweb.org/alitwira/ontologies/2024/9/untitled-ontology-3#>
          
          SELECT * 
          WHERE {
            ?film rdf:type d:Film.
            ?film d:Judul ?judul.
            ?film d:Image_Url ?imgUrl.
            ?film d:Usia ?usia.
            ?film d:Nama_Aktor ?aktor.
            ?film d:Nama_Sutradara ?sutradara.
            ?film d:Sinopsis ?sinopsis.
            ?film d:Rating ?rating.
            ?film d:Durasi ?durasi.
            ?film d:Genre ?genre.
            ?film d:Tahun_Rilis ?tahun.
            ?film d:Trailer ?trailer.
          }
          ORDER BY DESC(?rating)
        `;

        const filmResponse = await axios.post(
          `http://localhost:3030/film/sparql`,
          `query=${encodeURIComponent(sparqlQuery)}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const results = filmResponse.data.results.bindings.map(
          (binding, index) => ({
            id: index,
            title: binding.judul.value,
            imageUrl: binding.imgUrl.value,
            overview: binding.sinopsis.value,
            rating: binding.rating.value,
            aktor: binding.aktor.value,
            tahun: binding.tahun.value,
            genre: binding.genre.value,
            durasi: binding.durasi.value,
            sutradara: binding.sutradara.value,
            usia: parseInt(binding.usia.value),
            trailer: binding.trailer.value,
          })
        );

        setFilms(results);
        setFilteredFilms(results);
      } catch (error) {
        console.error("Gagal mengambil data film", error);
      }
    };

    fetchData();
  }, []);

  // Update the search function to check both title and actor fields
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = films.filter(
      (film) =>
        film.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        film.aktor.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredFilms(filtered);
  };

  return (
    <div className="min-h-screen">
      <Sidebar
        active3={
          "flex items-center px-3 py-3 bg-primary transform rounded-none"
        }
        activeIcon3={"#ffffff"}
        styleActive3={"mx-2 text-sm font-medium text-white"}
        active2={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon2={"currentColor"}
        styleActive2={"mx-2 text-sm font-medium"}
        active1={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon1={"currentColor"}
        styleActive1={"mx-2 text-sm font-medium"}
        active4={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon4={"currentColor"}
        styleActive4={"mx-2 text-sm font-medium"}
      />

      {/* Top Menu Dashboard */}
      <div className="marginkuy fixed z-[97] flex items-center bg-[#151515] justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <div className="text-right">
          <h1 className="text-[18px]">
            <span className=" text-white">Hi, </span>
            {user ? user.username : "Username"}
          </h1>
        </div>
      </div>
      <div id="mainCanvas" className="px-[24px] pb-[30px] pt-[80px]">
        <div className="mt-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Cari film berdasarkan judul atau aktor"
            className="input focus:border-none rounded-none focus:outline-none w-full mx-auto block mb-6 text-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4">
          {filteredFilms
            .filter((film) => user && user.umur >= film.usia)
            .map((film) => (
              <CardFilm
                key={film.id}
                links={film.imageUrl} // Image URL for the card image
                desc={truncateText(film.overview)} // Description for overlay
                namaFilm={film.title} // Title of the film
                vote={film.rating} // Rating of the film
                onClick={() => setSelectedFilm(film)} // Optional: Click handler for additional actions
              />
            ))}
        </div>

        {selectedFilm && (
          <div
            className="modal modal-open"
            onClick={() => setSelectedFilm(null)}
          >
            <div className=" w-full flex justify-center">
              <div className="flex w-1/2 bg-[#151515] relative">
                <button
                  className=" absolute right-8 top-8"
                  onClick={() => setSelectedFilm(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#fff"
                    class="size-8"
                  >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
                <img
                  className="object-cover w-full  h-96 md:h-auto md:w-96 "
                  src={selectedFilm.imageUrl}
                  alt={selectedFilm.title}
                />
                <div className="flex flex-col px-4 pt-2 pb-10">
                  <h5 className="mt-4 w-[80%] text-2xl font-bold text-white">
                    {selectedFilm.title}
                  </h5>
                  <p className="mt-auto font-normal text-white/80">
                    {selectedFilm.overview}
                  </p>
                  <div className=" space-y-2 mt-auto">
                    <p className="text-md text-white/80">
                      Tahun : {selectedFilm.tahun}
                    </p>
                    <p className="text-md text-white/80">
                      Genre : {selectedFilm.genre}
                    </p>
                    <p className="text-md text-white/80">
                      Aktor : {selectedFilm.aktor}
                    </p>
                    <p className="text-md text-white/80">
                      Sutradara : {selectedFilm.sutradara}
                    </p>
                    <p className="text-md text-white/80">
                      Rating : {selectedFilm.rating}
                    </p>
                    <p className="text-md text-white/80">
                      Durasi : {selectedFilm.durasi}
                    </p>
                    <p className="text-md text-white/80">
                      Usia :{" "}
                      {selectedFilm.usia === 0
                        ? "Semua Umur"
                        : selectedFilm.usia}
                    </p>
                  </div>
                  <a
                    href={selectedFilm.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full rounded-none mt-auto"
                  >
                    Tonton Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
