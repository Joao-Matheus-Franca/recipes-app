import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';
import Context from '../context.js/Context';

export default function Drinks(props) {
  const { setLocal, dataSearch } = useContext(Context);

  useEffect(() => setLocal('Drinks'));

  useEffect(() => {
    let url = null;
    if (dataSearch.drinks?.length === 1) {
      url = dataSearch.drinks[0].idDrink;
      console.log(url);
      const { history } = props;
      const path = `/drinks/${url}`;
      history.push(path);
    }
  }, [dataSearch, props]);

  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Drinks </h1>
        <ProfileBtn />
        <SearchBtn />
      </Header>
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf.isRequired,
};
