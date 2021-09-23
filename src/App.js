import Footer from "./components/Footer";
import Header from "./components/Header";
import Controls from "./components/Controls";
import AnimGround from "./components/AnimGround";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import createArray from "./CreatingArr";

function App() {

    const [arr, setArr] = useState(createArray(10));

    const [speed, setSpeed] = useState(300);

    const [states, setStates] = useState(
        {
            i: -1,
            j: -1,
            flag: false,
            shouldMoveUp: false
        }
    );

    const [inProcess, setInProcess] = useState(false);

    const [isSorted, setIsSorted] = useState(false);

    const [selectedAlgo, setAlgo] = useState(-1);

    function setAlgoImpl(i) {
        setAlgo(i);
    }

    function setIsSortedImpl(flag) {
        setIsSorted(flag);
    }

    function setInProcessImpl(flag) {
        setInProcess(flag);
    }


    function updateArr(size) {
        setArr(createArray(size));
    }

    function setSpeedImpl(speed) {
        setSpeed(speed);
    }

    function modifyArr(array, x, y, flagg, shouldMoveUp) {
        setArr([...array]);
        setStates({
            i: x,
            j: y,
            flag: flagg,
            shouldMoveUp: shouldMoveUp,
        });
        // console.log(arr);
    }

    // function updateSpeed(){
    //     setSpeed()
    // }

    let max = Math.max(...arr);

    return (
        <div className="App">
            <Header
                algoID={setAlgoImpl}/>
            <Controls
                update={updateArr}
                speed={speed}
                updateSpeed={setSpeedImpl}
                inProcess={inProcess}
                setInProcess={setInProcessImpl}
                setIsSorted={setIsSortedImpl}
            />
            <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
            />
            <Footer
                arr={arr}
                update={modifyArr}
                speed={speed}
                inProcess={inProcess}
                setInProcess={setInProcessImpl}
                isSorted={isSorted}
                setIsSorted={setIsSortedImpl}
                algoID = {selectedAlgo}
            />
        </div>
    );
}

export default App;
