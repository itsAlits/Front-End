"use client";
import { useState, useEffect } from "react";

export default function Carousel() {
  const films = [
    {
      image: "https://itc.ua/wp-content/uploads/2024/05/mavka.jpg",
      title: "Mavka",
      desc: "Mavka, a Soul of the Forest, faces an impossible choice between love and her duty as Guardian of the Heart of the Forest when she falls in love with a human, a talented young musician Lucas.",
      genre1: "Adventure",
      genre2: "Animation",
      time: "1h 39m",
      rating: "6.6",
      linksTrailer: "#",
    },
    {
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dddb8beb-7509-4c66-bc59-5e64fc25d614/ddma0hd-96bfcfc2-2f7a-4812-a6a4-80eb6f230b4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkZGI4YmViLTc1MDktNGM2Ni1iYzU5LTVlNjRmYzI1ZDYxNFwvZGRtYTBoZC05NmJmY2ZjMi0yZjdhLTQ4MTItYTZhNC04MGViNmYyMzBiNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.34YdVJK1amubwXlSnsV-0qBtD5KF3LyGOYuqa7oebTk",
      title: "Bad Boys: Ride or Die",
      desc: "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
      genre1: "Action",
      genre2: "Comedy",
      time: "2h 20m",
      rating: "7.5",
      linksTrailer: "#",
    },
    {
      image:
        "https://uncutfilms.it/wp-content/uploads/2024/07/inside-out-2-movie-1920x1080-16762.jpg",
      title: "Inside Out 2",
      desc: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      genre1: "Adventure",
      genre2: "Animation",
      time: "",
      rating: "",
      linksTrailer: "#",
    },
    {
      image:
        "https://www.joblo.com/wp-content/uploads/2024/05/Beetlejuice-Beetlejuice-Empire-featured.jpg",
      title: "Beetlejuice Beetlejuice",
      desc: "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
      genre1: "Adventure",
      genre2: "Animation",
      time: "1h 12m",
      rating: "7.2",
      linksTrailer: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true); // Start animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % films.length);
        setTransitioning(false); // End animation after transition
      }, 500); // Length of animation
    }, 8000); // Change poster

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [films.length]);

  const currentFilm = films[currentIndex];

  return (
    <div className="relative mt-4 h-[600px] overflow-hidden rounded-3xl">
      {/* Black Fade Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out ${
          transitioning ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Movie Poster */}
      <img
        className="h-full w-full object-cover"
        src={currentFilm.image}
        alt="Movie Poster"
      />

      {/* Gradient Overlay and Text with Transitions */}
      <div
        className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent py-14 transition-opacity duration-1000 ease-in ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="px-20 text-white">
          <p className="text-md badge badge-primary badge-md py-3 text-white">
            🔥New Populer
          </p>
        </div>
        <div className="w-auto px-20 text-white">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <p className="badge badge-primary py-3 text-white">
                {currentFilm.genre1}
              </p>
              <p className="badge badge-primary py-3 text-white">
                {currentFilm.genre2}
              </p>
            </div>
            <h1 className="text-5xl font-bold transition-transform duration-1000 ease-in-out">
              {currentFilm.title}
            </h1>
          </div>
          <p className="mt-3 w-[40%] text-[14px] font-light">
            {currentFilm.desc}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffc400"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>7,7</p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <p>1h 42m</p>
            </div>
          </div>

          <a
            href={currentFilm.linksTrailer}
            className="btn btn-primary mt-5 rounded-full text-white"
          >
            Watch Trailer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
