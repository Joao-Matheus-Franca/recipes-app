import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recipes from '../components/Recipes';
import renderWithContext from './helpers/renderWithContext';

describe('Testes do componente Recipes', () => {
  const contextMeals = {
    local: 'Meals',
  };
  const mockMeals = {
    meals: [{
      idMeal: 1,
      strMeal: 'Hambúrguer',
      strMealThumb: 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg',
      strCategory: 'Fast Food',
    }],
  };

  const contextDrinks = {
    local: 'Drinks',
  };
  const mockDrinks = {
    drinks: [{
      idMeal: 1,
      strMeal: 'MilkShake',
      strMealThumb: 'https://img.freepik.com/fotos-premium/tres-copos-de-milkshake-de-sabores-variados-milkshake-de-chocolate-baunilha-e-morango_434193-2702.jpg?w=2000',
      strCategory: 'Fast Food',
    }],
  };

  test('Teste de renderizaçãos dos elementos na página Meals', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockMeals),
    }));

    renderWithContext((<Recipes />), contextMeals);

    const categoryButton = await screen.findByText('Fast Food');
    expect(categoryButton).toBeInTheDocument();
    userEvent.click(categoryButton);
  });

  test('Teste de renderizaçãos dos elementos com a função All', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ...mockMeals }),
    }));

    renderWithContext(<Recipes />, contextMeals);

    const allButton = await screen.findByText('All');
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);
  });

  test('Teste de renderizaçãos dos elementos na página Drinks', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockDrinks),
    }));

    renderWithContext(<Recipes />, contextDrinks);

    const categoryButton = await screen.findByText('Fast Food');
    expect(categoryButton).toBeInTheDocument();
    userEvent.click(categoryButton);
  });
});
