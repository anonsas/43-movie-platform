import React, { useContext, useState, useRef } from 'react';
import MovieContext from '../../contexts/MovieContext';
import getBase64 from '../../utils/getBase64';

function Create() {
  const { setCreateMovie, categoryList } = useContext(MovieContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [categoryID, setCategoryID] = useState(0);
  const [image, setImage] = useState(null);

  const fileInput = useRef();

  const photoHandler = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setImage(photo))
      .catch((error) => alert(error.message));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !price || !categoryID) return alert('Please fill the blanks!');

    setCreateMovie({
      title,
      price: parseFloat(price),
      categoryID: parseInt(categoryID),
      image,
    });

    setTitle('');
    setPrice('');
    setCategoryID(0);
    setImage(null);
    fileInput.current.value = '';
  };

  return (
    <form className="form">
      <div className="form__inputs">
        <h2>New Movie Form:</h2>
        <div>
          <label htmlFor="category">Movie title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="category">Movie price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div>
          <label>Photo</label>
          <input ref={fileInput} type="file" onChange={photoHandler} />
        </div>

        <div>
          <label htmlFor="category">Movie Category:</label>
          <select
            name="category"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
          >
            <option value={0} disabled>
              Category List
            </option>
            {categoryList?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>

      {image && <img src={image} alt="input" className="form__image" />}
    </form>
  );
}

export default Create;
