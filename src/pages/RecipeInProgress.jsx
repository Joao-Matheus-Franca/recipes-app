import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DrinksInProgress from '../components/DrinksInProgress';
import MealsInProgress from '../components/MealsInProgress';

export default function RecipeInProgress(props) {
  const { match: { params: { id } } } = props;
  const { location: { pathname } } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (pathname.includes('drink')) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <div>
      {
        (pathname.includes('drinks') && data) ? (
          <DrinksInProgress
            data={ data }
            pathname={ pathname }
          />
        ) : (<MealsInProgress
          data={ data }
          pathname={ pathname }
        />)
      }
    </div>
  );
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({ location: PropTypes.shape({ pathname: PropTypes.string }) }),
}.isRequired;
