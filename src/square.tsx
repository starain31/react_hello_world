import React from "react";

type SquareProps = {
    clickedBy : string;
    squareNumber: number;
    handleClick: ({squareNumber}: { squareNumber: number }) => void;
}

export function Square({squareNumber, handleClick, clickedBy}: SquareProps) {
    return (
        <button className="square" onClick={() => handleClick({squareNumber})}>
            {clickedBy}
        </button>
    );
}