import {useState} from 'react';

function Controls(props) {

    const [size, setSize] = useState(14);

    const [speed, setSpeed] = useState(50);

    const [onButton, setOnButton] = useState(false);

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setOnButton(false);
    }

    function setSizeImpl(event) {
        let temp = event.target.value;
        setSize(temp);
        props.update(temp);
    }

    function setSpeedImpl(event) {
        setSpeed(event.target.value);
    }

    return (
        <div className='controls'>
            <button
                style={{
                    backgroundColor: onButton ? "#ff336a" : "black",
                    color: onButton && "black",
                    borderRadius: "30px",
                    fontSize: "large",
                    height: "40px",
                }}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                onClick={() => props.update(size)}
                className="newArrayButton">
                Create Random Array
            </button>
            <div>
                <label className='labels'>Array Size</label>
                <input
                    onChange={setSizeImpl}
                    type="range" min="4" max="100" value={size}
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