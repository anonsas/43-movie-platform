import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';
import Line from './Line';

function List() {
  const { movieList } = useContext(HomeContext);

  return (
    <div>
      <h3>List of categories:</h3>
      <div className="list">
        {movieList?.map((movie) => (
          <Line key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default List;
