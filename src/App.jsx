import { useState } from "react";
import "../src/App.css";

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
          setAfterEqual(parseFloat(previousNumber) / parseFloat(currentNumber));
          break;
      }
    }
    setCurrentNumber("");
    setOperator("");
  };

  const handleChangeInput = (e) => {
    setDisplay(e.target.value);
  };

  const handleClearButton = () => {
    setDisplay("");
  };

  return (
    <main className="calculatrice">
      <input
        className="displayer"
        type="text"
        onChange={handleChangeInput}
        value={display}
      />
      <section className="buttonSection">
        <section className="buttonNumberSection">
          <button
            className="buttonNumber buttonNumberOne"
            onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button
            className="buttonNumber buttonNumberTwo"
            onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button
            className="buttonNumber buttonNumberThree"
            onClick={() => handleNumberClick(3)}>
            3
          </button>
          <button
            className="buttonNumber buttonNumberFour"
            onClick={() => handleNumberClick(4)}>
            4
          </button>
          <button
            className="buttonNumber buttonNumberFive"
            onClick={() => handleNumberClick(5)}>
            5
          </button>
          <button
            className="buttonNumber buttonNumberSix"
            onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button
            className="buttonNumber buttonNumberSeven"
            onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button
            className="buttonNumber buttonNumberEight"
            onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button
            className="buttonNumber buttonNumberNine"
            onClick={() => handleNumberClick(9)}>
            9
          </button>
          <button className="buttonClear" onClick={() => handleClearButton()}>
            C
          </button>
          <button
            className="buttonNumber buttonNumberZero"
            onClick={() => handleNumberClick(0)}>
            0
          </button>
        </section>

        <section className="buttonOperatorSection">
          <button
            className="buttonOperator buttonOperatorPlus"
            onClick={() => handleOperatorClick("+")}>
            +
          </button>
          <button
            className="buttonOperator buttonOperatorMoins"
            onClick={() => handleOperatorClick("-")}>
            -
          </button>
          <button
            className="buttonOperator buttonOperatorMultiplication"
            onClick={() => handleOperatorClick("*")}>
            x
          </button>
          <button
            className="buttonOperator buttonOperatorDivision"
            onClick={() => handleOperatorClick("/")}>
            /
          </button>

          <button
            className="buttonOperator buttonOperatorEqual equalButton"
            onClick={() => calculat()}>
            =
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
