import { useState, useEffect } from "react";
import { UserData } from "./contexts/GlobalContext";

const useData = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const url = "https://jsonplaceholder.typicode.com";

    const getUsers = () => {
        fetch(`${url}/users`)
            .then(response => response.json())
            .then(json => setUsers(json))
        ;
    };

    const getPosts = () => {
        fetch(`${url}/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
        ;
    };

    useEffect(() => {
        getUsers();
        getPosts();
    }, []);

    return {users, posts};
};

export default useData;