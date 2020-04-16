import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getAllByText } = render(<App />)
  const elements = getAllByText(/Product Photo/i)
  console.log(elements)
  // expect(linkElement).toBeInTheDocument();
});
