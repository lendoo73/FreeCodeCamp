import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

// https://mockapi.io/projects/632a2dd01090510116bc9f5e
const RestApiRequest = () => {

    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(-1);

    const url = "https://632a2dd01090510116bc9f5d.mockapi.io/users";

    const postData = () => {
        axios.post(url, {
            name: name,
            age: "49",
            hobbies: ["coding", "more coding", "programing"]
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        ;
    };

    const getData = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
        ;
    }

    const getDataById = id => {
        axios.get(`${url}/${id}`)
            .then(res => setUsers([res.data]))
            .catch(err => console.log(err))
        ;
    }


    const updateData = id => {
        const updatedUser = {
            name: name,
            age: "27",
            hobbies: ["coding", "more coding", "programing", "learning"]
        };
        
        axios.put(`${url}/${id}`, updatedUser)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        ;
    };

    const deleteData = id => {
        axios.delete(`${url}/${id}`)
            .then(res => getData())
            .catch(err => console.log(err))
        ;
    };

    useEffect(() => getData(), []);

    return (
        <div>
            <input onChange={event => setName(event.target.value)} type="text" placeholder="Name" />
            <button onClick={postData}>Post Data</button>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <h2>{user.id}. {user.name}</h2>
                        <button onClick={() => updateData(user.id)}>Update</button>
                        <button onClick={() => deleteData(user.id)}>Delete</button>
                    </div>
                )
            })}
            <div>
                <input onChange={event => setId(event.target.value)} type="number" placeholder="id" />
                <button onClick={() => getDataById(id)}>Get One</button>
            </div>
        </div>
    );
};

export default RestApiRequest;