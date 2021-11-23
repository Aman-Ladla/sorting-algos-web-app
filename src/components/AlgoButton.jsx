import { useState } from "react";

function AlgoButton(props) {

    const [onButton, setOnButton] = useState(false);

    const [clicked, setClicked] = useState(false);

    const [bgPosition, setbgPosition] = useState("0px 0px");

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setbgPosition("0px 0px");
        setOnButton(false);
    }

    return (
        <button className={`algoButtons ${onButton && "extra"}`}
            onMouseOver={inSubmit}
            onMouseOut={outSubmit}
            onMouseMove={(e) => {
                setbgPosition((e.clientX - 15) + 'px ' + (e.clientY - 15) + 'px');
            }}
            onClick={() => {
                if (!props.inProcess) {
                    setClicked(false);
                    props.setAlgoImpl(-1);
                    setClicked(true);
                    props.setAlgoImpl(props.id);
                }
            }}
            style={
                {
                    marginLeft: props.name === "Bubble Sort" ? "auto" : "40px",
                    fontWeight: 500,
                    backgroundColor:
                        clicked && (props.id === props.sa) ? "#3BBF7D" : (onButton ? "#ff336a" : "black"),
                    // cursor: onButton && "default",
                    color: onButton && "black",
                    backgroundPosition: bgPosition,
                }
            }>
            {props.name}
        </button>
    );
}

export default AlgoButton;