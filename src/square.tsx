import React from "react";


export function Square({clickedBy}: { clickedBy: string }) {

    function onClick() {
        // setIsClicked(!isClicked);
    }

    return (
        <button className="square" onClick={onClick}>
            {clickedBy}
        </button>
    );
}