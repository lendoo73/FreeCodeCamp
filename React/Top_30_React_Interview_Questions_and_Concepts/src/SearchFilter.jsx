import "./App.css";
import { useEffect, useState } from "react";

const SearchFilter = () => {
    const [users, setUsers] = useState([]);
    const [SearchQuery, setSearch] = useState("");
    const [searched, setSearched] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (SearchQuery) {
            const searched = setTimeout(() => {
                setSearched(users.filter(user => {
                    return Object.values(user)
                        .join("")
                        .toLowerCase()
                        .includes(SearchQuery.toLowerCase())
                    ;
                }));
            }, 1000);
            return () => clearTimeout(searched);
        } else {
            setUsers(users);
        }

    }, [SearchQuery]);

    return (
        <div className="pt-2 text-center">
            <input onChange={event => setSearch(event.target.value)} className="search" type="text" placeholder="Search users..." />
            <div className="grid-main">
                {SearchQuery.length 
                    ? (searched.map(user => {
                        return (
                            <div key={user.id} className="card">
                                <h2>{user.name}</h2>
                                <p>{user.username}</p>
                            </div>
                        )
                    }))
                    : (
                        users.map(user => {
                            return (
                                <div key={user.id} className="card">
                                    <h2>{user.name}</h2>
                                    <p>{user.username}</p>
                                </div>
                            );
                        })
                    )
                }
                {/* {users.map(user => {
                    return (
                        <div key={user.id} className="card">
                            <h2>{user.name}</h2>
                            <p>{user.username}</p>
                        </div>
                    );
                })} */}
            </div>
        </div>
    );
};

export default SearchFilter;