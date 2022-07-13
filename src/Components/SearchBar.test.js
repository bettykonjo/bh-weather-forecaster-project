import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

// test('button has correct color and text before and after click', () => {
//     render(<SearchBar />);
//         // checking initial state
//         const colorButton = screen.getByRole('button', 'lightblue');
//         expect(colorButton).toHaveStyle({ backgroundColor: 'lightgreen' });
//   });
//       // checking the button have attribute submit
//   test('should the button have attribute submit', () => {
//     render(<SearchBar />);
//     const buttonElement = screen.getByRole('button');
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveAttribute('type', 'submit');
//   });
  // checking an input fields and a submit button with text "Search"
  // test('includes an input fields and a submit button with text "Search"', () => {
  //   render(<SearchBar />);
  //   const inputfield = screen.getByLabelText('Search');
  //   expect(inputfield).toBeInTheDocument();
  // });