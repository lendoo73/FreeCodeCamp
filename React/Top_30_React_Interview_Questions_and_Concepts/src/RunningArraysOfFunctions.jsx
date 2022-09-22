import "./App.css";
import { useEffect } from "react";

const RunningArraysOfFunctions = () => {
    const fnArray = [
        (a ,b) => a + b,
        (a ,b) => a - b,
        (a ,b) => a * b,
        (a ,b) => a / b
    ];

    const fnArrayObj = [
        {fn: (a ,b) => a + b},
        {fn: (a ,b) => a - b},
        {fn: (a ,b) => a * b},
        {fn: (a ,b) => a / b}
    ];

    const mainFn = () => {
        let result = fnArray.map(fn => fn(2, 3));
        console.log(result);
        let result2 = fnArrayObj.map(fn => fn.fn(2, 3));
        console.log(result2);
    }

    useEffect(() => {
        mainFn()
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default RunningArraysOfFunctions;