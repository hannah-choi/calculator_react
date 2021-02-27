import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
    const [data, setData] = useState(""); //display
    const [prevClicked, setPrevClicked] = useState(null); //previously clicked number
    const [memory, setMemory] = useState(null); //final calculation
    const [operator, setOperator] = useState(false); //operator
    const [disableDot, setDisableDot] = useState(false); //Disable dot when necessary

    const buttonClick = e => {
        if (data.length > 11) {
            return;
        }
        switch (e.target.dataset.type) {
            case "number":
                if (operator) {
                    setMemory(memory + e.target.name);
                    setData(eval(memory + e.target.name));
                    setOperator(false);
                } else {
                    setPrevClicked(e.target.name);
                    setData(data + e.target.name);
                    setMemory(memory + e.target.name);
                    setOperator(false);
                }
                break;
            case "operator":
                if (!prevClicked || operator) {
                    return;
                }
                setMemory(data + e.target.dataset.operator);
                console.log(memory);
                setOperator(true);
                break;
            case "function":
                switch (e.target.name) {
                    case "AC":
                        setData("");
                        setMemory(null);
                        break;
                    case "±":
                        setMemory(null);
                        parseFloat(data) < 0
                            ? setData(Math.abs(parseFloat(data)))
                            : setData(Math.abs(parseFloat(data)) * -1);
                        break;
                    case "%":
                        setMemory(null);
                        setData(parseFloat(data) / 100);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };

    // const handleClick = value => {
    //     const initialize = () => {
    //         setMemory(null);
    //         setOperator(null);
    //     };

    //     const operatorInit = symbol => {
    //         setMemory(parseFloat(display));
    //         setDisplay("0");
    //         setOperator(`${symbol}`);
    //     };

    //     const operatorCalc = symbol => {
    //         setDisplay(
    //             eval(`${parseFloat(memory)}${symbol}${parseFloat(display)}`)
    //         );
    //     };

    //     switch (value) {
    //         case "AC":
    //             setDisplay("0");
    //             initialize();
    //             break;
    //         case "±":
    //             parseFloat(display) < 0
    //                 ? setDisplay(Math.abs(parseFloat(display)))
    //                 : setDisplay(Math.abs(parseFloat(display)) * -1);
    //             break;
    //         case "%":
    //             setDisplay(parseFloat(display) / 100);
    //             initialize();
    //             break;

    //         case "÷":
    //             operatorInit("/");
    //             break;
    //         case "–":
    //             operatorInit("-");
    //             break;
    //         case "×":
    //             operatorInit("*");
    //             break;
    //         case "+":
    //             operatorInit("+");
    //             break;

    //         case "=":
    //             if (!operator) {
    //                 return;
    //             }
    //             switch (operator) {
    //                 case "+":
    //                     operatorCalc("+");
    //                     break;
    //                 case "-":
    //                     operatorCalc("-");
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             initialize();
    //             break;

    //         default:
    //             setDisplay((parseFloat(display) + value).toString());
    //             break;
    //     }
    // };

    return (
        <div className="App">
            <Display data={data} />
            <Buttons buttonClick={buttonClick} />
        </div>
    );
}

export default App;
