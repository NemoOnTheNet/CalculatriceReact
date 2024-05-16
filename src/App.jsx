import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [afterEqual, setAfterEqual] = useState("");

  const handleNumberClick = (number) => {
    if (display === "" && previousNumber === "") {
      setDisplay(number.toString());
      setCurrentNumber(number.toString());
    } else {
      setDisplay(display + number.toString());
      setCurrentNumber(display + number.toString());
    }
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousNumber(currentNumber);
    setCurrentNumber("");
    setDisplay("");
  };

  const calculat = () => {
    if (afterEqual !== "") {
      switch (operator) {
        case "+":
          setDisplay(parseFloat(currentNumber) + parseFloat(afterEqual));
          setPreviousNumber(parseFloat(currentNumber) + parseFloat(afterEqual));
          setAfterEqual(parseFloat(currentNumber) + parseFloat(afterEqual));
          break;
        case "-":
          setDisplay(parseFloat(currentNumber) - parseFloat(afterEqual));
          setPreviousNumber(parseFloat(currentNumber) - parseFloat(afterEqual));
          setAfterEqual(parseFloat(currentNumber) - parseFloat(afterEqual));
          break;
        case "*":
          setDisplay(parseFloat(currentNumber) * parseFloat(afterEqual));
          setPreviousNumber(parseFloat(currentNumber) * parseFloat(afterEqual));
          setAfterEqual(parseFloat(currentNumber) * parseFloat(afterEqual));
          break;
        case "/":
          setDisplay(parseFloat(afterEqual) / parseFloat(currentNumber));
          setPreviousNumber(parseFloat(afterEqual) / parseFloat(currentNumber));
          setAfterEqual(parseFloat(afterEqual) / parseFloat(currentNumber));
          break;
      }
    } else {
      switch (operator) {
        case "+":
          setDisplay(parseFloat(currentNumber) + parseFloat(previousNumber));
          setPreviousNumber(
            parseFloat(currentNumber) + parseFloat(previousNumber)
          );
          setAfterEqual(parseFloat(currentNumber) + parseFloat(previousNumber));
          break;
        case "-":
          setDisplay(parseFloat(currentNumber) - parseFloat(previousNumber));
          setPreviousNumber(
            parseFloat(currentNumber) - parseFloat(previousNumber)
          );
          setAfterEqual(parseFloat(currentNumber) - parseFloat(previousNumber));
          break;
        case "*":
          setDisplay(parseFloat(currentNumber) * parseFloat(previousNumber));
          setPreviousNumber(
            parseFloat(currentNumber) * parseFloat(previousNumber)
          );
          setAfterEqual(parseFloat(currentNumber) * parseFloat(previousNumber));
          break;
        case "/":
          setDisplay(parseFloat(previousNumber) / parseFloat(currentNumber));
           setPreviousNumber(
             parseFloat(previousNumber) / parseFloat(currentNumber)
           );
           setAfterEqual(
             parseFloat(previousNumber) / parseFloat(currentNumber)
           );
          break;
      }
    }
    setCurrentNumber("");
    setOperator("");
  };

  return (
    <>
      <p>{display}</p>
      <p>Current number : {currentNumber} </p>
      <p>Previous number : {previousNumber} </p>
      <p>Operator : {operator} </p>

      <button onClick={() => handleNumberClick(1)}>1</button>
      <button onClick={() => handleNumberClick(2)}>2</button>
      <button onClick={() => handleNumberClick(3)}>3</button>
      <button onClick={() => handleNumberClick(4)}>4</button>
      <button onClick={() => handleNumberClick(5)}>5</button>
      <button onClick={() => handleNumberClick(6)}>6</button>
      <button onClick={() => handleNumberClick(7)}>7</button>
      <button onClick={() => handleNumberClick(8)}>8</button>
      <button onClick={() => handleNumberClick(9)}>9</button>
      <button onClick={() => handleNumberClick(0)}>0</button>
      <br />
      <br />
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <br />
      <br />
      <button onClick={() => calculat()}>=</button>
      <p>after equal : {afterEqual} </p>
    </>
  );
}

export default App;
