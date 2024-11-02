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
            <div className="space-y-3">
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

              <a className={props.active2} href="/Rekomendasi">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={props.activeIcon2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className={props.styleActive2}>Rekomendasi</span>
              </a>

              <a className={props.active3} href="/Pencarian">
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

                <span className={props.styleActive3}>Pencarian</span>
              </a>
            </div>

            {/* end fitur menu sidebar */}

            {/* account menu sidebar */}
            <div className="space-y-3">
              <label className="px-3 text-xs uppercase text-white">
                Account
              </label>

              <button
                onClick={RemoveJwt}
                className="flex w-full transform items-center rounded-lg px-3 py-3 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
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
              <div className="mx-3 rounded-lg bg-[#202020] px-3 py-4">
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
