import "./App.css";
import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    return (
        <div>
            <h1 data-testid="count">{count}</h1>
            <button onClick={() => setCount(++count)}>Increment Count</button>
        </div>
    );
};

export default Counter;