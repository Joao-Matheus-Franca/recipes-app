import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';
import Context from '../context.js/Context';

export default function Meals(props) {
  const { setLocal, dataSearch } = useContext(Context);

  useEffect(() => setLocal('Meals'), []);

  useEffect(() => {
    let url = null;
    if (dataSearch.meals?.length === 1) {
      url = dataSearch.meals[0].idMeal;
      console.log(url);
      const { history } = props;
      const path = `/meals/${url}`;
      history.push(path);
    }
  }, [dataSearch]);

  const { history } = props;

  const maxNumber = 12;

  console.log(history.location.pathname);

  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Meals </h1>
        <ProfileBtn />
        <SearchBtn />
        { dataSearch.meals && dataSearch.meals
          .filter((_, i) => i < maxNumber)
          .map((m, i) => (
            <div key={ m.idMeal } data-testid={ `${i}-recipe-card` }>
              <h3 data-testid={ `${i}-card-name` }>{m.strMeal}</h3>
              <img
                data-testid={ `${i}-card-img` }
                src={ m.strMealThumb }
                alt={ `Imagem do prato${m.strMeal}` }
              />
            </div>)) }
      </Header>
    </div>
  );
}

Meals.propTypes = {
  history: PropTypes.objectOf.isRequired,
};
