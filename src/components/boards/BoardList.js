import React from "react";
import BoardListItem from "./BoardListItem";
import { resourceUrls } from "@/utils/constants";


// obtain the data aboout the boards
async function getData() {
    const response = await fetch(resourceUrls.boards);
    if (!response.ok) {
        throw new Error("An error has occured while fetching the boards. Try again later.");
    }
    return response.json();
}


/**
 * Get and display the list of boards
 */
const BoardList = async () => {
    const boards = await getData();
    return (
        <div className='board-list'>
            {boards.map(board => <BoardListItem key={board.id} data={board} />)}
        </div>
    );
};

export default BoardList;
