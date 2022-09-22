import React from "react";
import { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";

const Profile = () => {

    let {setName} = useContext(UserData);

    return (
        <div>
            <button onClick={() => setName("Sanyi")}>Change the Name</button>
        </div>
    );
};

export default Profile;