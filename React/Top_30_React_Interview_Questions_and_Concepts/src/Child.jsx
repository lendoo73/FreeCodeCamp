import React from "react";

const Child = ({valueOfProps, changeName}) => {
    return (
        <div>
            <h1>{valueOfProps}</h1>
            <button onClick={() => changeName("Béla from Child")}>Change Name</button>
        </div>
    )
};

export default Child;