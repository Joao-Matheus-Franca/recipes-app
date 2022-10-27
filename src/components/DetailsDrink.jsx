function DetailsDrink({ data }) {
  Object.keys(data.drinks[0]).forEach((item) => {
    if (data.drinks[0][item] === null || data.drinks[0][item] === '') {
      delete data.drinks[0][item];
    }
  });

  const detailsData = data.drinks[0];

  const ingredients = Object.entries(detailsData).filter((item) => item[0].includes('strIngredient'));

  const measure = Object.entries(detailsData).filter((item) => item[0].includes('strMeasure'));

  // .forEach((item) => {
  //   if (item[0].includes('strIngredient') || item[0].includes('strMeasure')) {
  //     ingredients.push(item[1]);
  //   }
  // });
  console.log(data.drinks[0]);
  console.log(detailsData);
  console.log(ingredients);
  console.log(measure);

  return (
    <>
      <h1>DETAILS MEAL</h1>
      <img
        src={ data.drinks[0].strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
        style={ { height: 150 } }
      />
      <h2 data-testid="recipe-title">{ data.drinks[0].strMeal }</h2>
      <p data-testid="recipe-category">{ data.drinks[0].strCategory }</p>
      <ul>
        { ingredients.reduce((acc, curr) => {
          console.log(curr[acc]);
          return (acc + 1);
        }, 0)}
      </ul>
      <p data-testid="instructions">{ data.drinks[0].strInstructions }</p>
    </>
  );
}

export default DetailsDrink;
