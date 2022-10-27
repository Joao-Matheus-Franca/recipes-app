import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Provider from './context.js/Provider';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route path="/meals/:id" component={ Details } />
        <Route path="/meals/:id/in-progress" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route path="/drinks/:id" component={ Details } />
        <Route path="/drinks/:id/in-progress" component={ Drinks } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Provider>
    </Switch>
  );
}

export default App;
