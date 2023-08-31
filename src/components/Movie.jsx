import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="max-w-[300px] inline-block" key={movie?.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Movie;
