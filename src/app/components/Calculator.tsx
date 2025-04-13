'use client';

import { useState } from 'react';

export default function Calculator({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (operator === '+') {
      return (firstOperand || 0) + inputValue;
    } else if (operator === '-') {
      return (firstOperand || 0) - inputValue;
    } else if (operator === '×') {
      return (firstOperand || 0) * inputValue;
    } else if (operator === '÷') {
      return (firstOperand || 0) / inputValue;
    }

    return inputValue;
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const handlePercent = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const handleEquals = () => {
    if (!operator || firstOperand === null) return;
    
    const result = performCalculation();
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  if (!visible) return null;

  return (
    <div className="calculator-app visible">
      <div className="calculator-header">
        <button className="calculator-close-btn" onClick={onClose}>×</button>
      </div>

      <div className="calculator-display">
        {display}
      </div>

      <div className="calculator-buttons">
        <button 
          className="calculator-button button-function"
          onClick={clearDisplay}
        >
          {firstOperand === null ? 'AC' : 'C'}
        </button>
        <button 
          className="calculator-button button-function"
          onClick={toggleSign}
        >
          +/-
        </button>
        <button 
          className="calculator-button button-function"
          onClick={handlePercent}
        >
          %
        </button>
        <button 
          className={`calculator-button button-operation ${operator === '÷' ? 'active' : ''}`}
          onClick={() => handleOperator('÷')}
        >
          ÷
        </button>

        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('7')}
        >
          7
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('8')}
        >
          8
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('9')}
        >
          9
        </button>
        <button 
          className={`calculator-button button-operation ${operator === '×' ? 'active' : ''}`}
          onClick={() => handleOperator('×')}
        >
          ×
        </button>

        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('4')}
        >
          4
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('5')}
        >
          5
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('6')}
        >
          6
        </button>
        <button 
          className={`calculator-button button-operation ${operator === '-' ? 'active' : ''}`}
          onClick={() => handleOperator('-')}
        >
          -
        </button>

        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('1')}
        >
          1
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('2')}
        >
          2
        </button>
        <button 
          className="calculator-button button-number"
          onClick={() => inputDigit('3')}
        >
          3
        </button>
        <button 
          className={`calculator-button button-operation ${operator === '+' ? 'active' : ''}`}
          onClick={() => handleOperator('+')}
        >
          +
        </button>

        <button 
          className="calculator-button button-number zero"
          onClick={() => inputDigit('0')}
        >
          0
        </button>
        <button 
          className="calculator-button button-number"
          onClick={inputDecimal}
        >
          .
        </button>
        <button 
          className="calculator-button button-operation"
          onClick={handleEquals}
        >
          =
        </button>
      </div>
    </div>
  );
} 