import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function clickHanlder() {
        setIsEditing((editing) => !editing);
    }

    function changeHandler(event) {
        console.log(event.tar)
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={changeHandler} />
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHanlder}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}