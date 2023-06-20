import { paths } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const BoardListItem = ({data}) => {
    const {id, name, title, description} = data;
    return (
        <div className='board-item'>
            <h2><Link href={paths.boards(name)}>{title}</Link></h2>
            <p>{description}</p>
        </div>
    );
};

export default BoardListItem;
