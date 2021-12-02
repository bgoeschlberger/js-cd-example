import { Calculator } from "../calculator/calculator";

export class CalculatorUI {

    constructor() {
        this.calculator = new Calculator();
        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.sumButton = document.createElement('button');
        this.sumButton.innerHTML = "Add";
        this.sumButton.addEventListener('click', () =>
             this._showResult(this.calculator.add(this.input1.value, this.input2.value)));
    }

    addCalculatorToElement(element){
        element.appendChild(this.input1);
        element.appendChild(this.input2);
        element.appendChild(this.sumButton);
    }

    _showResult(result){
        alert(result);
    }

}