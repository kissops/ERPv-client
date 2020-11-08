import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ERPv in the App', () => {
  render(<App />);
  const navElement = screen.getByText(/ERPv/i);
  expect(navElement).toBeInTheDocument();
});
