import { LightningElement } from "lwc";

export default class Calculator extends LightningElement {
  num1;
  num2;
  result;
  displayResult;
  isCheckedHistory = false;
  historyResult = [];

  numberOneHandler(event) {
    this.num1 = parseFloat(event.target.value);
  }
  numberTwoHandler(event) {
    this.num2 = parseFloat(event.target.value);
  }

  addHandler() {
    this.result = this.num1 + this.num2;
    this.displayResult = `The sum of ${this.num1} and ${this.num2} is ${this.result}`;
    console.log(this.result);
    this.historyResult.push(this.displayResult);
  }

  subHandler() {
    this.result = this.num1 - this.num2;
    this.displayResult = `The subtraction of ${this.num1} and ${this.num2} is ${this.result}`;
    console.log(this.result);
    this.historyResult.push(this.displayResult);
  }

  mulHandler() {
    this.result = this.num1 * this.num2;
    this.displayResult = `The multiplication of ${this.num1} and ${this.num2} is ${this.result}`;
    console.log(this.result);
    this.historyResult.push(this.displayResult);
  }

  divHandler() {
    this.result = this.num1 / this.num2;
    this.displayResult = `The division of ${this.num1} and ${this.num2} is ${this.result}`;
    console.log(this.result);
    this.historyResult.push(this.displayResult);
  }

  historyHandler(event) {
    this.isCheckedHistory = event.target.checked;
  }
}
