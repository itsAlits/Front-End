"use client";

// Libraries
import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Components
import Carousel from "../components/Corousel";
import { Sidebar } from "../components/Sidebar";
import CardFilm from "../components/CardFilm";

// API Service
const API_BASE_URL = "http://localhost:8000/api";
const SPARQL_ENDPOINT = "http://localhost:3030/film/sparql";

const fetchUserData = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user", error);
    throw error;
  }
};

const fetchFilmData = async () => {
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
      ?film d:Usia ?usia.
      ?film d:Sinopsis ?sinopsis.
      ?film d:Rating ?rating.
      ?film d:Trailer ?trailer.
    }
    ORDER BY DESC(?rating)
  `;

  try {
    const response = await axios.post(
      SPARQL_ENDPOINT,
      `query=${encodeURIComponent(sparqlQuery)}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.results.bindings.map((binding, index) => ({
      id: index,
      title: binding.judul.value,
      imageUrl: binding.imgUrl.value,
      overview: binding.sinopsis.value,
      rating: binding.rating.value,
      usia: parseInt(binding.usia.value),
      trailer: binding.trailer.value,
    }));
  } catch (error) {
    console.error("Error fetching films", error);
    throw error;
  }
};

export default function Page() {
  const [film, setFilm] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 32;

  // Memoized truncate function
  const truncateText = useCallback((text, maxLength = 150) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }, []);

  // Memoized filtered films
  const filteredFilms = useMemo(() => {
    if (!user || !film.length) return [];
    return film.filter((film) => user.umur >= film.usia);
  }, [film, user]);

  // Memoized paginated films
  const paginatedFilms = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredFilms.slice(startIndex, endIndex);
  }, [filteredFilms, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredFilms.length / itemsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("jwt");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const decodedToken = jwtDecode(token);
        const userData = await fetchUserData(decodedToken.id, token);
        const filmData = await fetchFilmData();

        setUser(userData);
        setFilm(filmData);
      } catch (error) {
        setError(error.message);
        if (error.message === "No authentication token found") {
          window.location.href = "/Auth/Login";
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-white text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen">
      <Sidebar
        active1="flex items-center px-3 py-3 bg-primary transform rounded-none"
        activeIcon1="#ffffff"
        styleActive1="mx-2 text-sm font-medium text-white"
        active2="flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        activeIcon2="currentColor"
        styleActive2="mx-2 text-sm font-medium"
        active3="flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        activeIcon3="currentColor"
        styleActive3="mx-2 text-sm font-medium"
        active4="flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        activeIcon4="currentColor"
        styleActive4="mx-2 text-sm font-medium"
      />

      <div className="marginkuy fixed z-[97] flex items-center bg-[#151515] justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <div className="text-right">
          <h1 className="text-[18px]">
            <span className="text-white">Hi, </span>
            {user ? user.username : "Loading..."}
          </h1>
        </div>
      </div>

      <div id="mainCanvas" className="px-[24px] pb-[30px] pt-[80px]">
        <div className="my-8">
          <Carousel />
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-extrabold text-white">Explore Now</h1>
          {isLoading ? (
            <div className="text-white text-center mt-10">Loading...</div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                {paginatedFilms.map((film) => (
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
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-end items-center space-x-2 mt-14">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${
                      currentPage === 1
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/80'
                    } text-white`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex space-x-1">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded ${
                          currentPage === index + 1
                            ? 'bg-primary text-white'
                            : 'bg-gray-700 text-white hover:bg-primary/80'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${
                      currentPage === totalPages
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/80'
                    } text-white`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
