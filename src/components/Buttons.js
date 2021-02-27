import React from "react";
import Button from "./Button";

export default function Buttons({ buttonClick }) {
    const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    const funcArray = ["AC", "±", "%"];
    const operatorArray = ["÷", "×", "–", "+", "="];

    const getOperator = operator => {
        switch (operator) {
            case "÷":
                return "/";
            case "–":
                return "-";
            case "×":
                return "*";
            case "+":
                return "+";
            default:
                break;
        }
    };

    return (
        <div className="Buttons">
            <div className="functionsWrapper">
                {funcArray.map((num, i) => (
                    <Button
                        value={num}
                        key={i}
                        type="function"
                        buttonClick={buttonClick}
                    />
                ))}
            </div>
            <div className="operatorsWrapper">
                {operatorArray.map((num, i) => (
                    <Button
                        type="operator"
                        value={num}
                        operator={getOperator(num)}
                        key={i}
                        buttonClick={buttonClick}
                    />
                ))}
            </div>
            <div className="numbersWrapper">
                {numArray.map((num, i) => (
                    <Button
                        type="number"
                        value={num}
                        key={i}
                        buttonClick={buttonClick}
                    />
                ))}
            </div>
        </div>
    );
}
