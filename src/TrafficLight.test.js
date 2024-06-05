import React from 'react';
import { render, screen} from '@testing-library/react';
import {act} from 'react';
import TrafficLight from './TrafficLight';

describe('TrafficLight Component', () => {
    test('renders red light initially', () => {
        render(<TrafficLight />);
        const redLight = screen.getByTestId('red-light');
        expect(redLight).toHaveClass('bg-danger');
    });

    test('transitions to yellow light after 5 seconds', async () => {
        jest.useFakeTimers();
        render(<TrafficLight />);

        const redLight = screen.getByTestId('red-light');
        expect(redLight).toHaveClass('bg-danger');

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        const yellowLight = screen.getByTestId('yellow-light');
        expect(yellowLight).toHaveClass('bg-warning');
    });

    test('transitions to green light after 7 seconds', async () => {
        jest.useFakeTimers();
        render(<TrafficLight />);

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        const greenLight = screen.getByTestId('green-light');
        expect(greenLight).toHaveClass('bg-success');
    });

    test('transitions back to red light after 10 seconds', async () => {
        jest.useFakeTimers();
        render(<TrafficLight />);

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        act(() => {
            jest.advanceTimersByTime(3000);
        });

        const redLight = screen.getByTestId('red-light');
        expect(redLight).toHaveClass('bg-danger');
    });
});
