"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarAdmin } from "@/app/components/SidebarAdmin";

export default function page() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    actor: "",
    director: "",
    releaseYear: "",
    duration: "",
    trailer: "",
    imageUrl: "",
    synopsis: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInsertData = async () => {
    const endpoint = "http://localhost:3030/film/update"; // Update URL to your Fuseki endpoint
    const {
      title,
      genre, // Comma-separated string: "Action, Adventure, Fantasy, Sci-Fi"
      actor, // Comma-separated string for multiple actors
      director,
      releaseYear,
      duration,
      trailer,
      imageUrl,
      synopsis,
      rating,
    } = formData;

    // Split the genre and actor strings into arrays
    const genreArray = genre.split(",").map((g) => g.trim());
    const actorArray = actor.split(",").map((a) => a.trim());

    const query = `
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX ex: <http://www.semanticweb.org/alitwira/ontologies/2024/9/untitled-ontology-3#>

      INSERT DATA {
        ex:${title.replace(/\s+/g, "_")} a ex:Film ;
        
        // Insert genres as both data and object properties
        ${genreArray
          .map(
            (g) => `
          ex:MemilikiGenre ex:${g.replace(/\s+/g, "_")} ;
          ex:Genre "${g}" ;
        `
          )
          .join(" ")}

        // Insert actors as object properties
        ${actorArray
          .map(
            (a) => `
          ex:DiperankanOleh ex:${a.replace(/\s+/g, "_")} ;
          ex:Nama_Aktor "${a}" ;
        `
          )
          .join(" ")}

        ex:DisutradaraiOleh ex:${director.replace(/\s+/g, "_")} ;
        ex:Tahun_Rilis "${releaseYear}" ;
        ex:Durasi "${duration}" ;
        ex:Trailer "${trailer}" ;
        ex:Image_Url "${imageUrl}" ;
        ex:Nama_Sutradara "${director}" ;
        ex:Sinopsis "${synopsis}" ;
        ex:Rating "${rating}"^^xsd:decimal ;
        ex:Judul "${title}" .
      }
    `;

    try {
      const response = await axios.post(endpoint, query, {
        headers: {
          "Content-Type": "application/sparql-update",
        },
      });
      console.log("Data inserted successfully:", response.data);
      toast.success("Film Berhasil Ditambahkan");
    } catch (error) {
      console.error("Error inserting data:", error);
      toast.error("Film Gagal Ditambahkan");
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
        <form className="flex gap-6 w-full mt-6 text-white">
          <div className="w-full flex  flex-col gap-4">
            <div>
              <label htmlFor="title">Movie Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="genre">Genre (comma separated)</label>
              <input
                type="text"
                name="genre"
                id="genre"
                value={formData.genre}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="actor">Actors (comma separated)</label>
              <input
                type="text"
                name="actor"
                id="actor"
                value={formData.actor}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="director">Director</label>
              <input
                type="text"
                name="director"
                id="director"
                value={formData.director}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="releaseYear">Release Year</label>
              <input
                type="text"
                name="releaseYear"
                id="releaseYear"
                value={formData.releaseYear}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                id="duration"
                value={formData.duration}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="trailer">Trailer URL</label>
              <input
                type="text"
                name="trailer"
                id="trailer"
                value={formData.trailer}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                name="synopsis"
                id="synopsis"
                value={formData.synopsis}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            onClick={handleInsertData}
            className="btn btn-primary my-4 text-white"
          >
            Insert Movie Data
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
