import React from "react";

export default function Button({ value, type, operator = null, buttonClick }) {
    return (
        <button
            name={value}
            className={`button ${value === 0 ? "zero" : ""} ${type}`}
            data-type={type}
            data-operator={operator}
            onClick={e => {
                buttonClick(e);
            }}
        >
            {value}
        </button>
    );
}
