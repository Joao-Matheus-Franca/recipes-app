import React from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Favorite Recipes </h1>
        <ProfileBtn />
      </Header>
    </div>
  );
}
