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
        <li className='list-group-item d-flex align-items-center border border-3 rounded-2 p-2 mt-3'>
            <input type="text" className='rounded-2 border-0' value = {movie.title} onChange = {changeHandler} />
            <button className='btn-close' onClick={() => onDelete(movie.id)}></button>
        </li>
    );
});

export default MovieItem;