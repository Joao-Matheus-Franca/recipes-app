import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../pages/Profile';

describe('Testando se a página de Meals', () => {
  it('Tem o título correto', () => {
    renderWithRouter(<Profile />);

    const title = screen.getByRole('heading', { name: /profile/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem um botão', () => {
    renderWithRouter(<Profile />);

    const btnTopProfile = screen.getByTestId('profile-top-btn');
    expect(btnTopProfile).toBeInTheDocument();
  });
});
