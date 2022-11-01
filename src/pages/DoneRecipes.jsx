import React from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';

export default function DoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Done Recipes </h1>
        <ProfileBtn />
      </Header>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-meal-btn">Meals</button>
      <button type="button" data-testid="filter-by-drink-btn">Meals</button>
      {doneRecipes && doneRecipes.map((r, i) => (
        <div key={ r.id }>
          <img
            src={ r.image }
            alt="Imagem da receitas"
            data-testid={ `${i}-horizontal-image` }
          />
          <p data-testid={ `${i}-horizontal-top-text` }>{ r.category }</p>
          <p data-testid={ `${i}-horizontal-name` }>{ r.name }</p>
          <p data-testid={ `${i}-horizontal-done-date` }>{ r.doneDate }</p>
          <button
            type="button"
            data-testid={ `${i}-horizontal-share-btn` }
          >
            Compartilhar
          </button>
          { r.tags.map((t, ix) => (
            <ul key={ ix }>
              <li data-testid={ `${i}-${t}-horizontal-tag` }>{ t }</li>
            </ul>))}
        </div>
      ))}
    </div>
  );
}

// As tags da receita devem possuir o atributo data-testid=${index}-${tagName}-horizontal-tag;
