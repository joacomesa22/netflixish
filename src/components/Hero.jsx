import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestNowPlaying)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[80vh] relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-[var(--black)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 max-w-[660px] flex flex-col gap-4 px-6 md:px-10">
        <p className="text-sm text-[var(--grey)]">
          Released {movie?.release_date}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">{movie?.title}</h1>
        <p className="text-sm md:text-base">
          {truncateString(movie?.overview, 120)}
        </p>
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

export default Hero;
