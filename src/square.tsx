import React, {useState} from "react";



export function Square() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function onClick() {
        setIsClicked(!isClicked);
    }

    return (
        <button className="square" onClick={onClick}>
            {isClicked? 'X' : ''}
        </button>
    );
}