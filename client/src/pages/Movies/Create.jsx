import React, { useContext, useState } from 'react';
import MovieContext from '../../contexts/MovieContext';

function Create() {
  const { setCreateCategory } = useContext(MovieContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setCreateCategory({ title });
    setTitle('documentary');
  };

  return (
    <form>
      <h2>Select Movie Category:</h2>
      <div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
