import PropTypes from 'prop-types';

function DetailsMeal({ data }) {
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
    </>
  );
}

DetailsMeal.propTypes = {
  data: PropTypes.shape({ meals: PropTypes.obj }),
}.isRequired;
export default DetailsMeal;
