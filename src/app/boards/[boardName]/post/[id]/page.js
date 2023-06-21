import PostComponent from "@/components/posts/Post";
import React from "react";

/**
 * Post page
 * Displays the contents of the post, along
 * with the corresponding comments
 * TODO: filtering, sorting on the comments
 */
const Post = () => {
    return (
        <div>
            post page, contents and comments will be displayed
            <PostComponent />
        </div>
    );
};

export default Post;
