import React, { useState } from "react";

export const NumberContext = React.createContext();

function NumberProvider(props) {
    return <NumberContext.provider></NumberContext.provider>;
}

export default NumberProvider;
