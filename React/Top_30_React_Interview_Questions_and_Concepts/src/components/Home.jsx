import React from "react";
import { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";
import Settings from "./Settings";

const Home = () => {

    let {name} = useContext(UserData);

    return (
        <div>
            <h1>The name is {name}</h1>
            <Settings name={name} />
        </div>
    );
};

export default Home;