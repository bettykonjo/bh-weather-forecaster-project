import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

test('button has correct color and text before and after click', () => {
    render(<SearchBar />);
  
    // // checking initial state
    // const colorButton = screen.getByRole('button', 'Change to blue');
    // expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
        // checking initial state
        const colorButton = screen.getByRole('button', 'Change to grey');
        expect(colorButton).toHaveStyle({ backgroundColor: 'green' });
  
    // // triggering click
    // userEvent.click(colorButton);
  
    // // checking updated state
    // expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    // expect(colorButton).toHaveTextContent('Change to red');
  });

  test('should the button have attribute submit', () => {
    render(<SearchBar />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('includes an input fields and a submit button with text "Search"', () => {
    render(<SearchBar />);
    const inputfield = screen.getByLabelText('Weather Info For');
    expect(inputfield).toBeInTheDocument();
  });