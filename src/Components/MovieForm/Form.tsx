import React, { useState } from "react";

type Props = {
    onAdd: (title: string) => void;
  };

const MovieForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
};

export default MovieForm;