// frontend/pages/ai.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";

export default function AiPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:8000/api/chat", {
        prompt,
      });

      setResponse(res.data.result);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error: Terjadi masalah saat menghubungi API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar
        active4={
          "flex items-center px-3 py-3 bg-primary transform rounded-none"
        }
        activeIcon4={"#ffffff"}
        styleActive4={"mx-2 text-sm font-medium text-white"}
        active2={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon2={"currentColor"}
        styleActive2={"mx-2 text-sm font-medium"}
        active3={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon3={"currentColor"}
        styleActive3={"mx-2 text-sm font-medium"}
        active1={
          "flex items-center px-3 py-3 text-white transition-colors duration-300 transform rounded-none hover:bg-gray-100 hover:text-gray-700"
        }
        activeIcon1={"currentColor"}
        styleActive1={"mx-2 text-sm font-medium"}
      />

      {/* Top Menu Dashboard */}
      <div className="marginkuy fixed z-[97] flex items-center bg-[#151515] justify-between border-b border-gray-700 py-[20px] text-primary">
        <h1 className="text-3xl font-black">IBLIX</h1>
        <div className="text-right">
          <h1 className="text-[18px]">
            <span className=" text-white">Hi, </span>
            {/* {user ? user.username : "Username"} */}hELLO
          </h1>
        </div>
      </div>

      <div id="mainCanvas2" className="px-[20px] pb-[30px] pt-[100px]">
        <div className="w-full min-h-[87vh] flex flex-col">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto pb-4 pt-1 space-y-4">
            {/* Dummy messages */}
            <div className="flex justify-end">
              <div className="p-3 bg-[#202020] text-end text-white rounded-none max-w-3xl break-words">
                <p>
                  Can you tell me the weather? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Repellat ab explicabo quisquam
                  minima, soluta porro quae fugit, atque ipsam repellendus aut
                  nobis odit sint ad. Consectetur possimus omnis voluptas
                  delectus.
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="py-3 items-start gap-4 flex text-white max-w-3xl break-words">
                <img
                  className="size-10 border rounded-full"
                  src="https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png"
                  alt=""
                />
                <p>
                  Sure! The weather today is sunny with a high of 25°C. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum
                  consectetur eos, minus est quod veritatis non minima tenetur
                  omnis molestias autem beatae facere, quaerat qui repudiandae
                  exercitationem ut dignissimos.
                </p>
              </div>
            </div>
            {/* Add AI response */}
            {response && (
              <div className="flex justify-start">
                <div className="p-3  text-white rounded-none max-w-2xl break-words">
                  <p>{response}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className=" marginkuy2 flex fixed bottom-8"
          >
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Masukkan prompt Anda di sini..."
              className="w-full px-4 py-4 bg-[#202020] text-white text-sm focus:border-none focus:outline-none"
              rows="1"
            />
            <button
              type="submit"
              className="ml-2 w-20 p-2 hover:bg-[#303030] bg-[#202020] text-white"
              disabled={loading}
            >
              {loading ? "Loading..." : "Kirim"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
