"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useId, useState } from "react";

export const Sidebar = (props) => {
  const [user, setUser] = useState(null); // State untuk menyimpan data user

  const RemoveJwt = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      // Mendapatkan ID user dari token JWT
      let userId;
      try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.id; // Pastikan ID user berada di dalam token
      } catch (error) {
        console.error("Invalid token", error);
        // window.location.href = "/";
        return;
      }

      // Ambil data user dari backend
      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Kirim token di header Authorization
            },
          }
        );
        setUser(userResponse.data); // Simpan data user yang diterima
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fixed z-[99]">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r border-gray-700 bg-[#151515] px-6 py-6">
        <div className="flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            {/* Fitur menu sidebar */}
            <div className="space-y-2">
              <label className="px-3 text-xs uppercase text-white">
                Feature
              </label>

              <a className={props.active1} href="/Dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={props.activeIcon1}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className={props.styleActive1}>Dashboard</span>
              </a>

              <a className={props.active3} href="/Penelusuran">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={props.activeIcon3}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <span className={props.styleActive3}>Penelusuran</span>
              </a>

              <a className={props.active2} href="/Rekomendasi">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={props.activeIcon2}
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>

                <span className={props.styleActive2}>Rekomendasi</span>
              </a>

              <a className={props.active4} href="/ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke={props.activeIcon4}
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <span className={props.styleActive4}>Recomendation By AI</span>
              </a>
            </div>

            {/* end fitur menu sidebar */}

            {/* account menu sidebar */}
            <div className="space-y-2">
              <label className="px-3 text-xs uppercase text-white">
                Account
              </label>

              <button
                onClick={RemoveJwt}
                className="flex w-full transform items-center k-lg px-3 py-3 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>

                <span className="mx-2 text-sm font-medium">Log Out</span>
              </button>
            </div>
            {/* end account menu sidebar */}
            <div className="absolute bottom-8 left-0 w-full text-white">
              <div className="mx-3 k-lg bg-[#202020] px-3 py-4">
                <div>
                  <p className="text-[14px] font-bold">
                    {user ? user.username : "username"}
                  </p>
                  <p className="text-[12px] font-normal text-[#b6b6b6]">
                    {user ? user.email : "email"}
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};
