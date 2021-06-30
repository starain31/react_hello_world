import React from "react";
import {Square} from "./square";

export function Board() {
    const status = 'Next player: X';

    const boardState = Array(9).fill(null);

    return (
        <div>
            <div className="status">{status}</div>

            <div className="board-row">
                <Square clickedBy={boardState[1]}/>
                <Square clickedBy={boardState[2]}/>
                <Square clickedBy={boardState[3]}/>
            </div>
            <div className="board-row">
                <Square clickedBy={boardState[4]}/>
                <Square clickedBy={boardState[5]}/>
                <Square clickedBy={boardState[6]}/>
            </div>
            <div className="board-row">
                <Square clickedBy={boardState[7]}/>
                <Square clickedBy={boardState[8]}/>
                <Square clickedBy={boardState[9]}/>
            </div>
        </div>
    );
}