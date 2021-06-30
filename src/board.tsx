import React, {useState} from "react";
import {Square} from "./square";

type createHandleClickParams = { boardState: any[]; setBoardState: any, playerState: string, setPlayerState: any }
type handleClickParams = { squareNumber: number };

function createHandleClick({boardState, setBoardState, playerState, setPlayerState}: createHandleClickParams) {
    return function ({squareNumber}: handleClickParams) {
        if (boardState[squareNumber] === null) {
            setBoardState([...boardState.slice(0, squareNumber), playerState, ...boardState.slice(squareNumber + 1)]);
            setPlayerState(playerState === 'X' ? 'O' : 'X');
        }

    }
}

export function Board() {
    const status = 'Next player: X';

    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [playerState, setPlayerState] = useState('X');
    const handleClick = createHandleClick({boardState, setBoardState, playerState, setPlayerState});

    return (
        <div>
            <div className="status">{status}</div>

            <div className="board-row">
                <Square squareNumber={0} clickedBy={boardState[0]} handleClick={handleClick}/>
                <Square squareNumber={1} clickedBy={boardState[1]} handleClick={handleClick}/>
                <Square squareNumber={2} clickedBy={boardState[2]} handleClick={handleClick}/>
            </div>
            <div className="board-row">
                <Square squareNumber={3} clickedBy={boardState[3]} handleClick={handleClick}/>
                <Square squareNumber={4} clickedBy={boardState[4]} handleClick={handleClick}/>
                <Square squareNumber={5} clickedBy={boardState[5]} handleClick={handleClick}/>
            </div>
            <div className="board-row">
                <Square squareNumber={6} clickedBy={boardState[6]} handleClick={handleClick}/>
                <Square squareNumber={7} clickedBy={boardState[7]} handleClick={handleClick}/>
                <Square squareNumber={8} clickedBy={boardState[8]} handleClick={handleClick}/>
            </div>
        </div>
    );
}