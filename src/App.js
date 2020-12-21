import React from "react";
import "./style.css";
import Calculator from "./components/Calculator";
import NumberProvider from "./components/NumberProvider";

function App() {
    return (
        <NumberProvider>
            <div className="App">
                <Calculator />
            </div>
        </NumberProvider>
    );
}

export default App;
