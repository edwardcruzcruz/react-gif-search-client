import {describe, test, expect} from 'vitest';
import { render,screen } from '@testing-library/react';
import { CustomHeader} from '../../../src/shared/components/CustomHeader';

describe("CustomHeader",() => {
    const title = 'Test title';
    const description = 'Test description';
    test('should render the title correctly', () => {
        render(<CustomHeader title={title} description={description} />);
        //screen.debug();
        const firstTitleH1 = screen.getByRole('heading',{
            level: 1 //h1
        });
        //console.log(firstTitleH1?.innerHTML);
        expect(firstTitleH1?.innerHTML).toBe(title);
    });
    test('should render the description when provided', () => {
        const { container } = render(<CustomHeader title={title} description={description} />);
        //screen.debug();
        //const firstP = container.querySelector('p');
        const firstP = screen.getByRole('paragraph');
        //console.log();
        expect(firstP?.innerHTML).toBeDefined();
        expect(firstP?.innerHTML).toBe(description);    
    });
    test('should not render the description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        //screen.debug();
        const h1 = container.querySelector('h1');
        const firstP = container.querySelector('p');
        //console.log(firstP);
        expect(h1?.innerHTML).toBeDefined();
        expect(h1?.innerHTML).toBe(title);
        expect(firstP?.innerHTML).toBeUndefined();
    });
});