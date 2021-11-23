import { useState } from 'react';

function Controls(props) {

    const [size, setSize] = useState(10);

    const [speed, setSpeed] = useState(810 - props.speed);

    const [onButton, setOnButton] = useState(false);

    const [bgPosition, setbgPosition] = useState("0px 0px");

    let inProcess = props.inProcess;

    const active = '#64c3ef'
    const inactive = '#dbdbdb'

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setbgPosition("0px 0px");
        setOnButton(false);
    }

    function setSizeImpl(event) {
        if (!inProcess) {
            let temp = event.target.value;
            props.setIsSorted(false);
            setSize(temp);
            props.update(temp);
        }
    }

    function setSpeedImpl(event) {
        if (!inProcess) {
            let temp = event.target.value;
            setSpeed(temp);
            props.updateSpeed(810 - temp);
        }
    }

    return (
        <div className='controls'>
            <button
                style={{
                    backgroundColor: inProcess ? "grey" : onButton ? "#ff336a" : "black",
                    color: inProcess ? "black" : onButton && "black",
                    borderRadius: "30px",
                    fontSize: "2.4vh",
                    height: "70%",
                    fontWeight: 500,
                    backgroundPosition: bgPosition,
                }}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                onMouseMove={(e) => {
                    setbgPosition((e.clientX - 15) + 'px ' + (e.clientY - 15) + 'px');
                }}
                onClick={() => {
                    if (!inProcess) {
                        props.setIsSorted(false);
                        props.update(size);
                    }
                }}
                className={`newArrayButton ${onButton && "extra"}`}>
                Create Random Array
            </button>
            <div>
                <label className='labels' style={{ fontSize: "2.4vh", fontWeight: 500, }}>Array Size</label>
                <input
                    style={{
                        background: !inProcess ? `linear-gradient(90deg, ${active} 0% ${(100 / 96) * (size - 4)}%, ${inactive} ${(100 / 96) * (size - 4)}% 100%)` : "grey"
                    }}
                    className={"slider"}
                    onChange={setSizeImpl}
                    type="range" min="4" max="100" value={size}
                    id="myRange">
                </input>
            </div>
            <div>
                <label className='labels' style={{ fontSize: "2.4vh", fontWeight: 500, }}>Speed</label>
                <input
                    style={{
                        background: !inProcess ? `linear-gradient(90deg, ${active} 0% ${(10 / 79) * (speed - 10)}%, ${inactive} ${(10 / 79) * (speed - 10)}% 100%)` : "grey"
                    }}
                    onChange={setSpeedImpl}
                    className={"slider"}
                    type="range" min="10" max="800" value={speed}
                    id="myRange">
                </input>
            </div>
        </div>
    );
}

export default Controls;