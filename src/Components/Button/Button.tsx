import React from 'react';

interface Props {
    onClick: () => Promise<void>;
};

const Button: React.FC<Props> = React.memo(({ onClick }) => {
  return <button type='button' className='btn btn-primary' onClick={onClick}>New Joke</button>;
});

export default Button;