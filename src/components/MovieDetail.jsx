import React from "react";
import { AiFillStar } from "react-icons/ai";

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <div className="h-screen relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-[var(--black)]"></div>

      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 max-w-[780px] flex flex-col gap-4 px-6 md:px-10">
        <p className="text-sm text-[var(--grey)]">
          Released {movie?.release_date}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">{movie?.title}</h1>
        {movie?.tagline && (
          <h2 className="font-bold text-xl md:text-2xl">{movie?.tagline}</h2>
        )}
        <p className="text-sm md:text-base">{movie?.overview}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 justify-start flex-wrap">
            {movie?.genres?.map((genre) => {
              return (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm text-[var(--grey)] text-xs text-center"
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
          <span className="bg-[var(--fucisa)] flex justify-center items-center gap-1 text-s">
            <AiFillStar size={18} />
            {movie?.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-[var(--fucsia)] hover:bg-[var(--fucsiaDarker)] hover:text-[--white] duration-300">
            Play
          </button>
          <button className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-solid border-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] duration-300">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
