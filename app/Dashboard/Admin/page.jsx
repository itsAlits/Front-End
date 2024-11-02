"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarAdmin } from "@/app/components/SidebarAdmin";

export default function page() {
  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [image, setImage] = useState("");
  const [overview, setOverview] = useState("");
  const [voteAverage, setVoteAverage] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const [popularity, setPopularity] = useState(0);
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);
  const [adult, setAdult] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      adult,
      title,
      original_title: originalTitle,
      release_date: releaseDate,
      image,
      overview,
      vote_average: voteAverage,
      vote_count: voteCount,
      popularity,
      duration,
      original_language: language,
      trailer,
      genres,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/iblix/movies",
        movieData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Film Berhasil Ditambahkan!");
        setTitle("");
        setOriginalTitle("");
        setReleaseDate("");
        setImage("");
        setOverview("");
        setVoteAverage(0);
        setVoteCount(0);
        setPopularity(0);
        setDuration("");
        setLanguage("");
        setTrailer("");
        setGenres([]);
        setAdult(false);
      }
    } catch (error) {
      toast.error("Film Gagal Ditambhakan");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen">
      <SidebarAdmin
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
      <div className="marginkuy fixed z-[97] flex items-center justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <h2 className="text-2xl font-bold text-white">Tambah Film</h2>
      </div>

      {/* Main content */}
      <div id="mainCanvas" className="px-[40px] pb-[30px] pt-[100px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label text-white">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Original Title</span>
              </label>
              <input
                type="text"
                placeholder="Original Title"
                className="input input-bordered w-full"
                value={originalTitle}
                onChange={(e) => setOriginalTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Release Date</span>
              </label>
              <input
                type="text"
                placeholder="Release Date"
                className="input input-bordered w-full"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="Image URL"
                className="input input-bordered w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Overview</span>
              </label>
              <textarea
                placeholder="Overview"
                className="input textarea w-full text-white"
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Vote Average</span>
              </label>
              <input
                type="number"
                placeholder="Vote Average"
                className="input input-bordered w-full"
                value={voteAverage}
                onChange={(e) => setVoteAverage(e.target.value)}
                step="0.1"
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Vote Count</span>
              </label>
              <input
                type="number"
                placeholder="Vote Count"
                className="input input-bordered w-full"
                value={voteCount}
                onChange={(e) => setVoteCount(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Popularity</span>
              </label>
              <input
                type="number"
                placeholder="Popularity"
                className="input input-bordered w-full"
                value={popularity}
                onChange={(e) => setPopularity(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="input input-bordered w-full"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Language</span>
              </label>
              <input
                type="text"
                placeholder="Language"
                className="input input-bordered w-full"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Trailer URL</span>
              </label>
              <input
                type="url"
                placeholder="Trailer URL"
                className="input input-bordered w-full"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Adult</span>
              </label>
              <select
                className="input select select-bordered w-full text-white"
                value={adult ? "Yes" : "No"}
                onChange={(e) => setAdult(e.target.value === "Yes")}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <label className="label text-white">
                <span className="label-text">Genres (comma separated)</span>
              </label>
              <input
                type="text"
                placeholder="Genres (comma separated)"
                className="input input-bordered w-full"
                value={genres.join(", ")}
                onChange={(e) =>
                  setGenres(
                    e.target.value.split(",").map((genre) => genre.trim())
                  )
                }
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-10 w-full text-white"
          >
            Add Movie
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
