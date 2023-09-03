import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

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
          console.log("RENDEREEEED");
        });
      } catch (err) {
        console.log(err);
      }
    };
    getSavedMovies();
  }, []);

  return (
    <div>
      {savedMovies.map((movie) => {
        return <h1 key={movie.id}>{movie.title}</h1>;
      })}
    </div>
  );
};

export default Saved;
