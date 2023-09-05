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
    <div className="flex flex-col items-center gap-4 p-4">
      <h3 className="text-2xl">Saved Movies</h3>
      <div className="flex justify-center flex-wrap gap-y-2">
        {savedMovies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Saved;
