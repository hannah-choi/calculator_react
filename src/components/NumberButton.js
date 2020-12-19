import React from "react";

function NumberButton({ number }) {
    return (
        <button className="number" data-key="number">
            {number}
        </button>
    );
}

export default NumberButton;
