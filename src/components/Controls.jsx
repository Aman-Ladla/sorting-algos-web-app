import {useState} from 'react';

function Controls(props) {

    const [size, setSize] = useState(25);

    const [speed, setSpeed] = useState(1000);

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
        let temp = event.target.value;
        setSpeed(temp);
    }

    return (
        <div className='controls'>
            <button
                style={{
                    backgroundColor: onButton ? "#ff336a" : "black",
                    color: onButton && "black",
                    borderRadius: "30px",
                    fontSize: "2.4vh",
                    height: "70%",
                }}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                onClick={() => props.update(size)}
                className="newArrayButton">
                Create Random Array
            </button>
            <div>
                <label className='labels' style = {{fontSize: "2.4vh",}}>Array Size</label>
                <input
                    onChange={setSizeImpl}
                    type="range" min="4" max="100" value={size}
                    id="myRange">
                </input>
            </div>
            <div>
                <label className='labels' style = {{fontSize: "2.4vh",}}>Speed</label>
                <input onChange={setSpeedImpl}
                       type="range" min="1000" max="5000" value={speed}
                       id="myRange">
                </input>
            </div>
        </div>
    );
}

export default Controls;