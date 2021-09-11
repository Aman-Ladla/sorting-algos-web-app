import {useState} from "react";

function AlgoButton(props){

    const [onButton, setOnButton] = useState(false);

    function inSubmit() {
        setOnButton(true);
    }

    function outSubmit() {
        setOnButton(false);
    }

    return(
        <button className={"algoButtons"}
                onMouseOver={inSubmit}
                onMouseOut={outSubmit}
                style={
                    {
                        marginLeft: props.name === "Bubble Sort" ?   "auto" : "40px",
                        backgroundColor : onButton ? "#ff336a" : "black",
                        color : onButton && "black"
                    }
                }>
            {props.name}
        </button>
    );
}

export default AlgoButton;