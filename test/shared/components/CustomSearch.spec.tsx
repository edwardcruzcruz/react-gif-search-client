import { describe, expect, test, vi } from "vitest";
import { CustomSearch } from '../../../src/shared/components/CustomSearch';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('CustomSearch',() => {
    test('should render CustomSearch', () => {
        const { container } = render(<CustomSearch onQuery={() => {}}/>);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with the correct value after 700ms', async() => {
        const onQuery = vi.fn();
        render(<CustomSearch onQuery={onQuery}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't'}});
        fireEvent.change(input, { target: { value: 'te'}});
        fireEvent.change(input, { target: { value: 'tes'}});
        fireEvent.change(input, { target: { value: 'test'}});

        // await new Promise((resolve) => setTimeout(resolve, 701)));

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
        //screen.debug();
    });
    test('should call onQuery when button clicked with the imput value', () => {
        const onQuery = vi.fn();
        render(<CustomSearch onQuery={onQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test'}});

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test')
    });
    test('should the input has the correct placeholder value', () => {
        const value = 'Buscar'
        render(<CustomSearch onQuery={()=>{}} placeholder={value}/>);
        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
});