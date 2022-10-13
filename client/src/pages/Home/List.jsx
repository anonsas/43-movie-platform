import { useState, useEffect, useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';
import Line from './Line';

function List() {
  const { movieList, setMovieList, selectedCategory } = useContext(HomeContext);

  const [totalMovies, setTotalMovies] = useState(null);
  const [sortMovieBy, setSortMovieBy] = useState(null);

  const sortMovieData = [
    {
      value: 'default',
      type: 'default',
    },
    {
      value: 'price_asc',
      type: 'Price 1-9',
    },
    {
      value: 'price_desc',
      type: 'Price 9-1',
    },
    {
      value: 'rating_asc',
      type: 'Rating 1-10',
    },
    {
      value: 'rating_desc',
      type: 'Rating 10-1',
    },
  ];

  useEffect(() => {
    if (movieList === null) return;
    setTotalMovies(movieList.length);
  }, [movieList]);

  useEffect(() => {
    if (sortMovieBy === null) return;

    switch (sortMovieBy) {
      case 'price_asc':
        setMovieList((prevState) => [...prevState].sort((a, b) => a.price - b.price));
        break;
      case 'price_desc':
        setMovieList((prevState) => [...prevState].sort((a, b) => b.price - a.price));
        break;
      case 'rating_asc':
        setMovieList((prevState) => [...prevState].sort((a, b) => a.rating - b.rating));
        break;
      case 'rating_desc':
        setMovieList((prevState) => [...prevState].sort((a, b) => b.rating - a.rating));
        break;
      default:
        setMovieList((prevState) => [...prevState].sort((a, b) => a.row - b.row));
    }
  }, [sortMovieBy, setMovieList]);

  return (
    <div>
      <h3>On this platform we have {totalMovies} movies.</h3>
      <h3>List of categories:</h3>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select
          name="sort"
          id="sort"
          value={sortMovieBy}
          onChange={(e) => setSortMovieBy(e.target.value)}
        >
          {sortMovieData?.map((movie) => (
            <option key={movie.value} value={movie.value}>
              {movie.type}
            </option>
          ))}
        </select>
      </div>
      <div className="list">
        {selectedCategory === 'all'
          ? movieList?.map((movie) => <Line key={movie.id} movie={movie} />)
          : movieList?.map((movie) =>
              movie.categoryTitle === selectedCategory ? (
                <Line key={movie.id} movie={movie} />
              ) : null
            )}
      </div>
    </div>
  );
}

export default List;
