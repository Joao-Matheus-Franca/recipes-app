import { useState } from 'react';
import '../styles/recomendation.css';
import PropTypes from 'prop-types';

function Recomendation({ recomendedData }) {
  const six = 6;
  const data = recomendedData.slice(0, six);
  console.log(data);

  const [count, setCount] = useState(1);

  return (
    <>
      <section className="carousel">
        {data.map((item, index) => {
          if (index > count) {
            return (
              <div
                key={ item.idMeal || item.idDrink }
                className="carousel_item"
                data-testid={ `${index}-recommendation-card` }
                style={ { display: 'none' } }
              >
                <img
                  src={ item.strMealThumb || item.strDrinkThumb }
                  alt={ item.strMeal || item.strDrink }
                />
                <p
                  data-testid={ `${index}-recommendation-title` }
                >
                  { item.strMeal || item.strDrink }
                </p>
              </div>
            );
          }
          if (index <= count && index > (count - 2)) {
            return (
              <div
                key={ item.idMeal || item.idDrink }
                className="carousel_item"
                data-testid={ `${index}-recommendation-card` }
              >
                <img
                  src={ item.strMealThumb || item.strDrinkThumb }
                  alt={ item.strMeal || item.strDrink }
                />
                <p
                  data-testid={ `${index}-recommendation-title` }
                >
                  { item.strMeal || item.strDrink }
                </p>
              </div>
            );
          }
          return '';
        })}
      </section>
      <div className="btn_pass">
        <button type="button" onClick={ () => setCount(count + 2) }>
          { '>' }
          {' '}

        </button>
        <button type="button" onClick={ () => setCount(count - 2) }>
          { '<' }
          {' '}

        </button>
      </div>
    </>
  );
}

Recomendation.propTypes = {
  recomendedData: PropTypes.shape({
    meals: PropTypes.obj,
    drinks: PropTypes.obj,
  }),
}.isRequired;

export default Recomendation;
