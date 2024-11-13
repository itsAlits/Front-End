"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarAdmin } from "@/app/components/SidebarAdmin";
import { jwtDecode } from "jwt-decode"; // Ensure to import jwtDecode if it's not imported yet

export default function Page() {
  const [film, setFilm] = useState([]); // Store fetched films
  const [user, setUser] = useState(null); // Store user data

  // Function to truncate text to a maximum of 150 characters
  const truncateText = (text, maxLength = 150) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        alert("Anda Belum Login Harap Login Terlebih Dahulu");
        window.location.href = "/Auth/Login";
        return;
      }

      // Decode JWT token to get user ID
      let userId;
      try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.id;
        setUser(decodedToken); // Store user data from token if needed
      } catch (error) {
        console.error("Invalid token", error);
        window.location.href = "/";
        return;
      }

      // Fetch film data from SPARQL endpoint
      try {
        const sparqlQuery = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX d: <http://www.semanticweb.org/alitwira/ontologies/2024/9/untitled-ontology-3#>

          SELECT * 
          WHERE {
             ?film rdf:type d:Film.
            ?film d:Judul ?judul.
            ?film d:Image_Url ?imgUrl.
            ?film d:Sinopsis ?sinopsis.
            ?film d:Rating ?rating.            
            ?film d:Genre ?genre.
            ?film d:Durasi ?durasi.
            ?film d:Nama_Aktor ?actor.
            ?film d:Usia ?usia.
            ?film d:Nama_Sutradara ?sutradara.
            ?film d:Tahun_Rilis ?TahunRilis.
          }
          ORDER BY DESC(?rating)
        `;

        // Send the query as form-urlencoded data
        const filmResponse = await axios.post(
          `http://localhost:3030/film/sparql`,
          `query=${encodeURIComponent(sparqlQuery)}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        // Map SPARQL results to expected film structure
        const results = filmResponse.data.results.bindings.map(
          (binding, index) => ({
            id: index, // Using index as a temporary unique key
            title: binding.judul.value,
            imageUrl: binding.imgUrl.value,
            overview: binding.sinopsis.value, // Placeholder if not available
            rating: binding.rating.value, // Placeholder if not available
            genre: binding.genre.value, // Placeholder if not available
            actor: binding.actor.value, // Placeholder if not available
            durasi: binding.durasi.value, // Placeholder if not available
            director: binding.sutradara.value, // Placeholder if not available
            releaseYear: parseInt(binding.TahunRilis.value), // Placeholder if not available
            usia: parseInt(binding.usia.value), // Placeholder if not available
            trailer: binding.trailer?.value || "#", // Optional field
          })
        );

        setFilm(results);
        console.log(results);
      } catch (error) {
        console.error("Error fetching films", error);
      }
    };

    fetchData();
  }, []);

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
      </div>

      {/* Main content */}
      <div
        id="mainCanvas"
        className="px-[40px] pb-[30px] pt-[100px] text-white"
      >
        <div className="overflow-x-auto">
          <table className="table w-full text-white">
            {/* head */}
            <thead>
              <tr className="border-none text-white">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2 flex justify-center">Poster</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Overview</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Genre</th>
                <th className="px-4 py-2">Actor</th>
                <th className="px-4 py-2">Director</th>
                <th className="px-4 py-2">Release Year</th>
                <th className="px-4 py-2">Durasi Film</th>
                <th className="px-4 py-2">Usia</th>
                <th className="px-4 py-2">Trailer</th>
              </tr>
            </thead>
            <tbody>
              {film.length > 0 ? (
                film.map((movie, index) => (
                  <tr className="border-none text-start" key={movie.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className="w-96 h-36 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{movie.title}</td>
                    <td className="px-4 py-2">
                      {truncateText(movie.overview)}
                    </td>
                    <td className="px-4 py-2">{movie.rating}</td>
                    <td className="px-4 py-2">{movie.genre}</td>
                    <td className="px-4 py-2">{movie.actor}</td>
                    <td className="px-4 py-2">{movie.director}</td>
                    <td className="px-4 py-2">{movie.releaseYear}</td>
                    <td className="px-4 py-2">{movie.durasi}</td>
                    <td className="px-4 py-2">{movie.usia}</td>
                    <td className="px-4 py-2">
                      <a
                        href={movie.trailer}
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Trailer
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center px-4 py-2">
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
