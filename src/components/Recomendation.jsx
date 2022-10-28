import '../styles/recomendation.css';

function Recomendation({ recomendedData }) {
  const data = recomendedData.slice(0, 6);
  console.log(data);
  return (
    <section className="carousel">
      {data.map((item, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recommendation-card` }
        >
          <img
            src={ item.strMealThumb || item.strDrinkThumb }
            alt={ item.strMeal || item.strDrink }
            style={ { height: 150 } }
          />
          <p
            data-testid={ `${index}-recommendation-title` }
          >
            { item.strMeal || item.strDrink}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Recomendation;
