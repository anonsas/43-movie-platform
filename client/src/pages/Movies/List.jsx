import { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';
import Line from './Line';

function List() {
  const { movieList } = useContext(MovieContext);

  return (
    <div>
      <h3>List of movies:</h3>
      <div className="list">
        {movieList?.map((movie) => (
          <Line key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default List;
