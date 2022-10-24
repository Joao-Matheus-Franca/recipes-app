import React from 'react';

export default function Header() {
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        src="src/images/profileIcon.svg"
        alt="profile-top"
      />

      <button
        type="button"
        data-testid="search-top-btn"
        src="src/images/searchIcon.svg"
        alt="search-top"
      />

      <h1 data-testid="page-title">Recipes</h1>

    </div>
  );
}
