import React from 'react';

function SearchBar() {
  return (
    <>
      <input data-testid="search-input" type="text" />
      Ingrediente
      <input data-testid="ingredient-search-radio" type="radio" />
      Nome
      <input data-testid="name-search-radio" type="radio" />
      Primeira letra
      <input data-testid="first-letter-search-radio" type="radio" />
      <button data-testid="exec-search-btn" type="button">Buscar</button>
    </>
  );
}

export default SearchBar;
