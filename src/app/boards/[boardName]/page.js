import BoardComponent from "@/components/boards/Board";
import React from "react";

/**
 * Board page
 * Displays the list of posts from the 
 * board
 * Each post will have a preview of the 
 * contents
 * TODO: add filtering, sorting
 */
const Board = () => {
    return (
        <div>
            board page, posts will be displayed
            <BoardComponent />
        </div>
    );
};

export default Board;