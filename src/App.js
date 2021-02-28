import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
    const [data, setData] = useState("0"); //display
    const [prevClicked, setPrevClicked] = useState(null); //previously clicked number
    const [memory, setMemory] = useState("0"); //final calculation
    const [operator, setOperator] = useState(false); //operator
    const [complete, setComplete] = useState(false); //Disable dot when necessary

    const buttonClick = e => {
        if (data.length > 11) {
            return;
        }
        switch (e.target.dataset.type) {
            case "number":
                if (operator) {
                    setPrevClicked(e.target.name);
                    setMemory(memory + e.target.name);
                    setData(e.target.name);
                    setOperator(false);
                } else {
                    if (prevClicked === "0" && e.target.name === "0") {
                        return;
                    }
                    if (prevClicked === "." && e.target.name === ".") {
                        return;
                    }
                    if (data.includes(".") && e.target.name === ".") {
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
            case "operator":
                if (!prevClicked || operator || !data) {
                    return;
                }
                if (e.target.name === "=" || memory) {
                    try {
                        console.log("data:", data);
                        console.log("memory:", memory);
                        setData(eval(memory));
                        setMemory(data);
                    } catch (error) {
                        console.log(error);
                    }
                }
                setMemory(data + e.target.dataset.operator);
                setPrevClicked(e.target.dataset.operator);
                setOperator(true);
                break;
            case "function":
                switch (e.target.name) {
                    case "AC":
                        setData("0");
                        setMemory("0");
                        break;
                    case "±":
                        if (parseFloat(data) < 0) {
                            setData(Math.abs(parseFloat(data)));
                            setMemory(Math.abs(parseFloat(data)));
                        } else {
                            setData(Math.abs(parseFloat(data)) * -1);
                            setMemory(Math.abs(parseFloat(data)) * -1);
                        }
                        break;
                    case "%":
                        setMemory(parseFloat(data) / 100);
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

    return (
        <div className="App">
            <Display data={data} />
            <Buttons buttonClick={buttonClick} />
        </div>
    );
}

export default App;
