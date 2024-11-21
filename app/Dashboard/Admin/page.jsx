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
    usia: "",
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
    const endpoint = "http://localhost:3030/film/update";
    const {
      title,
      genre,
      actor,
      director,
      releaseYear,
      duration,
      usia,
      trailer,
      imageUrl,
      synopsis,
      rating,
    } = formData;

    const genreArray = genre.split(",").map((g) => g.trim());
    const actorArray = actor.split(",").map((a) => a.trim());

    const query = `
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX ex: <http://www.semanticweb.org/alitwira/ontologies/2024/9/untitled-ontology-3#>

      INSERT DATA {
        ex:${title.replace(/\s+/g, "_")} a ex:Film ;
        ${genreArray
          .map((g) => `ex:MemilikiGenre ex:${g.replace(/\s+/g, "_")};`)
          .join(" ")}
        ${actorArray
          .map((a) => `ex:DiperankanOleh ex:${a.replace(/\s+/g, "_")};`)
          .join(" ")}
        ex:DisutradaraiOleh ex:${director.replace(/\s+/g, "_")} ;
        ex:Judul "${title}" ;
        ex:Rating "${rating}"^^xsd:decimal ;
        ex:Nama_Aktor "${actor}" ;
        ex:Image_Url "${imageUrl}" ;
        ex:Sinopsis "${synopsis}" ;
        ex:Genre "${genre}" ;
        ex:Durasi "${duration}" ;
        ex:Usia "${usia}" ;
        ex:Trailer "${trailer}" ;
        ex:Tahun_Rilis "${releaseYear}"^^xsd:gYear ;
        ex:Nama_Sutradara "${director}" .
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
      setFormData({
        title: "",
        genre: "",
        actor: "",
        director: "",
        releaseYear: "",
        duration: "",
        usia: "",
        trailer: "",
        imageUrl: "",
        synopsis: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      toast.error("Film Gagal Ditambahkan");
    }
  };

  return (
    <div className="min-h-screen">
      <SidebarAdmin
        active1={"flex items-center px-3 py-3 bg-primary transform k-lg"}
        activeIcon1={"#ffffff"}
        styleActive1={"mx-2 text-sm font-medium text-white"}
        active2={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform k-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon2={"currentColor"}
        styleActive2={"mx-2 text-sm font-medium"}
        active3={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform k-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon3={"currentColor"}
        styleActive3={"mx-2 text-sm font-medium"}
      />
      <div className="marginkuy fixed z-[97] flex items-center justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
      </div>

      <div id="mainCanvas" className="px-[40px] pb-[30px] pt-[80px]">
        <form className="flex gap-6 w-full mt-6 text-white">
          <div className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="title">Judul Film</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Masukan Nama Film"
                value={formData.title}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="genre">Genre (Menggunakan Coma)</label>
              <input
                type="text"
                name="genre"
                id="genre"
                placeholder="Crime, Drama"
                value={formData.genre}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="director">Director</label>
              <input
                type="text"
                name="director"
                id="director"
                placeholder="Masukan Nama Sutradara"
                value={formData.director}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="releaseYear">Release Year</label>
              <input
                type="text"
                name="releaseYear"
                id="releaseYear"
                placeholder="2023"
                value={formData.releaseYear}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="e.g., 1h 38m"
                value={formData.duration}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="usia">Sensor Usia</label>
              <input
                type="text"
                name="usia"
                id="usia"
                placeholder="17"
                value={formData.usia}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
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
                placeholder="https://example.com/trailer"
                value={formData.trailer}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="actor">Actors (Menggunakan Coma)</label>
              <input
                type="text"
                name="actor"
                id="actor"
                placeholder="Actor1, Actor2"
                value={formData.actor}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                name="synopsis"
                id="synopsis"
                placeholder="Masukan Sinopsis Film"
                value={formData.synopsis}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                placeholder="e.g., 8.5"
                value={formData.rating}
                onChange={handleChange}
                className="input w-full rounded-none my-1"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            onClick={handleInsertData}
            className="btn rounded-none btn-primary my-4 text-white"
          >
            Insert Movie Data
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
