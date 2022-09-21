import { useState } from "react";
import Child from "./Child";
import "./App.css";

const Props = () => {
    const [name, setName] = useState("Csaba");

    const changeName = value => setName(value);

    return (
        <div>
            <Child valueOfProps={name} changeName={changeName} />
            {/* <button onClick={() => setName("Sanyi")}>Change Name</button> */}
        </div>
    )
};

export default Props;