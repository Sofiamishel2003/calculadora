import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../calculator/components/Calculator';

test('renders calculator', () => {
  const { getByText } = render(<Calculator />);
  const displayElement = getByText((content, element) => {
    return element.className === 'display' && content === '0';
  });
  expect(displayElement).toBeInTheDocument();
});

test('handles number input', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  const displayElement = getByText((content, element) => {
    return element.className === 'display' && content === '123';
  });
  expect(displayElement).toBeInTheDocument();
});

test('handles decimal input', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('2'));
  const displayElement = getByText((content, element) => {
    return element.className === 'display' && content === '1.2';
  });
  expect(displayElement).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const displayElement = getByText((content, element) => {
    return element.className === 'display' && content === '5';
  });
  expect(displayElement).toBeInTheDocument();
});

test('performs subtraction', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText((content, element) => {
    return element.className === 'display' && content === '3';
  });
  expect(displayElement).toBeInTheDocument();
});

