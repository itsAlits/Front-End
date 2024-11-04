"use client";

// Libraries
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Carousel from "../components/Corousel";
import { Sidebar } from "../components/Sidebar";
import CardFilm from "../components/CardFilm";
import { jwtDecode } from "jwt-decode";

export default function Page() {
  const [film, setFilm] = useState([]);
  const [user, setUser] = useState(null);

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
      } catch (error) {
        console.error("Invalid token", error);
        window.location.href = "/";
        return;
      }

      // Fetch user data
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
        console.error("Error fetching user", error);
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
            ?film d:Trailer ?trailer.
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
            trailer: binding.trailer.value, // Placeholder if not available
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

      {/* Top Menu Dashboard */}
      <div className="marginkuy fixed z-[97] flex items-center bg-[#151515] justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <div className="w-[22%] text-right">
          <div className="relative hidden md:block">
            <input
              type="text"
              id="search-navbar"
              className="block w-full rounded-lg border p-3 ps-10 text-sm dark:border-gray-600 dark:bg-[#191919] dark:text-white dark:placeholder-gray-400"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <div id="mainCanvas" className="px-[40px] pb-[30px] pt-[100px]">
        <div className="my-5">
          <h2 className="text-[26px] font-bold text-white">
            <span className="font-black text-primary">Halo, </span>
            {user ? user.username : "Username"}
          </h2>
          <p className="text-[16px] text-white">
            Hari ini, Nonton Film Apa Ya...
          </p>
          <Carousel />
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-extrabold text-white">Explore Now</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {film.map((film) => (
              <CardFilm
                key={film.id}
                desc={truncateText(film.overview)}
                links={film.imageUrl}
                vote={film.rating}
                namaFilm={film.title}
                trailer={film.trailer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
