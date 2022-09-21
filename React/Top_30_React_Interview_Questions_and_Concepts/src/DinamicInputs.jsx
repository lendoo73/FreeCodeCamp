import "./App.css";
import { useState } from "react";

const DinamicInputs = () => {
    const [inputs, setInputs] = useState({});

    const getInputValues = event => {
        let {name, value} = event.target;
        let input = {
            [name]: value
        };
        setInputs({... inputs, ...input});
    };

    console.log(inputs);

    return (
        <div className="input-container">
            <div>
                <input onChange={getInputValues} type="text" placeholder="Name" name="name" />
                <input onChange={getInputValues} type="text" placeholder="Age" name="age" />
                <input onChange={getInputValues} type="text" placeholder="Years of Experience" name="yoe" />
            </div>
            <button>Add New Group</button>
        </div>
    );
};

export default DinamicInputs;