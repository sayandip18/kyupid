import React, {useState} from 'react';

import './ToggleBoard.css';

function ToggleBoard({type, setType}) {
    const [color1, setColor1] = useState("white");
    const [color2, setColor2] = useState("white");
    return (
        <div className="toggle">
            <div id="first" onClick={() => {setType("pro"); setColor1("blue"); setColor2("white")}} style={{color: color1}}>Pro</div>
            <div id="second" onClick={() => {setType("general"); setColor2("purple"); setColor1("white")}} style={{color: color2}}>General</div>
        </div>
    )
}

export default ToggleBoard;