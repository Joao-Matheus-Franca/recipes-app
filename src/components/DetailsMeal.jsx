import { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Recomendation from './Recomendation';
import StartRecipe from './StartRecipe';
import shareImage from '../images/shareIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import noFavorite from '../images/whiteHeartIcon.svg';

function DetailsMeal({ data, recomendedData, pathname }) {
  // console.log('recomendedData meal:', recomendedData);
  const ingredientes = (initialData) => {
    const recipes = Object.entries(initialData.meals[0])
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
    if (lastFavorites.find((r) => r.id === object.id)) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify(lastFavorites
        .filter((r) => r.id !== object.id)));
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([...lastFavorites, object]));
  };

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [fav, setFav] = useState(false);

  return (
    <>
      <h1>MEAL DETAILS</h1>
      <img
        src={ data.meals[0].strMealThumb }
        alt=""
        data-testid="recipe-photo"
        style={ { height: 150 } }
      />
      <h2 data-testid="recipe-title">{ data.meals[0].strMeal }</h2>
      <p data-testid="recipe-category">{ data.meals[0].strCategory }</p>
      <button
        type="button"
        src={ (favorites && favorites.find((r) => r.id === data.meals[0].idMeal))
          ? favorite : noFavorite }
        data-testid="favorite-btn"
        onClick={ () => {
          saveFavorites({
            id: data.meals[0].idMeal,
            type: 'meal',
            nationality: data.meals[0].strArea,
            category: data.meals[0].strCategory,
            alcoholicOrNot: '',
            name: data.meals[0].strMeal,
            image: data.meals[0].strMealThumb,
          });
          setFav(!fav);
        } }
      >
        { (favorites && favorites.find((r) => r.id === data.meals[0].idMeal))
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
      <p data-testid="instructions">{ data.meals[0].strInstructions }</p>
      <iframe
        title={ data.meals[0].strMeal }
        src={ data.meals[0].strYoutube }
        width="420"
        height="315"
        data-testid="video"
      />
      {recomendedData && <Recomendation recomendedData={ recomendedData.drinks } />}
      {!doneStorage
        .find((r) => r.id === data.meals[0].idMeal)
        && (<StartRecipe id={ data.meals[0].idMeal } local="meals" />)}
    </>
  );
}

DetailsMeal.propTypes = {
  data: PropTypes.shape({ meals: PropTypes.obj }),
  pathname: PropTypes.string,
}.isRequired;
export default DetailsMeal;
