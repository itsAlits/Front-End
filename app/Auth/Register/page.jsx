"use client";

// Import Library
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify CSS
import Navbar from "../../components/Navbar";
// Import Components

export default function Home() {
  // State untuk input form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [umur, setUmur] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      umur,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        userData
      );

      if (response.status === 200) {
        // Jika registrasi berhasil
        toast.success("Registrasi berhasil");
        console.log(response.data);
        setUsername("");
        setPassword("");
        setEmail("");
        setUmur("");
      } else {
        // Jika registrasi gagal
        toast.error("Registrasi Gagal");
        setUsername("");
        setPassword("");
        setEmail("");
        setUmur("");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Email sudah terdaftar");
      setUsername("");
      setPassword("");
      setEmail("");
      setUmur("");
    }
  };

  return (
    <>
      <Navbar buttonDesc={"Made by Alit"} />
      <main
        id="loginPageSection"
        className="container mx-auto flex h-screen items-center"
      >
        {/* LoginForm -> Untuk Login Ke System */}
        <section className="formLogin flex h-[80%] w-full items-center justify-center text-center">
          {/* Content Form*/}
          <div className="w-full p-10 xl:w-2/4">
            <h1 className="text-2xl font-bold text-primary">Daftar</h1>
            <form onSubmit={handleSubmit}>
              {/* form */}
              <div className="gap-2 xl:flex">
                <div className="w-full">
                  <label className="input input-bordered my-3 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </label>
                  <label className="input input-bordered my-3 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="h4 w-4 opacity-70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>

                    <input
                      type="email"
                      className="grow"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="input input-bordered my-3 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <label className="input input-bordered my-3 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <input
                      type="number"
                      className="grow bg-primary"
                      placeholder="Umur"
                      value={umur}
                      onChange={(e) => setUmur(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              {/* end form */}
              <button
                type="submit"
                className="btn btn-primary mb-3 mt-6 w-full text-white"
              >
                Daftar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </form>
            <p className="text-[13px] text-white">
              Sudah Mempunyai Akun?{" "}
              <a href="/Login" className="text-blue-400 underline">
                Masuk Disini
              </a>
            </p>
          </div>
          {/* End Content Form */}
        </section>
      </main>
      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}
