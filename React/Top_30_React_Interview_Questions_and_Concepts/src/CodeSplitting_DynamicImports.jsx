import { useEffect } from "react";
import "./App.css";
// import {add} from "./Math";

const CodeSplitting_DynamicImports = () => {
    useEffect(() => {
        // Dynamic import
        // import("./Math").then(Math => {
        //     console.log(Math);
        //     let sum = Math.add(5, 6);
        //     console.log(sum);
        // });
    }, []);

    const add = () => {
        import("./Math").then(Math => {
            console.log(Math);
            let sum = Math.add(5, 6);
            console.log(sum);
        });
    };

    return (
        <div>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default CodeSplitting_DynamicImports;