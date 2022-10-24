import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Testes da página de Login', () => {
  test('Elementos de Login', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const title = screen.getByRole('heading', { name: /login/i });
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
