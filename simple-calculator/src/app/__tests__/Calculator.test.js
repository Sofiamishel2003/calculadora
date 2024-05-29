import { render, fireEvent } from '@testing-library/react';
import Calculator from '../src/app/calculator/components/Calculator';

test('renders calculator', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('0')).toBeInTheDocument();
});

test('handles number input', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  expect(getByText('123')).toBeInTheDocument();
});

test('handles decimal input', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('2'));
  expect(getByText('1.2')).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('5')).toBeInTheDocument();
});

test('performs subtraction', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('3')).toBeInTheDocument();
});

test('handles overflow error', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('9'));
  for (let i = 0; i < 9; i++) {
    fireEvent.click(getByText('9'));
  }
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(getByText('ERROR')).toBeInTheDocument();
});
