import React, {useState} from "react";
import {Square} from "./square";

type createHandleClickParams = { boardState: any[]; setBoardState: any, playerState: string, setPlayerState: any }
type handleClickParams = { squareNumber: number };
type createRenderSquareParams = { boardState: string[] | null[]; handleClick: any }
type renderSquareParam = { squareNumber: number };

const createHandleClick = ({boardState, setBoardState, playerState, setPlayerState}: createHandleClickParams) =>
    ({squareNumber}: handleClickParams) => {
        if (boardState[squareNumber] === null && calculateWinner(boardState) === null) {
            setBoardState([...boardState.slice(0, squareNumber), playerState, ...boardState.slice(squareNumber + 1)]);
            setPlayerState(playerState === 'X' ? 'O' : 'X');
        }

    };

const createRenderSquare = ({boardState, handleClick}: createRenderSquareParams) =>
    ({squareNumber}: renderSquareParam) =>
        <Square
            key={squareNumber}
            squareNumber={squareNumber}
            clickedBy={boardState[squareNumber]}
            handleClick={handleClick}
        />;

const calculateWinner = (squares: number[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};


export function Board() {

    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [playerState, setPlayerState] = useState('X');
    const handleClick = createHandleClick({boardState, setBoardState, playerState, setPlayerState});

    const renderSquare = createRenderSquare({boardState, handleClick});
    return <div>
        {
            calculateWinner(boardState) ?
                <div className="status"> Winner: {calculateWinner(boardState)}</div> :
                <div className="status">Current player: {playerState}</div>
        }
        {
            [0, 1, 2].map(row =>
                <div key={row} className={`board-row`}>
                    {
                        [0, 1, 2].map(col => renderSquare({squareNumber: row * 3 + col}))
                    }
                </div>
            )
        }


    </div>;
}