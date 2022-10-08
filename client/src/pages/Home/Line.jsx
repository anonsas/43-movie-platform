import React, { useState, useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';
import NoImage from '../../assets/NoImage.jpeg';

function Line({ movie }) {
  const { setRatingData } = useContext(HomeContext);

  const [rating, setRating] = useState(1);

  const movieRatingHandler = () => {
    setRatingData({
      movieID: movie.id,
      rating,
    });

    setRating(1);
  };

  return (
    <div className="line">
      <div className="line__content">
        {movie.image ? (
          <img src={movie.image} alt={movie.title} className="line__image" />
        ) : (
          <img src={NoImage} alt={movie.title} className="line__image" />
        )}
        <p>Title: {movie.title}</p>
        <p>Price: {movie.price} &euro;</p>
        <p>
          Category: <b>{movie.categoryTitle}</b>
        </p>
        <p>Rating: {movie.rating ?? 'No Rating'}</p>
        <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button onClick={movieRatingHandler}>Rate</button>
      </div>
    </div>
  );
}

export default Line;
