import { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Recomendation from './Recomendation';
import StartRecipe from './StartRecipe';
import shareImage from '../images/shareIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import noFavorite from '../images/whiteHeartIcon.svg';

function DetailsDrink({ data, recomendedData, pathname }) {
  // console.log('recomendedData meal:', recomendedData);
  const ingredientes = (initialData) => {
    const recipes = Object.entries(initialData.drinks[0])
      .filter(
        ([key, value]) => (key.includes('strIngredient') || key.includes('strMeasure'))
      && value && value !== ' ',
      );
    const item = recipes
      .reduce((acc, [key, value]) => {
        if (key.includes('strIngredient')) {
          acc[key] = value;
        }
        return acc;
      }, {});
    const quantidade = recipes
      .reduce((acc, [key, value]) => {
        if (key.includes('strMeasure')) {
          acc[key] = value;
        }
        return acc;
      }, {});
    return Object.values(item)
      .map((e, i) => `${e} ${Object.values(quantidade)[i]}`);
  };

  const ingrediente = ingredientes(data);

  // A seguinte linha será apagada após implementar o botão para finalizar receitas:
  localStorage.setItem('doneRecipes', JSON.stringify([]));

  const doneStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  const [link, setLink] = useState(false);

  // const time = 1000;

  const saveFavorites = (object) => {
    const lastFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (lastFavorites === null) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify([object]));
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([...lastFavorites, object]));
  };

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));

  console.log(data);

  return (
    <>
      <h1>DRINK DETAILS</h1>
      <img
        src={ data.drinks[0].strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
        style={ { height: 150 } }
      />
      <h2 data-testid="recipe-title">{ data.drinks[0].strDrink }</h2>
      <p data-testid="recipe-category">{ data.drinks[0].strAlcoholic }</p>
      <button
        type="button"
        src={ (favorites && favorites.find((r) => r.id === data.drinks[0].idDrink))
          ? favorite : noFavorite }
        data-testid="favorite-btn"
        onClick={ () => saveFavorites({
          id: data.drinks[0].idDrink,
          type: 'drink',
          nationality: '',
          category: data.drinks[0].strCategory,
          alcoholicOrNot: data.drinks[0].strAlcoholic,
          name: data.drinks[0].strDrink,
          image: data.drinks[0].strDrinkThumb,
        }) }
      >
        { (favorites && favorites.find((r) => r.id === data.drinks[0].idDrink))
          ? <img src={ favorite } alt="Receita favoritada" />
          : <img src={ noFavorite } alt="Receita não favoritada" /> }
      </button>
      <button
        type="button"
        data-testid="share-btn"
        src={ shareImage }
        onClick={ () => {
          copy(`http://localhost:3000${pathname}`);
          setLink(true);
          // setTimeout(() => setLink(false), time);
        } }
      >
        <img src={ shareImage } alt="Compartilhar" />
      </button>
      {link && <p>Link copied!</p>}
      <ul>
        { ingrediente.map((item, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { item }
          </li>))}
      </ul>
      <p data-testid="instructions">{ data.drinks[0].strInstructions }</p>
      {recomendedData && <Recomendation recomendedData={ recomendedData.meals } />}
      {!doneStorage
        .find((r) => r.id === data.drinks[0].idDrink)
        && (<StartRecipe id={ data.drinks[0].idDrink } local="drinks" />)}
    </>
  );
}

DetailsDrink.propTypes = {
  data: PropTypes.shape({ meals: PropTypes.obj }),
}.isRequired;

export default DetailsDrink;
