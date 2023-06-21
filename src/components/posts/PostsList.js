import { posts } from "@/utils/data";
import React from "react";
import PostListItem from "./PostListItem";

const PostsList = () => {
    return (
        <div className="posts-list">
            {posts.map((post) => <PostListItem key={post.id} data={post} />)}
        </div>
    );
};

export default PostsList;
