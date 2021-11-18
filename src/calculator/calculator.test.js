import { Calculator } from "./calculator";

test('adding two integers', () => {
    const calc = new Calculator();
    expect(calc.add(1, 1)).toBe(2);
});