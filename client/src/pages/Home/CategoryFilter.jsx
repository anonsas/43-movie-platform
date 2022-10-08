import React, { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

function CategoryFilter() {
  const { movieList, setSelectedCategory } = useContext(HomeContext);

  const categories = [...new Set(movieList?.map((movie) => movie.categoryTitle))];

  return (
    <div className="category-filter">
      <button onClick={() => setSelectedCategory('all')}>all</button>
      {categories?.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
