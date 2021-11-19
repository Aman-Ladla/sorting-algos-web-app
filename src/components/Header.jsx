import AlgoButton from "./AlgoButton";
import { useState } from "react";
import logo from "../../src/sortingLogo.png";

function Header(props) {

    const [selectedAlgo, setAlgo] = useState(-1);

    function setAlgoImpl(i) {
        props.algoID(i);
        setAlgo(i);
    }

    return (
        <div className={"head"} style={{ display: "flex" }}>
            <img
                src={logo}
                alt="Logo"
                height={48}
                style={{
                    paddingLeft: "27px"
                }}
            />
            <AlgoButton
                name={"Bubble Sort"}
                id={1}
                sa={selectedAlgo}
                setAlgoImpl={setAlgoImpl}
            />
            <AlgoButton
                name={"Insertion Sort"}
                id={2}
                setAlgoImpl={setAlgoImpl}
                sa={selectedAlgo}
            />
            <AlgoButton
                name={"Quick Sort"}
                id={3}
                setAlgoImpl={setAlgoImpl}
                sa={selectedAlgo}
            />
            <AlgoButton
                name={"Heap Sort"}
                id={4}
                setAlgoImpl={setAlgoImpl}
                sa={selectedAlgo}
            />
            <AlgoButton
                name={"Merge Sort"}
                id={5}
                setAlgoImpl={setAlgoImpl}
                sa={selectedAlgo}
            />
        </div>
    )
}

export default Header;