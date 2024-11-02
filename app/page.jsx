import React from "react";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
export default function page() {
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
        "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_3634_disneyplus_012e1639.jpeg",
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
    {
      image: "https://i.ebayimg.com/images/g/Ud0AAOSwtGRdbAnm/s-l400.jpg",
    },
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
    {
      image: "https://pbs.twimg.com/media/FvOOIiMWwAArKxF.jpg:large",
    },
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
        "https://lh3.googleusercontent.com/proxy/Njmv04NhYep83xE2FQ26vx85PHA5h2hyywfSTAXcOcXLR4Se2-2FZ2QdU4B_6SONqshWUyd2dQaK2Z9_zLJlpuIxCGi2oazmxdZBi6cqTZgVrXGlDXiE2w",
    },
    {
      image:
        "https://photogallery.indiatimes.com/movies/international/rio-2/photo/33383947/Poster-of-Hollywood-3D-computer-animated-musical-adventure-comedy-film-Rio-2-.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/OLgAAOSwe-phZOzF/s-l1200.jpg",
    },
  ];

  return (
    <div className="text-white">
      <Navbar />
      {/* Hero Section with trending movies overlay */}
      <section
        id="Hero"
        className="heroBg flex min-h-screen w-full items-center px-6 lg:px-12"
      >
        <div>
          <h1 className="text-7xl font-semibold">Kungfu Panda 4</h1>
          <p className="mt-4 w-[44%] font-light">
            Po, sang Pendekar Naga telah melalui tiga petualangan menantang
            maut. Dia mampu mengalahkan penjahat kelas dunia dengan
            keberaniannya dan juga kemampuan bela diri yang luar biasa. Hingga
            akhirnya, Pendekar Naga tersebut ditakdirkan untuk pensiun dan
            menjadi Spiritual Leader di Lembah Perdamaian. Hal tersebut tentu
            saja menimbulkan berbagai masalah yang berat baginya.
          </p>
          <a
            href="https://www.youtube.com/watch?v=_inKs4eeHiI"
            target="_blank"
            className="btn btn-primary mt-4 rounded-full text-white"
          >
            Tonton Trailer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </a>
          <a
            href=""
            className="btn ms-2 mt-4 rounded-full bg-transparent border-white hover:bg-[#151515] text-white"
          >
            Selengkapnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="MovieTranding" className="w-full py-10">
        <div className="mt-[-200px] px-6 lg:px-12">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h1 className="text-2xl font-semibold text-primary">
                Must Watch
              </h1>
              <p className="text-sm mb-2">Film yang wajib kamu tonton</p>
            </div>
            <a className="flex gap-2" href="/Login">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {trendFilms.map((film, index) => (
              <a href="/Login" className=" hover:scale-110 transition-all">
                <img
                  key={index}
                  className="h-full w-full rounded object-cover"
                  src={film.image}
                  alt={`Film ${index}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="NewTranding" className="w-full py-10">
        <div className="mt-[-40px] px-6 lg:px-12">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h1 className="text-2xl font-semibold text-primary">
                New Release
              </h1>
              <p className="text-sm mb-2">Film yang baru tayang di Bioskop</p>
            </div>
            <a className="flex gap-2" href="/Login">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {newFilms.map((film, index) => (
              <a href="/Login" className=" hover:scale-110 transition-all">
                <img
                  key={index}
                  className="h-full w-full rounded object-cover"
                  src={film.image}
                  alt={`Film ${index}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="KidsTranding" className="w-full py-10">
        <div className="mt-[-40px] px-6 lg:px-12">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h1 className="text-2xl font-semibold text-primary">For Kids</h1>
              <p className="text-sm mb-2">Film untuk nemenin si buah hati </p>
            </div>
            <a className="flex gap-2" href="/Login">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {kidsFilms.map((film, index) => (
              <a href="/Login" className=" hover:scale-110 transition-all">
                <img
                  key={index}
                  className="h-full w-full rounded object-cover"
                  src={film.image}
                  alt={`Film ${index}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="Marque" className="w-full py-20">
        <div className=" mt-[-40px] px-6 lg:px-12">
          <h1 className="text-2xl font-semibold text-center text-primary">
            Our Member FeedBack
          </h1>
          <p className="text-center mb-8 text-md font-light">
            Comment dari member iblix terhadap kualitas iblix memberikan
            rekomendasi
          </p>
          <Marque />
        </div>
      </section>

      {/* movies by genre */}
    </div>
  );
}
