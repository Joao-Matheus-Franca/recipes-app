import React, { useState } from 'react';
import SearchBar from './SearchBar';
import image from '../images/searchIcon.svg';

export default function SearchBtn() {
  const [state, setState] = useState(false);

  return (
    <>
      <button
        value="Search"
        type="button"
        data-testid="search-top-btn"
        src={ image }
        onClick={ () => setState(!state) }
      >
        <img src={ image } alt="search-top" />
      </button>
      { state && (<SearchBar />) }
    </>
  );
}
