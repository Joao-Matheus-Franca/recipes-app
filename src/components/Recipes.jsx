import { useContext, useEffect, useState } from 'react';
import Context from '../context.js/Context';

function Recipes() {
  const { local } = useContext(Context);

  const [state, setState] = useState([]);

  const fetchRecipes = async (page) => {
    if (page === 'Meals') {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setState(data.meals);
      return data;
    } if (page === 'Drinks') {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setState(data.drinks);
      return data;
    }
  };

  useEffect(() => { fetchRecipes(local); }, [local]);

  const maxNumber = 12;

  return (
    <>
      <div />
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
