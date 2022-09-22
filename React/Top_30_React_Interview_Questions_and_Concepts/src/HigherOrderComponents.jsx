import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";

const HigherOrderComponents = () => {
    return (
        <div>
            <Users />
            <hr />
            <Posts />
        </div>
    );
};

export default HigherOrderComponents;