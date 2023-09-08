import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase-config";
import {
  setDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, rowID }) => {
  const [isSaved, setIsSaved] = useState(false);
  const savedMoviesRef = collection(db, "savedMovies");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllSavedMovies = async () => {
      const data = await getDocs(savedMoviesRef);
      data.forEach((doc) => {
        if (doc.data().title === movie.title) {
          setIsSaved(!isSaved);
        }
      });
    };
    getAllSavedMovies();
  }, []);

  const saveMovie = async (id, title, backdrop_path) => {
    setIsSaved(!isSaved);
    const data = {
      title: title,
      backdrop_path: backdrop_path,
    };
    try {
      const docRef = await doc(savedMoviesRef, id.toString());
      await setDoc(docRef, data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeMovie = async (id) => {
    setIsSaved(!isSaved);
    const movieToDelete = doc(savedMoviesRef, id.toString());
    await deleteDoc(movieToDelete);
  };

  return (
    <div
      className="max-w-[300px] inline-block px-1 relative cursor-pointer"
      key={movie?.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 duration-300"
        onClick={() => {
          navigate("/movie/" + movie.id);
        }}
      >
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>

        {isSaved ? (
          <FaHeart
            className="absolute top-4 left-4 text-[var(--fucsia)] cursor-pointer hover:scale-125 duration-300 "
            onClick={(e) => {
              e.stopPropagation();
              removeMovie(movie.id);
            }}
          />
        ) : (
          <FaRegHeart
            className="absolute top-4 left-4 text-[var(--white)] cursor-pointer hover:scale-125 duration-300 "
            onClick={(e) => {
              e.stopPropagation();
              saveMovie(movie.id, movie.title, movie.backdrop_path);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
