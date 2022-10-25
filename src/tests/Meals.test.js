import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Meals from '../pages/Meals';

describe('Testando se a página de Meals', () => {
  it('Tem o título correto', () => {
    renderWithRouter(<Meals />);

    const title = screen.getByRole('heading', { name: /meals/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem dois botões', () => {
    renderWithRouter(<Meals />);

    const btnProfile = screen.getByTestId('profile-top-btn');
    const btnSearch = screen.getByTestId('search-top-btn');
    expect(btnProfile).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();
  });

  it('Funcionalidade do botão de profile', () => {
    const { history } = renderWithRouter(<Meals />);

    const btnProfile = screen.getByTestId('profile-top-btn');
    expect(btnProfile).toBeInTheDocument();

    userEvent.click(btnProfile);

    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });

  it('Funcionalidade do botão de search', () => {
    renderWithRouter(<Meals />);

    const btnTopSearch = screen.getByTestId('search-top-btn');
    expect(btnTopSearch).toBeInTheDocument();

    userEvent.click(btnTopSearch);

    const inputSerach = screen.getByTestId('search-input');
    expect(inputSerach).toBeInTheDocument();

    const inputSerachIngredient = screen.getByTestId('ingredient-search-radio');
    expect(inputSerachIngredient).toBeInTheDocument();

    const inputSerachName = screen.getByTestId('name-search-radio');
    expect(inputSerachName).toBeInTheDocument();

    const inputSerachFirstLetter = screen.getByTestId('first-letter-search-radio');
    expect(inputSerachFirstLetter).toBeInTheDocument();

    const btnExcBuscar = screen.getByTestId('exec-search-btn');
    expect(btnExcBuscar).toBeInTheDocument();

    // userEvent.click(btnExcBuscar);
    // expect(global.fetch).toBeCalled();
  });
});
