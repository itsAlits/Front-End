export default function CardFilm({ links, desc, namaFilm, onClick, vote }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      {/* Container with hover effect */}
      <div className="group relative mt-4 h-auto w-full overflow-hidden rounded">
        {/* Image */}
        <img
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          src={links}
          alt="gambar"
        />
        {/* time */}
        <div className="absolute right-0 top-0 z-50 rounded-bl bg-primary px-2 py-1 text-[12px] font-medium text-white">
          <div className="flex items-center gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="pt-[2px]">{vote}</p>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center bg-black p-2 opacity-0 transition-opacity duration-300 hover:text-white group-hover:opacity-80">
          <p className="text-center text-[13px]">{desc}</p>
        </div>
      </div>
      {/* Film Title */}
      <p className="mt-3 text-center text-[13px] text-white">{namaFilm}</p>
    </div>
  );
}
