import {expect} from "chai";
import Calculator from "../src/calculator";

describe('calculator', () => {
  describe('#calculate()', () => {
    context('when SUM operation is used', () => {
      it('should calculate sum of two numbers', () => {
        const calculator = new Calculator('SUM');
        const result = calculator.calculate(5, 3);
        expect(result).to.be.a('number');
      });
    });

  });
});
