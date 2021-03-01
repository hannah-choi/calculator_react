import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
    const [data, setData] = useState("0"); //display
    const [prevClicked, setPrevClicked] = useState(null); //previously clicked number
    const [memory, setMemory] = useState("0"); //final calculation
    const [operator, setOperator] = useState(false); //operator

    const buttonClick = e => {
        switch (e.target.dataset.type) {
            //when one of the number buttons is clicked
            case "number":
                if (data.length > 9) {
                    return;
                }
                if (operator) {
                    //prevent double operator
                    setPrevClicked(e.target.name);
                    setMemory(memory + e.target.name);
                    setData(e.target.name.toString());
                    setOperator(false);
                } else {
                    if (prevClicked === "0" && e.target.name === "0") {
                        return; //prevent multiple zeros
                    }
                    if (prevClicked === "." && e.target.name === ".") {
                        return; //prevent multiple dots
                    }
                    if (
                        data.toString().indexOf(".") > -1 &&
                        e.target.name === "."
                    ) {
                        //prevent multiple dots
                        return;
                    }
                    setPrevClicked(e.target.name);
                    setData(
                        data === "0" && e.target.name !== "."
                            ? e.target.name
                            : data + e.target.name
                    );
                    setMemory(
                        memory === "0" ? e.target.name : memory + e.target.name
                    );
                    setOperator(false);
                }
                break;
            //when one of the operator buttons is clicked
            case "operator":
                if (!prevClicked || operator || !data) {
                    return;
                }
                setMemory(data + e.target.dataset.operator);
                setPrevClicked(e.target.dataset.operator);
                setOperator(true);
                break;
            //when one of the function buttons is clicked
            case "function":
                switch (e.target.name) {
                    case "AC":
                        setData("0");
                        setMemory("0");
                        break;
                    case "±":
                        if (parseFloat(data) < 0) {
                            setData(Math.abs(parseFloat(data)));
                            setMemory(data);
                        } else {
                            setData(Math.abs(parseFloat(data)) * -1);
                            setMemory(data);
                        }
                        break;
                    case "%":
                        setData((parseFloat(data) / 100).toString());
                        setMemory(data);
                        break;
                    default:
                        break;
                }
                break;
            //when the equal button is clicked
            case "equal":
                if (memory && !operator) {
                    const result = eval(memory);
                    const isFloat = result => {
                        return result % 1 !== 0;
                    };
                    try {
                        // console.log("data:", data);
                        // console.log("memory:", memory);
                        if (result.toString().length > 3 && isFloat(result)) {
                            setData(result.toFixed(4).toString());
                            setMemory(data);
                            setOperator(false);
                        } else {
                            setData(result.toString());
                            setMemory(data);
                            setOperator(false);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="App">
            <Display data={data} />
            <Buttons buttonClick={buttonClick} />
        </div>
    );
}

export default App;
