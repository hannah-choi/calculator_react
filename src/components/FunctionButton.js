import React from "react";

function FunctionButton({ operator }) {
    return (
        <button className="operator" data-key="operator">
            {operator}
        </button>
    );
}

export default FunctionButton;
