import React from "react";

function EqualButton({ value }) {
    return (
        <button className="equal" data-key="equal">
            {value}
        </button>
    );
}

export default EqualButton;
