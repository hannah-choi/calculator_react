import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
    const [display, setDisplay] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleClick = value => {
        const initialize = () => {
            setMemory(null);
            setOperator(null);
        };

        const operatorInit = symbol => {
            setMemory(parseFloat(display));
            setDisplay("0");
            setOperator(`${symbol}`);
        };

        const operatorCalc = symbol => {
            setDisplay(
                eval(`${parseFloat(memory)}${symbol}${parseFloat(display)}`)
            );
        };

        switch (value) {
            case "AC":
                setDisplay("0");
                initialize();
                break;
            case "±":
                parseFloat(display) < 0
                    ? setDisplay(Math.abs(parseFloat(display)))
                    : setDisplay(Math.abs(parseFloat(display)) * -1);
                break;
            case "%":
                setDisplay(parseFloat(display) / 100);
                initialize();
                break;

            case "÷":
                operatorInit("/");
                break;
            case "–":
                operatorInit("-");
                break;
            case "×":
                operatorInit("*");
                break;
            case "+":
                operatorInit("+");
                break;

            case "=":
                if (!operator) {
                    return;
                }
                switch (operator) {
                    case "+":
                        operatorCalc("+");
                        break;
                    case "-":
                        operatorCalc("-");
                        break;
                    default:
                        break;
                }
                initialize();
                break;

            default:
                setDisplay((parseFloat(display) + value).toString());
                break;
        }
    };

    return (
        <div className="App">
            <Display value={display} />
            <Buttons handleClick={handleClick} />
        </div>
    );
}

export default App;
