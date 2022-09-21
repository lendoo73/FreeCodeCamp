import React from "react";
import "./App.css";

const UncontrolledComponent = () => {
    let name = React.createRef();
    let age = React.createRef();

    
    const submit = () => {
        console.log(name.current.value);
        console.log(age.current.value);
    };

    return (
        <div className="input-container">
            <h1>Uncontrolled Component</h1>
            <input ref={name} type="text" placeholder="Name" />
            <input ref={age} type="text" placeholder="Age" />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

const ControlledComponent = () => {

    const getName = event => {
        console.log(event.target.value);
    };

    const getAge = event => {
        console.log(event.target.value);
    };

    return (
        <div className="input-container">
            <h1>Controlled Component</h1>
            <input onChange={getName} type="text" placeholder="Name" />
            <input onChange={getAge} type="text" placeholder="Age" />
            <button>Submit</button>
        </div>
    );
};

export {
    UncontrolledComponent,
    ControlledComponent
};