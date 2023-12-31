import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Movie from "../components/Movie";

const Saved = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const savedMoviesRef = collection(db, "savedMovies");

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        onSnapshot(savedMoviesRef, (snapshot) => {
          const filteredData = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setSavedMovies(filteredData);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getSavedMovies();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 pt-24 pb-6 h-screen">
      <div className="px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Saved Movies</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-y-2 max-w-[1200px]">
        {savedMovies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Saved;
