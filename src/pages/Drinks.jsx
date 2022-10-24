import React from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';

export default function Drinks() {
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
