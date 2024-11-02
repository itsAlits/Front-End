"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [books, setBooks] = useState([]); // State to hold the fetched books data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3030/testbook1/query",
          `query=${encodeURIComponent(` 
            PREFIX d: <http://www.semanticweb.org/sogun/ontologies/2024/9/untitled-ontology-49#>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            SELECT *
            WHERE {
              ?book rdf:type d:Buku.
              ?book d:Judul ?judul.
              ?book d:TahunTerbit ?tahun.
              ?book d:ditulisOleh ?penulis.
            }
          `)}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log("Books data:", response.data);
        setBooks(response.data.results.bindings);
      } catch (error) {
        console.error("Error fetching books data:", error);
        setError("Failed to fetch data"); // Set error state if there's an issue
      }
    };

    fetchBooksData();
  }, []);

  // Function to extract the name from the URI after the hashtag
  const extractNameFromURI = (uri) => {
    const parts = uri.split("#");
    return parts[parts.length - 1]; // Return the last segment after the hashtag
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-3xl text-white font-bold mb-4">Apache Jena Test</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
      {/* Display error message if any */}
      <div className="overflow-x-auto w-full max-w-full">
        {books.length > 0 ? (
          <table className="min-w-full bg-gray-700 border text-white border-gray-500 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-700 uppercase text-sm">
                <th className="py-3 px-4 border-b text-center">Nomor</th>
                <th className="py-3 px-4 border-b text-start">Book Title</th>
                <th className="py-3 px-4 border-b text-start">Author</th>
                <th className="py-3 px-4 border-b text-start">Year</th>
              </tr>
            </thead>
            <tbody>
              {books.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 hover:text-black cursor-pointer"
                >
                  <td className="py-2 text-center border-b">{index}</td>
                  <td className="py-2 px-4 border-b ">
                    {extractNameFromURI(item.judul.value)}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    {extractNameFromURI(item.penulis.value)}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    {extractNameFromURI(item.tahun.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400">No books found.</p>
        )}
      </div>
    </div>
  );
}
