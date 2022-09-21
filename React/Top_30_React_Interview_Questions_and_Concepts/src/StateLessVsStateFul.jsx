import { useState } from "react";
import "./App.css";

const StateLess = () => {
    return (
        <div>
            <h1>Stateless</h1>
        </div>
    );
};

const StateFul = () => {
    const [name, setName] = useState("Csaba");

    return (
        <div>
            <h1>Stateful</h1>
            <p>{name}</p>
        </div>
    );
};

export {
    StateLess,
    StateFul
};