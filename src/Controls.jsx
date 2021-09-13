import { useState } from 'react';

function Controls() {

    const [size, setSize] = useState(50);
    
    function setSizeImpl(event) {
        setSize(event.target.value);
    }

    const [speed, setSpeed] = useState(50);
    
    function setSpeedImpl(event) {
        setSpeed(event.target.value);
    }

    return (
        <div className='controls'>
            <button className = "newArrayButton">Create Random Array</button>
            <div>
            <label className='labels'>Array Size</label>
            <input onChange={setSizeImpl}
                type="range" min="1" max="100" value={size}
                id="myRange">
            </input>
            </div>
            <div>
            <label className='labels'>Speed</label>
            <input onChange={setSpeedImpl}
                type="range" min="1" max="100" value={speed}
                id="myRange">
            </input>
            </div>
        </div>
    );
}

export default Controls;