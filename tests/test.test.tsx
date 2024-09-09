import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

import Home from '../src/components/Home';
import Greet from '../src/components/Greet';
import Button from '../src/components/Button';

describe('Testing react', () => {
    it('Testing Home page', () => {
        render(<Home />);
        expect(screen.getByText("Home Page")).toBeInTheDocument();
    });

    it('Testing Greeting', () => {
        const name = "Yulai";
        render(<Greet name={name} />);
        expect(screen.getByText(`Hello ${name}!`)).toBeInTheDocument();
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
});
