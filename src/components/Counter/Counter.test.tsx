import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('The Counter component', () => {
    describe('If the button is not clicked', () => {
        it('should display 0', () => {
            const counter = render(<Counter />);
            const paragraph = counter.getByText('The number of clicks: 0', { selector: 'p' });

            expect(paragraph).toBeDefined();
        });
    });

    describe('If the button is clicked once', () => {
        it('should display 1', () => {
            const counter = render(<Counter />);
            const button = counter.getByText('Click', { selector: 'button' });

            fireEvent.click(button);

            const paragraph = counter.getByText('The number of clicks: 1', { selector: 'p' });

            expect(paragraph).toBeDefined();
        });
    });
});
