import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Context from '../../context.js/Context';

const renderWithContext = (component, context) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={ history }>
        <Context.Provider value={ context }>
          {component}
        </Context.Provider>
      </Router>,
    ),
  });
};

export default renderWithContext;
