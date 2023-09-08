import React, { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { key } from "../Requests";

const MovieDetailContainer = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <MovieDetail movie={movie} />
    </section>
  );
};

export default MovieDetailContainer;
