import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';
import Line from './Line';

function List() {
  const { moveList } = useContext(HomeContext);

  return (
    <div>
      <h3>List of categories:</h3>
      {moveList?.map((movie) => (
        <Line key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default List;
