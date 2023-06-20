import { boards } from "@/utils/data";
import React from "react";
import BoardListItem from "./BoardListItem";

const BoardList = () => {
    return (
        <div className='board-list'>
            {boards.map(board => <BoardListItem key={board.id} data={board} />)}
        </div>
    );
};

export default BoardList;
