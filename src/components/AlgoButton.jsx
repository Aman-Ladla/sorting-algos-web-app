import {useState} from "react";

function AlgoButton(props){

    const [onButton, setOnButton] = useState(false);

    const[clicked, setClicked] = useState(false);

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setOnButton(false);
    }

    function click(){
        setClicked(true);
    }

    return(
        <button className={"algoButtons"}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                onClick={() => {
                    setClicked(false);
                    props.setAlgoImpl(-1);
                    setClicked(true);
                    props.setAlgoImpl(props.id);
                }}
                style={
                    {
                        marginLeft: props.name === "Bubble Sort" ?   "auto" : "40px",
                        backgroundColor :
                        clicked && (props.id === props.sa) ? "#3BBF7D" : (onButton ? "#ff336a" : "black"),
                        color : onButton && "black"
                    }
                }>
            {props.name}
        </button>
    );
}

export default AlgoButton;