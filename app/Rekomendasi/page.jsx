"use client";

// Libraries
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import { Sidebar } from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import CardFilm from "../components/CardFilm";

// Utilities
import { calculateSawScores } from "../Helper/Saw/SawCalc";

export default function Page() {
  const [film, setFilm] = useState([]);
  const [recommendations, setRecommendations] = useState([]); // To hold generated recommendations
  const [user, setUser] = useState(null);
  const [uniqueDirectors, setUniqueDirectors] = useState([]);
  const [uniqueActors, setUniqueActors] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [hasGeneratedRecommendations, setHasGeneratedRecommendations] =
    useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState({
    year: "",
    genre: "",
    director: "",
    actor: "",
  });

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
            ?film d:Genre ?genre.
            ?film d:Nama_Aktor ?actor.
            ?film d:Nama_Sutradara ?sutradara.
            ?film d:Trailer ?trailer.
            ?film d:Usia ?usia.
            ?film d:Durasi ?durasi.
            ?film d:Tahun_Rilis ?TahunRilis.
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

        const results = filmResponse.data.results.bindings
          .map((item) => ({
            title: item.judul.value,
            // film: item.film.value,
            genre: item.genre.value,
            imgUrl: item.imgUrl.value,
            actor: item.actor.value,
            director: item.sutradara.value,
            sinopsis: item.sinopsis.value,
            trailer: item.trailer.value,
            durasi: item.durasi.value,
            releaseYear: parseInt(item.TahunRilis.value),
            usia: parseInt(item.usia.value),
            rating: parseFloat(item.rating.value),
          }))
          .filter((film) => !user || film.usia <= user.age); // Filter based on user's age
        console.log(results);
        setFilm(results);

        // Extract unique
        const years = [...new Set(results.map((f) => f.releaseYear))].sort(
          (a, b) => b - a
        ); // Sort in descending order
        setUniqueYears(years);
        const directors = [...new Set(results.map((f) => f.director))].sort();
        const actors = [
          ...new Set(
            results.flatMap((f) =>
              f.actor.split(",").map((actor) => actor.trim())
            )
          ),
        ].sort();

        // Extract unique genres and split by commas
        const genres = [
          ...new Set(
            results.flatMap((f) =>
              f.genre.split(",").map((genre) => genre.trim())
            )
          ),
        ];
        setUniqueGenres(genres);

        setUniqueDirectors(directors);
        setUniqueActors(actors);
      } catch (error) {
        console.error("Error fetching films", error);
      }
    };

    fetchData();
  }, []);

  const handleGenerateRecommendations = () => {
    // Filter films based on selected criteria
    const filteredFilms = film.filter((f) => {
      const isYearMatch = selectedCriteria.year
        ? parseInt(f.releaseYear) === parseInt(selectedCriteria.year)
        : true;
      const isGenreMatch = selectedCriteria.genre
        ? f.genre
            .split(",")
            .map((g) => g.trim())
            .includes(selectedCriteria.genre)
        : true;
      const isDirectorMatch = selectedCriteria.director
        ? f.director === selectedCriteria.director
        : true;
      const isActorMatch = selectedCriteria.actor
        ? f.actor
            .split(",")
            .map((actor) => actor.trim())
            .includes(selectedCriteria.actor)
        : true;

      return isYearMatch && isGenreMatch && isDirectorMatch && isActorMatch;
    });

    // Now calculate recommendations only for filtered films
    const recommendations = calculateSawScores(
      filteredFilms.filter((f) => f.usia <= user.umur), // Further filter by age for recommendations
      selectedCriteria
    );
    setRecommendations(recommendations);
    setHasGeneratedRecommendations(true);
    console.log(recommendations);
  };

  // JSX
  return (
    <div className="min-h-screen">
      <Sidebar
        active2={
          "flex items-center px-3 py-3 bg-primary transform rounded-none"
        }
        activeIcon2={"#ffffff"}
        styleActive2={"mx-2 text-sm font-medium text-white"}
        active1={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon1={"currentColor"}
        styleActive1={"mx-2 text-sm font-medium"}
        active3={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon3={"currentColor"}
        styleActive3={"mx-2 text-sm font-medium"}
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

      {/* Main Content */}
      <div id="mainCanvas" className="px-[24px] pb-[30px] pt-[80px]">
        <div className="my-5 text-xl">
          <div className="text-white">
            <h1 className="text-[24px]">Kriteria Rekomendasi</h1>
            {/* <p className="text-[16px] text-white/70">
              Masukan Kriteria Untuk Menentukan Rekomendasi Yang Cocok Untuk
              Kamu Berdasarkan Kriteria yang kamu pilih
            </p> */}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex gap-3 flex-col w-full">
              {/* Year Select */}
              <select
                className="select focus:border-none rounded-none focus:outline-none  w-full bg-[#202020] text-white "
                value={selectedCriteria.year}
                onChange={(e) =>
                  setSelectedCriteria({
                    ...selectedCriteria,
                    year: e.target.value,
                  })
                }
              >
                <option value="">Tahun</option>
                {uniqueYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Genre Select */}
              <select
                className="select focus:border-none rounded-none focus:outline-none  w-full bg-[#202020] text-white "
                value={selectedCriteria.genre}
                onChange={(e) =>
                  setSelectedCriteria({
                    ...selectedCriteria,
                    genre: e.target.value,
                  })
                }
              >
                <option value="">Genre</option>
                {uniqueGenres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 flex-col w-full">
              {/* Director Select */}
              <select
                className="select focus:border-none rounded-none focus:outline-none  w-full bg-[#202020] text-white "
                value={selectedCriteria.director}
                onChange={(e) =>
                  setSelectedCriteria({
                    ...selectedCriteria,
                    director: e.target.value,
                  })
                }
              >
                <option value="">Sutradara</option>
                {uniqueDirectors.map((director, index) => (
                  <option key={index} value={director}>
                    {director}
                  </option>
                ))}
              </select>

              {/* Actor Select */}
              <select
                className="select focus:border-none rounded-none focus:outline-none  w-full bg-[#202020] text-white "
                value={selectedCriteria.actor}
                onChange={(e) =>
                  setSelectedCriteria({
                    ...selectedCriteria,
                    actor: e.target.value,
                  })
                }
              >
                <option value="">Aktor</option>
                {uniqueActors.map((actor, index) => (
                  <option key={index} value={actor}>
                    {actor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleGenerateRecommendations}
            className="mt-5 btn btn-primary rounded-none w-full bg-primary text-white"
          >
            Generate Recommendations
          </button>
        </div>

        {/* Recommended Films */}
        {hasGeneratedRecommendations && (
          <div className="my-5">
            <h1 className="text-[24px] text-white">Rekomendasi Film</h1>
            <p className="text-white/70">
              The Recommendation Scale is From 0 to 1
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
              {recommendations.length > 0 ? (
                recommendations.map((rec, index) => (
                  <CardFilm
                    key={index}
                    namaFilm={rec.title}
                    links={rec.imgUrl}
                    desc={truncateText(rec.sinopsis)}
                    trailer={rec.trailer}
                    vote={rec.score.toFixed(3)}
                  />
                ))
              ) : (
                <p className="text-white/70">No recommendations</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
