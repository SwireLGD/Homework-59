import React, { useEffect, useState } from "react";
import MovieForm from "./Components/MovieForm/Form";
import MovieItem from "./Components/Movies/MovieItem";
import IdGenerator from "./Components/IdGenerator/IdGenerator";
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
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

  
  // Задание 2

  const [joke, setJoke] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setJoke(data.value);
      };

    } catch (error) {
      console.error('Ошибка при получении данных с сервера', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div>
      <MovieForm onAdd={addMovie} />
      <ul className="mt-5 text-center d-flex align-items-center flex-column">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} onUpdate={updateMovie} onDelete={deleteMovie} />
        ))}
      </ul>
    </div>
    <div className="text-center">
      {isLoading ? <Loader /> : <p>{joke}</p>}
      <Button onClick={fetchData} /> 
    </div>
    </>
  );
};

export default App;