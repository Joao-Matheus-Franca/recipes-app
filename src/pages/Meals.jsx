import React from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import SearchBtn from '../components/SearchBtn';

export default function Meals() {
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
