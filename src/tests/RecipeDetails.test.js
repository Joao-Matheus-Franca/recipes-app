import renderWithContext from './helpers/renderWithContext';
import RecipeDetails from '../pages/RecipeDetails';

describe('Testando o componente RecipeDetails', () => {
  test('Teste da renderização dos elememtos', () => {
    renderWithContext(<RecipeDetails match={ { params: { id: 25 } } } location={ { pathname: '/meals' } } />);
  });
  test('Teste da renderização dos elememtos', () => {
    renderWithContext(<RecipeDetails match={ { params: { id: 25 } } } location={ { pathname: '/drinks' } } />);
  });
});
