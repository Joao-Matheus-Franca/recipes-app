import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../pages/Meals';

describe('Testando o componente Footer', () => {
  it('Tem o botões de drinks e meals', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456789');
    userEvent.click(button);

    const btnDrinks = screen.getByTestId('drinks-bottom-btn');
    const btnMeals = screen.getByTestId('meals-bottom-btn');

    expect(btnDrinks).toBeInTheDocument();
    expect(btnMeals).toBeInTheDocument();
  });
});
