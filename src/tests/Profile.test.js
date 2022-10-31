import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../pages/Profile';

describe('Testando se a página de Meals', () => {
  const email = 'michel.ferreira.melo@gmail.com';
  it('Tem o título correto', () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    renderWithRouter(<Profile />);

    const title = screen.getByRole('heading', { name: /profile/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem um botão', () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    renderWithRouter(<Profile />);

    const btnTopProfile = screen.getByTestId('profile-top-btn');
    expect(btnTopProfile).toBeInTheDocument();
  });

  it('Tem três botões de redirecionamento', () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    renderWithRouter(<Profile />);

    const btnProfileDone = screen.getByTestId('profile-done-btn');
    expect(btnProfileDone).toBeInTheDocument();

    const btnProfileFavorite = screen.getByTestId('profile-favorite-btn');
    expect(btnProfileFavorite).toBeInTheDocument();

    const btnProfileLogout = screen.getByTestId('profile-logout-btn');
    expect(btnProfileLogout).toBeInTheDocument();
  });

  it('Tem três botões de redirecionamento', () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    const { history } = renderWithRouter(<Profile />);

    const btnProfileLogout = screen.getByTestId('profile-logout-btn');
    userEvent.click(btnProfileLogout);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
