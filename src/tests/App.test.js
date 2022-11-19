import { render, screen } from '@testing-library/react';
import App from '../container/App';

test('renders App', () => {
  render(<App />);

  const linkElement = screen.getByText(/App/i);
  
  expect(linkElement).toBeInTheDocument();
});