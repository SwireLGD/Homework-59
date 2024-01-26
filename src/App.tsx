import React, { useEffect, useState } from "react";
import MovieForm from "./Components/MovieForm/Form";
import MovieItem from "./Components/Movies/MovieItem";
import IdGenerator from "./Components/IdGenerator/IdGenerator";
import { Movie } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedData = localStorage.getItem('movies');

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect (() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  });

  const addMovie = (title: string) => {
    setMovies([...movies, {id: IdGenerator(), title }]);
  };

  const updateMovie = (id: string, title: string) => {
    setMovies(movies.map(movie => movie.id === id ? { ...movie, title } : movie));
  };

  const deleteMovie = (id: string) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <MovieForm onAdd={addMovie} />
      <ul className="mt-5 text-center d-flex align-items-center flex-column">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} onUpdate={updateMovie} onDelete={deleteMovie} />
        ))}
      </ul>
    </div>
  );
};

export default App;