// import React from 'react';
import { useContext } from 'react';
import Context from '../context.js/Context';

function SearchBar() {
  const {
    searchBar,
    setSearchBar,
    fetchSearchMeals,
    fetchSearchDrinks,
    local,
  } = useContext(Context);

  console.log(local);

  return (
    <>
      <input
        data-testid="search-input"
        type="text"
        onChange={ ({ target: { value } }) => (
          setSearchBar({ ...searchBar, searchValue: value })
        ) }
      />
      <label
        htmlFor="search"
        onChange={ ({ target: { value } }) => (
          setSearchBar({ ...searchBar, type: value })
        ) }
      >
        <input
          name="search"
          data-testid="ingredient-search-radio"
          type="radio"
          value="Ingrediente"
        />
        Ingrediente
        <input
          name="search"
          data-testid="name-search-radio"
          type="radio"
          value="Nome"
        />
        Nome
        <input
          name="search"
          data-testid="first-letter-search-radio"
          type="radio"
          value="Primeira letra"
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => {
          if (searchBar.type === 'Primeira letra' && searchBar.searchValue.length > 1) {
            global.alert('Your search must have only 1 (one) character');
          } else if (local === 'Meals') {
            fetchSearchMeals(searchBar);
          } else {
            fetchSearchDrinks(searchBar);
          }
        } }
      >
        Buscar
      </button>
    </>
  );
}

export default SearchBar;
