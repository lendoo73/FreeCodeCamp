import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { UserData } from "./contexts/GlobalContext";

const ContextApi = () => {
    const [name, setName] = useState("Csaba");
    const [age, setAge] = useState(51);

    return (
        <div>
            <UserData.Provider value={{name, setName, age}}>
                <Home />
                <Profile />
            </UserData.Provider>
        </div>
    );
};

export default ContextApi;