import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test("Check the initial value of count", () => {
    const {getByTestId} = render(<Counter initialValue={0} />);
    let counter = Number(getByTestId("count").textContent);
    
    expect(counter).toEqual(0);
});

test("Check the Increment Button", () => {
    const {getByTestId, getByRole} = render(<Counter initialValue={0} />);
    let incrementBtn = getByRole("button", {name: "Increment Count"});
    
    fireEvent.click(incrementBtn);
    let counter = Number(getByTestId("count").textContent);
    expect(counter).toEqual(1);
});