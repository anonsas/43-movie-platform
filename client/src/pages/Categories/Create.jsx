import React, { useContext, useState } from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Create() {
  const { setCreateCategory } = useContext(CategoryContext);

  const [title, setTitle] = useState('documentary');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title) return alert('Please fill in the blanks');

    setCreateCategory(title);
    setTitle('');
  };

  return (
    <form>
      <h2>Select Movie Category:</h2>
      <div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="documentary">Documentary</option>
            <option value="family">Family</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
          </select>
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
