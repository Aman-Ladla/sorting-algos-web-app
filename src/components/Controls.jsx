import {useState} from 'react';

function Controls(props) {

    const [size, setSize] = useState(10);

    const [speed, setSpeed] = useState(810 - props.speed);

    const [onButton, setOnButton] = useState(false);

    let inProcess = props.inProcess;

    const active = '#64c3ef'
    const inactive = '#dbdbdb'

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setOnButton(false);
    }

    function setSizeImpl(event) {
        if(!inProcess) {
            let temp = event.target.value;
            props.setIsSorted(false);
            setSize(temp);
            props.update(temp);
        }
    }

    function setSpeedImpl(event) {
        if(!inProcess) {
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
                }}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                onClick={() => {
                    if(!inProcess) {
                        props.setIsSorted(false);
                        props.update(size);
                    }
                }}
                className="newArrayButton">
                Create Random Array
            </button>
            <div>
                <label className='labels' style = {{fontSize: "2.4vh",}}>Array Size</label>
                <input
                    style={{
                        background: !inProcess ? `linear-gradient(90deg, ${active} 0% ${(100/96) * (size - 4)}%, ${inactive} ${(100/96) * (size - 4)}% 100%)` : "grey"
                    }}
                    className={"slider"}
                    onChange={setSizeImpl}
                    type="range" min="4" max="100" value={size}
                    id="myRange">
                </input>
            </div>
            <div>
                <label className='labels' style = {{fontSize: "2.4vh",}}>Speed</label>
                <input
                    style={{
                        background:!inProcess ? `linear-gradient(90deg, ${active} 0% ${(10/79) * (speed - 10)}%, ${inactive} ${(10/79) * (speed - 10)}% 100%)` : "grey"
                    }}
                    onChange={setSpeedImpl}
                       className={"slider"}
                       type="range" min="1" max="800" value={speed}
                       id="myRange">
                </input>
            </div>
        </div>
    );
}

export default Controls;