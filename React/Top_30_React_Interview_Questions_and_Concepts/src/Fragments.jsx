import React from "react";
import "./App.css";

const Fragments = () => {
    return (
        <React.Fragment className="text-danger">
            <>
                <h1 className="text-danger">Hello</h1>
            </>
            <>
                <h1>World!</h1>
            </>
        </React.Fragment>
    );
};

export default Fragments;