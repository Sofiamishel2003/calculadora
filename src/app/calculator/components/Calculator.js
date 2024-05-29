"use client";

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleClick = (label) => {
    if (!isNaN(label) || label === '.') {
      if (waitingForOperand) {
        setDisplayValue(label);
        setWaitingForOperand(false);
      } else {
        if (label === '.' && displayValue.includes('.')) return;
        setDisplayValue((prev) => (prev === '0' ? label : prev + label).slice(0, 9));
      }
    } else if (label === 'C') {
      setDisplayValue('0');
      setOperand1(null);
      setOperand2(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (label === '=') {
      performCalculation();
    } else {
      if (operand1 === null) {
        setOperand1(parseFloat(displayValue));
        setOperator(label);
        setWaitingForOperand(true);
      } else if (operator) {
        setOperand2(parseFloat(displayValue));
        performCalculation(label);
      }
    }
  };

  const performCalculation = (nextOperator) => {
    if (operand1 !== null && operator !== null && operand2 === null) {
      const result = calculate(operand1, operator, parseFloat(displayValue));
      setDisplayValue(result);
      setOperand1(result);
      setOperator(nextOperator || null);
      setOperand2(null);
      setWaitingForOperand(true);
    }
  };

  const calculate = (operand1, operator, operand2) => {
    let result;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        result = operand2;
    }
    if (result < 0 || result > 999999999) {
      return 'ERROR';
    } else {
      return result.toString().slice(0, 9);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
      <style jsx>{`
        .calculator {
          width: 400px;
          margin: 50px auto;
          border: 1px solid #000;
          border-radius: 10px;
          overflow: hidden;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default Calculator;

