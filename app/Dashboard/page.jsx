"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Pastikan menggunakan jwt-decode
import Carousel from "../components/Corousel";
import { Sidebar } from "../components/Sidebar";
import CardFilm from "../components/CardFilm";

export default function Page() {
  const [film, setFilm] = useState([]);
  const [user, setUser] = useState(null); // State untuk menyimpan data user
  const [selectedFilm, setSelectedFilm] = useState(null); // State untuk menyimpan detail film yang dipilih
  const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan overlay

  // Function to truncate text to a maximum of 150 characters
  const truncateText = (text, maxLength = 150) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Add ellipsis if text is too long
    }
    return text;
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        alert("Anda Belum Login Harap Login Terlebih Dahulu");
        window.location.href = "/Login";
        return;
      }

      // Mendapatkan ID user dari token JWT
      let userId;
      try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.id; // Pastikan ID user berada di dalam token
      } catch (error) {
        console.error("Invalid token", error);
        window.location.href = "/";
        return;
      }

      // Ambil data user dari backend
      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Kirim token di header Authorization
            },
          }
        );
        setUser(userResponse.data); // Simpan data user yang diterima
      } catch (error) {
        console.error("Error fetching user", error);
      }

      // Ambil data film dari backend
      try {
        const filmResponse = await axios.get(
          `http://localhost:8000/api/iblix/movies`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Kirim token di header Authorization
            },
          }
        );
        setFilm(filmResponse.data); // Simpan data film yang diterima
        console.log(filmResponse.data);
      } catch (error) {
        console.error("Error fetching films", error);
      }
    };
    fetchData();
  }, []); // Dependency array kosong untuk fetch data sekali saat mount

  // Handler untuk membuka detail film
  const handleFilmClick = async (filmId, e) => {
    const token = localStorage.getItem("jwt");
    e.preventDefault(); // Prevent default behavior if using anchor tag
    try {
      const response = await axios.get(
        `http://localhost:8000/api/iblix/movies/${filmId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token di header Authorization
          },
        }
      );
      setSelectedFilm(response.data); // Simpan detail film yang dipilih
      setShowOverlay(true); // Tampilkan overlay
    } catch (error) {
      console.error("Error fetching film details", error);
    }
  };

  // Handler untuk menutup overlay
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedFilm(null); // Reset detail film
  };

  return (
    <div className="min-h-screen">
      <Sidebar
        active1={"flex items-center px-3 py-3 bg-primary transform rounded-lg"}
        activeIcon1={"#ffffff"}
        styleActive1={"mx-2 text-sm font-medium text-white"}
        active2={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon2={"currentColor"}
        styleActive2={"mx-2 text-sm font-medium"}
        active3={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon3={"currentColor"}
        styleActive3={"mx-2 text-sm font-medium"}
      />
      {/* topMenuDashboard */}
      <div className="marginkuy fixed z-[97] flex items-center bg-[#151515] justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        {/* search */}
        <div className="w-[22%] text-right">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="me-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-700"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full rounded-lg border p-3 ps-10 text-sm dark:border-gray-600 dark:bg-[#191919] dark:text-white dark:placeholder-gray-400"
              placeholder="Search..."
            />
          </div>
          {/* end search */}

          {/* <p className="text-[14px] font-bold text-white">
            {user ? user.username : "Username"}
          </p>
          <p className="text-[14px] text-white">
            {user ? user.email : "Email@gmail.com"}
          </p> */}
        </div>
      </div>
      <div id="mainCanvas" className="px-[40px] pb-[30px] pt-[100px]">
        <div className="my-5">
          <h2 className="text-[26px] font-bold text-white">
            <span className="font-black text-primary">Halo, </span>
            {user ? user.username : "Username"}
          </h2>
          <p className="text-[16px] text-white">
            Hari ini, Nonton Film Apa Ya...{" "}
          </p>
          {/* Corousel */}
          <Carousel />
          {/* End Corousel */}
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-extrabold text-white">Explore Now</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {film.map((film) => (
              <CardFilm
                key={film.id} // Asumsikan film.id ada untuk key unik
                desc={truncateText(film.overview)}
                links={film.image}
                vote={film.vote_average.toFixed(1)}
                namaFilm={film.title}
                onClick={(e) => handleFilmClick(film.id, e)} // Tambahkan handler klik
              />
            ))}
          </div>
        </div>

        {/* Overlay untuk menampilkan detail film */}
        {showOverlay && selectedFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515] bg-opacity-90">
            <div className="flex h-auto w-[50%] overflow-hidden rounded-lg bg-[#181818] text-white">
              <div className="h-auto w-auto">
                <img src={selectedFilm.image} className="h-full" alt="" />
              </div>
              <div className="relative w-full p-8">
                <div>
                  <h2 className="text-2xl font-bold">{selectedFilm.title}</h2>

                  <div className="mt-2 flex gap-2">
                    <p className="badge badge-primary font-medium text-white">
                      {selectedFilm.Genres[0].name}
                    </p>
                    <p className="badge badge-primary font-medium text-white">
                      {selectedFilm.Genres[1].name}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p>{selectedFilm.release_date}</p>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <p>{selectedFilm.duration}</p>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffc400"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div className="flex items-center gap-2">
                    <p>
                      {selectedFilm.vote_average
                        ? selectedFilm.vote_average.toFixed(1)
                        : 7.9}
                    </p>
                    <p className="text-[14px]">({selectedFilm.vote_count})</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <p>{selectedFilm.popularity}</p>
                </div>
                <p className="mb-1 mt-5 text-[18px] font-bold">Sinopsis :</p>
                <p>{selectedFilm.overview}</p>
                <a
                  href={selectedFilm.trailer}
                  target="_blank"
                  className="btn btn-primary mt-4 text-white"
                >
                  Watch Trailer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </a>
                <button
                  onClick={handleCloseOverlay}
                  className="absolute right-3 top-3 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
