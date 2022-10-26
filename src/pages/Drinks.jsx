import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';
import Context from '../context.js/Context';
import Footer from '../components/Footer';

export default function Drinks(props) {
  const { setLocal, dataSearch } = useContext(Context);

  useEffect(() => setLocal('Drinks'), []);

  useEffect(() => {
    let url = null;
    if (dataSearch.drinks?.length === 1) {
      url = dataSearch.drinks[0].idDrink;
      console.log(url);
      const { history } = props;
      const path = `/drinks/${url}`;
      history.push(path);
    }
    if (dataSearch.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [dataSearch]);

  const { history: { location: { pathname } } } = props;

  const maxNumber = 12;

  console.log(pathname);

  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Drinks </h1>
        <ProfileBtn />
        <SearchBtn />
        { dataSearch.drinks && dataSearch.drinks
          .filter((_, i) => i < maxNumber)
          .map((m, i) => (
            <div key={ m.idDrink } data-testid={ `${i}-recipe-card` }>
              <h3 data-testid={ `${i}-card-name` }>{m.strDrink}</h3>
              <img
                data-testid={ `${i}-card-img` }
                src={ m.strDrinkThumb }
                alt={ `Imagem do prato${m.strDrink}` }
              />
            </div>)) }
      </Header>
      { pathname === '/drinks' && <Footer /> }
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({ location: PropTypes.shape({ pathname: PropTypes.string }) }),
}.isRequired;
