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
        <form className="form-group d-flex justify-content-center mt-5" onSubmit={submitHandler}>
            <input type="text" className="form-control w-75" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
};

export default MovieForm;