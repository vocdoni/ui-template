import { render } from '@src/test-utils';
import { screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
