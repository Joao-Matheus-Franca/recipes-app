import { React } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';

export default function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Profile </h1>
        <ProfileBtn />
      </Header>
      <main>
        {userEmail && <p data-testid="profile-email">{ userEmail.email }</p> }
        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>

        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => {
              localStorage.removeItem('user');
              localStorage.removeItem('doneRecipes');
              localStorage.removeItem('favoriteRecipes');
              localStorage.removeItem('inProgressRecipes');
            } }
          >
            Logout
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
