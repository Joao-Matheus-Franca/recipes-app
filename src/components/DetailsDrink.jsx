import PropTypes from 'prop-types';

function DetailsDrink({ data, recomendedData }) {
  console.log('recomendedData meal:', recomendedData);
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
    </>
  );
}

DetailsDrink.propTypes = {
  data: PropTypes.shape({ meals: PropTypes.obj }),
}.isRequired;

export default DetailsDrink;
