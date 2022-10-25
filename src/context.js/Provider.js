import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [searchBar, setSearchBar] = useState({ type: '', searchValue: '' });
  const [dataSearch, setDataSearch] = useState([]);
  const [local, setLocal] = useState('');

  const fetchSearchMeals = async (busca) => {
    console.log('busca:', busca);
    switch (busca.type) {
    case 'Ingrediente': {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    case 'Nome': {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    case 'Primeira letra': {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    default: {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setDataSearch(data);
      return data;
    }
    }
  };

  const fetchSearchDrinks = async (busca) => {
    console.log('busca:', busca);
    switch (busca.type) {
    case 'Ingrediente': {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    case 'Nome': {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    case 'Primeira letra': {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${busca.searchValue}`);
      const data = await response.json();
      setDataSearch(data);
      break;
    }
    default: {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setDataSearch(data);
      return data;
    }
    }
  };

  const contexto = useMemo(() => ({
    searchBar,
    setSearchBar,
    dataSearch,
    fetchSearchMeals,
    fetchSearchDrinks,
    local,
    setLocal,
  }), [
    searchBar,
    dataSearch,
    local,
  ]);

  return (
    <Context.Provider value={ contexto }>
      {children}
    </Context.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
