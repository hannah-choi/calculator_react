import React, { useState } from "react";

export const NumberContext = React.createContext();

function NumberProvider(props) {
    const [number, setNumber] = useState("");
    const [savedNumber, setSavedNumber] = useState("");
    const [operator, setOperator] = useState("");

    const setDisplayValue = num => {
        if ((!number.includes(".") || num !== ".") && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, "")}`);
        }
    };

    const setSavedValue = () => {
        setSavedNumber(number);
        setNumber("");
    };

    return (
        <NumberContext.provider value={{ setSavedValue, setDisplayValue }}>
            {props.children}
        </NumberContext.provider>
    );
}

export default NumberProvider;
