import { describe, expect, test } from "vitest";
import { render } from '@testing-library/react';
import { GifsApp } from '../src/GifsApp';

describe("GifsApp", ()=> {
    test('should render component preperly',() => {
        const { container } = render(<GifsApp />);
        expect(container).toMatchSnapshot();
    });
});