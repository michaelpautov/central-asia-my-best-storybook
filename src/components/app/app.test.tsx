import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders Asia Dev Fest 2020', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Asia Dev Fest 2020/i);
  expect(linkElement).toBeInTheDocument();
});
