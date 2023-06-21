"use client";

import { useParams } from "next/navigation";
import React from "react";

const Post = () => {
    const {boardName, id} = useParams();
    console.log(boardName, id);
    return (
        <div>
            
        </div>
    );
};

export default Post;
