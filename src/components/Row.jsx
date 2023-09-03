import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ fetchURL, title, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="flex flex-col gap-4 py-4">
      <h3 className="pl-4 text-2xl">{title}</h3>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-[var(--white)] text-[var(--fucsia)] left-0 rounded-full absolute opacity-50 hover:opacity-100 duration-200 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-[var(--white)] text-[var(--fucsia)] right-0 rounded-full absolute opacity-50 hover:opacity-100 duration-200 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
