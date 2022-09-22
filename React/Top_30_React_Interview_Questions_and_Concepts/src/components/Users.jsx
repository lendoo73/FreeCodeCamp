import React from "react";
import HigherOrder from "../HigherOrder";

const Users = ({data}) => {
    
    return (
        <div>
            <h2>Hello from Users</h2>
            {data.slice(0, 10).map(user => {
                return <p key={user.id}>{user.name}</p>
            })}
        </div>
    );
};

const UsersComp = HigherOrder("Users", Users, "users");

export default UsersComp;