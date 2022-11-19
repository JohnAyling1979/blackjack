import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Renders BlackJack', () => {
    render(<Header />);

    const element = screen.getByText(/BlackJack/i);

    expect(element).toBeInTheDocument();
});