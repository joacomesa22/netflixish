import React from "react";

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <div className="max-w-[600px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
