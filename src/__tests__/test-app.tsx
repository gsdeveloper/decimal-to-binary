import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

test('if conversion works correctly', () => {
  render(<App />);
  const input = screen.getByTestId('input');
  userEvent.type(input, '50');
  expect(screen.getByTestId('value')).toHaveTextContent('110010');

  userEvent.click(screen.getByRole('button'));
  expect(screen.getByTestId('value')).toHaveTextContent(
    'Please, insert only 0 and 1'
  );

  userEvent.type(input, '110010');
  expect(screen.getByTestId('value')).toHaveTextContent('50');
});
