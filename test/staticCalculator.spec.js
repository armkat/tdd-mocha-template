import {expect} from "chai";
import Calculator from "../src/staticCalculator";

describe('calculator', () => {
  describe('#calculate()', () => {
    context('when SUM operation is used', () => {
      it('should calculate sum of two numbers', () => {
        const result = Calculator.calculate(1, 2, 'SUM');
        expect(result).to.be.a('number');
      });
    });

  });
});
