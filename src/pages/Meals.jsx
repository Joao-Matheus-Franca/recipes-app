import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';
import Context from '../context.js/Context';

export default function Meals() {
  const { setLocal } = useContext(Context);

  useEffect(() => setLocal('Meals'));

  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Meals </h1>
        <ProfileBtn />
        <SearchBtn />
      </Header>
    </div>
  );
}
