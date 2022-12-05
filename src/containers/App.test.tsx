import { render } from '@src/test-utils';
import { screen } from '@testing-library/react';
import { App } from './App';

test('renders input label', () => {
  render(<App />)
  const linkElement = screen.getByText(/Specify a process ID/i)
  expect(linkElement).toBeInTheDocument()
})
