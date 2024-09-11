// tests/test2.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import MyForm from '../src/components/MyForm';

describe('MyForm component', () => {
    it('should update input value and display it correctly', () => {
        const to_input = "Hello, world!";
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

        var a = screen.getByText(to_input);
        expect(a).toBeInTheDocument();

        // Also check the value displayed in the paragraph (if necessary)
    });
});
