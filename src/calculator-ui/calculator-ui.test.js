/**
 * @jest-environment jsdom
 */

import { CalculatorUI } from "./calculator-ui";

 test('check if calculator UI is added', () => {
    const calcUI = new CalculatorUI();
    const countBefore = document.body.childElementCount;
    calcUI.addCalculatorToElement(document.body);
    expect(document.body.childElementCount).toBe(countBefore+3);
    expect(document.body.children[0].nodeName).toBe('INPUT');
    expect(document.body.children[1].nodeName).toBe('INPUT');
    expect(document.body.children[2].nodeName).toBe('BUTTON');
    expect(document.body.children[2].innerHTML).toBe('Add');
  });