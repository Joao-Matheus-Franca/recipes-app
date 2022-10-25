import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testando se a página de Login', () => {
  it('Tem o título correto', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /login/i });
    expect(title).toBeInTheDocument();
  });

  it('Tem os campos de input de senha e email', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });

  it('Tem o botão para entrar na aplicação e seu funcionamento', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456789');

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
});
