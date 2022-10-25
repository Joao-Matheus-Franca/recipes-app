import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testando se a página de Meals', () => {
  it('Tem o título correto', () => {
    renderWithRouter(<DoneRecipes />);

    const title = screen.getByRole('heading', { name: /done recipes/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem um botão', () => {
    renderWithRouter(<DoneRecipes />);

    const btnTopProfile = screen.getByTestId('profile-top-btn');
    expect(btnTopProfile).toBeInTheDocument();
  });
});
