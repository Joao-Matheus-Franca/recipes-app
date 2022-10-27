function DetailsMeal({ data }) {
  console.log(data);
  const ingredients = [];
  console.log('props meal:', data.meals[0].strIngredient1);
  Object.entries(data.meals[0])
    .forEach((item) => {
      if (item[0].includes('strIngredient') || item[0].includes('strMeasure')) {
        ingredients.push(item[1]);
        console.log(item);
      }
    });
  console.log(ingredients);
  return (
    <>
      <h1>DETAILS MEAL</h1>
      <img
        src={ data.meals[0].strMealThumb }
        alt=""
        data-testid="recipe-photo"
        style={ { height: 150 } }
      />
      <h2 data-testid="recipe-title">{ data.meals[0].strMeal }</h2>
      <p data-testid="recipe-category">{ data.meals[0].strCategory }</p>
      <ul>
        { ingredients.map((item, index) => (
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

export default DetailsMeal;
