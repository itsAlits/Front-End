"use client";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarAdmin } from "@/app/components/SidebarAdmin";

export default function Page() {
  const [formData, setFormData] = useState({
    title: "", // Film Title for deletion
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteData = async () => {
    const endpoint = "http://localhost:3030/film/update"; // Replace with your Fuseki endpoint
    const { title } = formData;

    // Validate if title is provided
    if (!title) {
      toast.error("Film title is required to delete.");
      return;
    }

    // Clean up the title (for example, replacing spaces with underscores)
    const safeTitle = title.replace(/\s+/g, "_");

    // SPARQL DELETE query
    const query = `
      PREFIX ex: <http://www.semanticweb.org/alitwira/ontologies/2024/9/untitled-ontology-3#>

      DELETE WHERE {
        ex:${safeTitle} ?p ?o .
      }
    `;

    try {
      const response = await axios.post(endpoint, query, {
        headers: {
          "Content-Type": "application/sparql-update",
        },
      });
      console.log("Data deleted successfully:", response.data);
      setFormData({ title: "" }); // Clear the form data after successful delete
      toast.success("Film berhasil dihapus");
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Gagal menghapus film");
    }
  };

  return (
    <div className="min-h-screen">
      <SidebarAdmin
        active3={"flex items-center px-3 py-3 bg-primary transform k-lg"}
        activeIcon3={"#ffffff"}
        styleActive3={"mx-2 text-sm font-medium text-white"}
        active2={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform k-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon2={"currentColor"}
        styleActive2={"mx-2 text-sm font-medium"}
        active1={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform k-lg hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon1={"currentColor"}
        styleActive1={"mx-2 text-sm font-medium"}
      />

      {/* topMenuDashboard */}
      <div className="marginkuy fixed z-[97] flex items-center justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
      </div>

      {/* Main content */}
      <div id="mainCanvas" className="px-[40px] pb-[30px] pt-[100px]">
        <form className="flex gap-6 w-full mt-6 text-white">
          <div className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="title">Movie Title to Delete</label>
              <input
                placeholder="Masukan Nama Film (ex: Inside Out 2)"
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full my-1"
              />
            </div>
          </div>
        </form>

        <div>
          <button
            onClick={handleDeleteData}
            className="btn btn-primary my-4 text-white"
          >
            Hapus Film
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
