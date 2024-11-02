"use client";

// Import Library
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Components
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        userData
      );

      if (response.status === 200) {
        // Jika login berhasil
        localStorage.setItem("jwt", response.data.token);
        toast.success("Login berhasil");
        setTimeout(() => {
          window.location.href = "/Dashboard";
        }, 2000); // Redirect setelah toast muncul
      } else {
        // Jika login gagal
        toast.error(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Terjadi kesalahan saat login");
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
          <div className="w-full p-10 xl:w-1/3">
            <h1 className="text-2xl font-bold text-primary">Masuk</h1>

            <form onSubmit={handleSubmit}>
              {/* form */}
              <label className="input my-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </label>
              <label className="input flex items-center gap-2">
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
              {/* end form */}
              <button
                type="submit"
                className="btn btn-primary mb-3 mt-6 w-full text-white"
              >
                Masuk
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
              Tidak Mempunyai Akun?{" "}
              <a href="/Register" className="text-blue-400 underline">
                Daftar Disini
              </a>
            </p>
          </div>
          {/* End Content Form */}
        </section>
      </main>
      <ToastContainer />
    </>
  );
}
