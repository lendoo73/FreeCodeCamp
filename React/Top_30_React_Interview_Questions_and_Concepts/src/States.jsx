import "./App.css";
import { useState } from "react";

const States = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [array, setArray] = useState([
        {
            name: "Csaba",
            age: 49
        },
        {
            name: "Robin",
            age: 18
        }
    ]);

    const [object, setObject] = useState({
        name: "sanyi",
        age: 5
    });

    const increment = () => {
        const inc = count + 1;
        // setCount(inc);
        setCount(count + 1);
        setIsVisible(!isVisible);
        setName("Csaba");
    };

    return (
        <div className="">
            <h1>{count}</h1>
            <h2>{name}</h2>
            {isVisible 
                ? <h1>Visible</h1>
                : <h1>Not Visible</h1>
            }
            <button onClick={increment}>Change States</button>
        </div>
    );
};

export default States;