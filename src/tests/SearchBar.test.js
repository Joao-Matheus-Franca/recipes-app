import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste do componente SearchBar', () => {
  test('Teste das funcionalidades de buscar pela barra de pesquisa', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const entryButton = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456789');
    userEvent.click(entryButton);

    const searchTopButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchTopButton);

    const searchInput = screen.getByTestId('search-input');
    const inputSerachIngredient = screen.getByTestId('ingredient-search-radio');
    const inputSearchName = screen.getByTestId('name-search-radio');
    const inputSerachFirstLetter = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'sugar');
    userEvent.click(inputSerachIngredient);
    userEvent.click(searchButton);

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'pizza');
    userEvent.click(inputSearchName);
    userEvent.click(searchButton);

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'p');
    userEvent.click(inputSerachFirstLetter);
    userEvent.click(searchButton);

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'pamonha');
    userEvent.click(inputSerachFirstLetter);
    userEvent.click(searchButton);
  });
});
