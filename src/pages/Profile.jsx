import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';

export default function Profile() {
  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Profile </h1>
        <ProfileBtn />
      </Header>
      <main>
        <p data-testid="profile-email">EMAIL</p>
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Favorite Recipes
        </button>
      </main>
      <Footer />
    </div>
  );
}
