"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useId, useState } from "react";

export const SidebarAdmin = (props) => {
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
              <label className="px-3 text-xs uppercase text-white">Film</label>

              <a className={props.active1} href="/Dashboard/Admin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke={props.activeIcon1}
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>

                <span className={props.styleActive1}>Tambah Film</span>
              </a>

              <a className={props.active2} href="Admin/LihatFilm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke={props.activeIcon2}
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                  />
                </svg>

                <span className={props.styleActive2}>Lihat Film</span>
              </a>

              <a className={props.active3} href="/Pencarian">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke={props.activeIcon3}
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>

                <span className={props.styleActive3}>Delete Film</span>
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
