import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import renderWithRouter from './helpers/renderWithRouter';

test('Farewell, front-end', () => {
  renderWithRouter(<Header />);
});
