import { useContext } from 'react';
import CategoryContext from '../../contexts/CategoryContext';
import Line from './Line';

function List() {
  const { categoryList } = useContext(CategoryContext);

  return (
    <div>
      <h3>List of categories:</h3>
      {categoryList?.map((category) => (
        <Line key={category.id} category={category} />
      ))}
    </div>
  );
}

export default List;
