import React from 'react';
import { Movie } from '../../types';

type MovieItem = {
  movie: Movie;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
};

const MovieItem: React.FC<MovieItem> = React.memo(({ movie, onUpdate, onDelete }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(movie.id, e.target.value);
    };

    return (
        <li>
            <input type="text" value = {movie.title} onChange = {changeHandler} />
        </li>
    );
});

export default MovieItem;