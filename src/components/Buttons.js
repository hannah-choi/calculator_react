import React from "react";
import Button from "./Button";

export default function Buttons({ handleClick }) {
    const numArray = [
        { value: 7, type: "number" },
        { value: 8, type: "number" },
        { value: 9, type: "number" },
        { value: 4, type: "number" },
        { value: 5, type: "number" },
        { value: 6, type: "number" },
        { value: 1, type: "number" },
        { value: 2, type: "number" },
        { value: 3, type: "number" },
        { value: 0, type: "number" },
        { value: ".", type: "number" },
    ];

    const funcArray = [
        { value: "AC", type: "function" },
        { value: "±", type: "function" },
        { value: "%", type: "function" },
    ];

    const operatorArray = [
        { value: "÷", type: "operator" },
        { value: "×", type: "operator" },
        { value: "–", type: "operator" },
        { value: "+", type: "operator" },
        { value: "=", type: "operator" },
    ];

    return (
        <div className="Buttons">
            <div className="functionsWrapper">
                {funcArray.map((num, i) => (
                    <Button
                        value={num.value}
                        type={num.type}
                        key={i}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div className="operatorsWrapper">
                {operatorArray.map((num, i) => (
                    <Button
                        value={num.value}
                        type={num.type}
                        key={i}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div className="numbersWrapper">
                {numArray.map((num, i) => (
                    <Button
                        value={num.value}
                        type={num.type}
                        key={i}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
}
