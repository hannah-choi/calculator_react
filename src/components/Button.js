import React from "react";

export default function Button({ value, type, handleClick }) {
    return (
        <button
            className={`button ${value === "0" ? "zero" : ""} ${type}`}
            onClick={() => handleClick(value)}
        >
            {value}
        </button>
    );
}
