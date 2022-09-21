import { useEffect, useState } from "react";
import "./App.css";

const MapAndFilters = () => {
    const [users, setUsers] = useState([]);
    const [numbers, setNumbers] = useState([...Array(10).keys()].map(n => n + 1));
    console.log(numbers);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json));
    }, []);

    const mapData = () => {
        let mappedArray = users.map(user => user.id * 2);
        // console.log(mappedArray);
        let filteredData = users.filter(user => user.name === "Leanne Graham");
        setUsers(filteredData);

        let square = numbers
            .filter(num => num < 5)
            .map(num => num * num)
            .filter(num => num < 10)
        ;
        setNumbers(square);
    };

    return (
        <div>
            <div className="App row text-center">
                <h1>User</h1>
                {users.map(user => {
                    return (
                        <div key={user.id} className="card col">
                            <div className="card-inner">
                                <p>{user.name}</p>
                                <p>{user.username}</p>
                            </div>
                        </div>
                    )
                })}
                <button onClick={mapData}>See mapped array</button>
            </div>
            <div className="d-flex flex-wrap justify-content-between p-2">
                {numbers.map(num => (
                    <p key={num} className="card p-5">{num}</p>
                ))}
            </div>
        </div>
    );
};

export default MapAndFilters;