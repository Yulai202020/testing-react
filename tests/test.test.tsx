import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

import Home from '../src/components/Home/Home';
import Button from '../src/components/Button/Button';
import MyForm from '../src/components/MyForm/MyForm';

describe('Testing react', () => {
    it('Testing Home page', () => {
        render(<Home />);
        expect(screen.getByText("Home Page")).toBeInTheDocument();
    });

    it('Testing Button', () => {
        render(<Button />);

        expect(screen.queryByText("Hello")).not.toBeInTheDocument();

        // clicking
        const button = screen.getByRole('button')
        fireEvent.click(button)

        // its cloud hello in document
        expect(screen.getByText("Hello")).toBeInTheDocument();

        // clicking again
        fireEvent.click(button);

        // its gotta hide
        expect(screen.queryByText("Hello")).not.toBeInTheDocument();
    });

    it('should update input value and display it correctly', () => {
        const to_input = "Yulai";
        render(<MyForm />);

        // Find the input element by its label
        const inputElement = screen.getByLabelText("input");
      
        // Check initial value (should be empty)
        expect(inputElement.value).toBe('');
      
        // Simulate user typing into the input
        fireEvent.change(inputElement, { target: { value: to_input } });
      
        // Check if the value has been updated
        expect(inputElement.value).toBe(to_input);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        var a = screen.getByText(`Hello ${to_input}!`);
        expect(a).toBeInTheDocument();

        // Also check the value displayed in the paragraph (if necessary)
    });
});
