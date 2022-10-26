import React from 'react';
import { render } from '@testing-library/react';
import Context from '../../context.js/Context';

const renderWithContext = (component, context) => ({
  ...render(
    <Context.Provider value={ context }>
      {component}
    </Context.Provider>,
  ),
});

export default renderWithContext;
