import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testes da página de Login', () => {
  test('Elementos de Login', () => {
    // const { history } = renderWithRouter(<App />);
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: /login/i });
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');
    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456789');

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    // const { pathName } = history.location;
    // expect(pathName).toBe('/meals');
  });
});
