import React from "react";

export default function Display({ data }) {
    return (
        <div
            className="Display"
            style={{
                fontSize: `${data.length <= 6 ? 5 : data.length * 0.4}rem`,
            }}
        >
            {data}
        </div>
    );
}
