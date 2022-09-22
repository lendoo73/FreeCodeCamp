import "./App.css";
import useData from "./useJsonPlaceholder";

const CustomHooks = () => {
    
    let { users, posts} = useData();
    return (
        <div>
            <h1>Users</h1>
            {users.map((user, i) => <p key={i}>{user.name}</p>)}
            <h1>Posts</h1>
            {posts.splice(0, 10).map((post, i) => <p key={i}>{post.title}</p>)}
        </div>
    );
};

export default CustomHooks;