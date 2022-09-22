import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

// in package.json: "@testing-library/react": "^13.4.0"
// https://testing-library.com/docs/react-testing-library/intro/
const UnitTests = () => {

    return (
        <div>
            <Counter initialValue={0} />
        </div>
    );
};

export default UnitTests;