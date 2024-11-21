import React from "react";
import TrailerSection from "../Trailer2/Trailer";

// Reusable FilmSection Component
function FilmSection({ id, title, films }) {
  return (
    <section id={id} className="w-full py-10">
      <div className="mt-[-40px] px-6 lg:px-12">
        <div className="flex items-center justify-between pb-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
          </div>
          <a className="flex gap-2" href="/Login">
            See More{" "}
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {films.map((film, index) => (
            <a
              key={index}
              href="Auth/Login"
              className="hover:-translate-y-3 transition-all"
            >
              <img
                className="h-full w-full object-cover"
                src={film.image}
                alt={`Film ${index}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Page() {
  const trendFilms = [
    {
      image:
        "https://media.themoviedb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymn2kshpQH9Mwlp1UmFm_l_U3ANEjuP4l6g&s",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      image:
        "https://www.youloveit.com/uploads/posts/2021-11/1637256422_youloveit_com_turning_red_poster.jpg",
    },
    {
      image:
        "https://images-cdn.ubuy.co.id/646f33db90b9007eb11162af-luca-poster-healing-animation-movie.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_QL75_UX820_.jpg",
    },
    { image: "https://i.ebayimg.com/images/g/Ud0AAOSwtGRdbAnm/s-l400.jpg" },
    {
      image:
        "https://i.redd.it/banned-pixar-movie-posters-animated-scenes-in-comments-v0-62vwm0m4usub1.png?width=960&format=png&auto=webp&s=cd18c3366fd0f6f0d5f5ac316b47868598bff577",
    },
  ];

  const newFilms = [
    {
      image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    },
    {
      image: "https://image.tmdb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    },
  ];

  const kidsFilms = [
    {
      image:
        "https://www.companyfolders.com/blog/media/2015/04/frozen-poster.jpg",
    },
    {
      image:
        "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/HGQAAOSwO6haj7GA/$_57.JPG?set_id=8800005007",
    },
    { image: "https://pbs.twimg.com/media/FvOOIiMWwAArKxF.jpg:large" },
    {
      image:
        "https://i.pinimg.com/736x/b6/ef/fa/b6effa2f53051ff0cb9c318a0d162da1.jpg",
    },
    {
      image:
        "https://preview.redd.it/banned-pixar-movie-posters-animated-scenes-in-comments-v0-0axfkzl4usub1.png?width=960&format=png&auto=webp&s=da9d90e75861abd0ab31bc79cb6a2142864bc4bd",
    },
    {
      image:
        "https://image.tmdb.org/t/p/original/nKchSvJ8iMshj2kuUyquZLOoOyS.jpg",
    },
    {
      image:
        "https://photogallery.indiatimes.com/movies/international/rio-2/photo/33383947/Poster-of-Hollywood-3D-computer-animated-musical-adventure-comedy-film-Rio-2-.jpg",
    },
    { image: "https://i.ebayimg.com/images/g/OLgAAOSwe-phZOzF/s-l1200.jpg" },
  ];

  return (
    <div className="-mt-28">
      <FilmSection
        id="MovieTranding"
        title="Harus Ditonton"
        films={trendFilms}
      />
      <div className="mb-10">
        <TrailerSection />
      </div>
      <FilmSection id="NewTranding" title="Baru Tayang" films={newFilms} />
      <FilmSection id="KidsTranding" title="Untuk Anak" films={kidsFilms} />
    </div>
  );
}
