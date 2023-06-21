"use client";

import { useParams } from "next/navigation";
import { paths } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const PostListItem = ({data}) => {
    const {boardName} = useParams();
    const {id, title, description, postedAt} = data;
    return (
        <div className="post-item">
            <h2><Link href={paths.posts(boardName, id)}>{title}</Link></h2>
            <span>{postedAt.toString()}</span>
            <div>{description}</div>
        </div>
    );
};

export default PostListItem;
