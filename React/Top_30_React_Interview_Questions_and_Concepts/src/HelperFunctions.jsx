import { useEffect } from "react";
import "./App.css";
import { getUsers } from "./helpers/getAllUsers";
import { addNums, multiplyNums } from "./helpers/addTwo";

const HelperFunctions = () => {

    const getUsersHelper = async () => {
        let posts = await getUsers("posts");
        console.log(posts);
        let todos = await getUsers("todos");
        console.log(todos);
    };
    
    const addTwoNumsHelper = () => {
        let sum = addNums(1, 3);
        let multiples = multiplyNums(2, 4);
        console.log(sum);
        console.log(multiples);
    };

    useEffect(() => {
        getUsersHelper();
    }, []);

    return (
        <div>
            <h1>Helper functions</h1>
            <button onClick={addTwoNumsHelper}>Add</button>
        </div>
    );
};

export default HelperFunctions;