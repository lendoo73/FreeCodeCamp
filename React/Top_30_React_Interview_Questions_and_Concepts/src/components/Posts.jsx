import React from "react";
import HigherOrder from "../HigherOrder";

const Posts = ({data}) => {

    return (
        <div>
            <h2>Hello from Posts</h2>
            {data.slice(0, 10).map(user => {
                return <p key={user.id}>{user.title}</p>;
            })}
        </div>
    );
};

const PostsComp = HigherOrder("Posts", Posts, "posts");

export default PostsComp;