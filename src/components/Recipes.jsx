import { useContext, useEffect, useState } from 'react';
import Context from '../context.js/Context';

function Recipes() {
  const { local } = useContext(Context);

  const [state, setState] = useState([]);

  const [categories, setCategories] = useState([]);

  const fetchRecipes = async (page) => {
    if (page === 'Meals') {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const respCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      const dataCategories = await respCategories.json();
      setState(data.meals);
      setCategories(dataCategories.meals);
    } if (page === 'Drinks') {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const respCategories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      const dataCategories = await respCategories.json();
      setState(data.drinks);
      setCategories(dataCategories.drinks);
    }
  };

  const fetchCategory = async (category) => {
    if (local === 'Meals') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      setState(data.meals);
    }
    if (local === 'Drinks') {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      setState(data.drinks);
    }
  };

  useEffect(() => { fetchRecipes(local); }, [local]);

  const maxNumber = 12;
  const maxCategories = 5;

  return (
    <>
      { categories.filter((_, i) => i < maxCategories).map((c) => (
        <button
          key={ c.strCategory }
          type="button"
          data-testid={ `${c.strCategory}-category-filter` }
          onClick={ () => fetchCategory(c.strCategory) }
        >
          { c.strCategory }
        </button>
      )) }
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => fetchRecipes(local) }
      >
        All
      </button>
      { local === 'Meals' ? state.filter((_, i) => i < maxNumber).map((r, i) => (
        <div key={ r.idMeal } data-testid={ `${i}-recipe-card` }>
          <h3 data-testid={ `${i}-card-name` }>{r.strMeal}</h3>
          <img
            data-testid={ `${i}-card-img` }
            src={ r.strMealThumb }
            alt={ `Imagem do prato${r.strMeal}` }
          />
        </div>
      )) : state.filter((_, i) => i < maxNumber)
        .map((m, i) => (
          <div key={ m.idDrink } data-testid={ `${i}-recipe-card` }>
            <h3 data-testid={ `${i}-card-name` }>{m.strDrink}</h3>
            <img
              data-testid={ `${i}-card-img` }
              src={ m.strDrinkThumb }
              alt={ `Imagem do prato${m.strDrink}` }
            />
          </div>))}
    </>
  );
}

export default Recipes;
