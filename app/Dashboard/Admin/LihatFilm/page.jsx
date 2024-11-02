"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarAdmin } from "@/app/components/SidebarAdmin";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/iblix/movies",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMovies(response.data);
        toast.success("Semua Film Berhasil Dimuat!");
        console.log(response.data);
      } catch (error) {
        toast.error("Gagal mengambil data film");
        console.error(error);
      }
    };

    if (token) {
      fetchMovies();
    }
  }, [token]);

  return (
    <div className="min-h-screen">
      <SidebarAdmin
        active1={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon1={"currentColor"}
        styleActive1={"mx-2 text-sm font-medium"}
        active2={"flex items-center px-3 py-3 bg-primary transform rounded-lg"}
        activeIcon2={"#ffffff"}
        styleActive2={"mx-2 text-sm font-medium text-white"}
        active3={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon3={"currentColor"}
        styleActive3={"mx-2 text-sm font-medium"}
      />
      {/* topMenuDashboard */}
      <div className="marginkuy fixed z-[97] flex items-center justify-between border-b bg-[#151515] border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <h2 className="text-2xl font-bold text-white">Daftar Film</h2>
      </div>

      {/* Main content */}
      <div
        id="mainCanvas"
        className="px-[40px] pb-[30px] pt-[100px] text-white"
      >
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="border-none text-center text-white">
                <th>Image</th>
                <th>Title</th>
                <th>Release Date</th>
                <th>Vote Average</th>
                <th>Vote Count</th>
                <th>Popularity</th>
                <th>Duration</th>
                <th>Language</th>
                <th>Adult</th>
                <th>Trailer</th>
              </tr>
            </thead>
            <tbody>
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <tr className="border-none text-center" key={movie.id}>
                    <td className="flex justify-center">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="h-16 w-16 rounded object-cover"
                      />
                    </td>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.vote_average.toFixed(1)}</td>
                    <td>{movie.vote_count}</td>
                    <td>{movie.popularity}</td>
                    <td>{movie.duration}</td>
                    <td>{movie.original_language}</td>
                    <td>{movie.adult ? "Yes" : "No"}</td>
                    <td>
                      <a
                        href={movie.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm font-medium text-white"
                      >
                        Watch Trailer
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center">
                    No movies available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
