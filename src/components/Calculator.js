import React from "react";
import Display from "./Display";
import AllClear from "./AllClear";
import FunctionButton from "./FunctionButton";
import NumberButton from "./NumberButton";
import EqualButton from "./EqualButton";

function Calculator() {
    return (
        <div class="wrapper">
            <Display />
            <AllClear />
            <FunctionButton operator="÷" />
            <NumberButton number="7" />
            <NumberButton number="8" />
            <NumberButton number="9" />
            <FunctionButton operator="×" />
            <NumberButton number="4" />
            <NumberButton number="5" />
            <NumberButton number="6" />
            <FunctionButton operator="-" />
            <NumberButton number="1" />
            <NumberButton number="2" />
            <NumberButton number="3" />
            <FunctionButton operator="+" />
            <NumberButton number="0" />
            <NumberButton number="." />
            <EqualButton value="=" />
        </div>
    );
}

export default Calculator;
