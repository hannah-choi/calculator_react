import React from "react";
import Button from "./Button";

export default function Buttons({ handleClick }) {
    const numArray = [
        { value: "AC", type: "function" },
        { value: "±", type: "function" },
        { value: "%", type: "function" },
        { value: "÷", type: "operator" },
        { value: "7", type: "number" },
        { value: "8", type: "number" },
        { value: "9", type: "number" },
        { value: "×", type: "operator" },
        { value: "4", type: "number" },
        { value: "5", type: "number" },
        { value: "6", type: "number" },
        { value: "–", type: "operator" },
        { value: "1", type: "number" },
        { value: "2", type: "number" },
        { value: "3", type: "number" },
        { value: "+", type: "operator" },
        { value: "0", type: "number" },
        { value: ".", type: "number" },
        { value: "=", type: "operator" },
    ];

    return (
        <div className="Buttons">
            {numArray.map((num, i) => (
                <Button
                    value={num.value}
                    type={num.type}
                    key={i}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}
