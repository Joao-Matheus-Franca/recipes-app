import { screen } from '@testing-library/react';
import renderWithContext from './helpers/renderWithContext';
import RecipeInProgress from '../pages/RecipeInProgress';

describe('Testando o componente RecipeDetails', () => {
  const mockMeals = {
    meals: [{
      idMeal: 1,
      strMeal: 'Hambúrguer',
      strMealThumb: 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg',
      strCategory: 'Fast Food',
    }],
  };
  const mockDrinks = {
    drinks: [{
      idMeal: 1,
      strMeal: 'MilkShake',
      strMealThumb: 'https://img.freepik.com/fotos-premium/tres-copos-de-milkshake-de-sabores-variados-milkshake-de-chocolate-baunilha-e-morango_434193-2702.jpg?w=2000',
      strCategory: 'Fast Food',

    }],
  };
  test('Teste da renderização dos elememtos', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockMeals),
    }));
    renderWithContext(<RecipeInProgress match={ { params: { id: 25 } } } location={ { pathname: '/meals' } } />);
    const loading = await screen.findByText('Carregando...');
    expect(loading).toBeInTheDocument();
    const name = await screen.findByTestId('recipe-photo');
    expect(name).toBeInTheDocument();
  });
  test('Teste da renderização dos elememtos', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockDrinks),
    }));
    renderWithContext(<RecipeInProgress match={ { params: { id: 25 } } } location={ { pathname: '/drinks' } } />);
    const loading = await screen.findByText('Carregando...');
    expect(loading).toBeInTheDocument();
    const name = await screen.findByTestId('recipe-photo');
    expect(name).toBeInTheDocument();
  });
});
