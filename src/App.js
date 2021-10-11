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
        }
    );

    const [inProcess, setInProcess] = useState(false);

    const [isSorted, setIsSorted] = useState(false);

    const [selectedAlgo, setAlgo] = useState(-1);

    const [bubbleSortedIndex, setBSI] = useState(-1);

    const [insertStates, setInsertStates] = useState(
        {
            f1: -1,
            f2: -1,
            f3: -1,
            insertSI: -1
        }
    );

    const [mergeStates, setMergeStates] = useState(
        {
            low: -1,
            mid: -1,
            k : -1,
            i : -1,
            j : -1,
            f1 : -1,
            isPositioned : [],
            isPositionedTx : [],
        }
    )

    const [positionedIndexArr, setPositionedIndexArr] = useState([]);

    const [pivotElement, setPivot] = useState(-1);

    const [partitionLimits, setLimits] = useState(
        {
            low: -1,
            high: -1
        }
    );

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

    function modifyArrBubble(array, w, x, y, flagg) {
        setArr([...array]);
        setBSI(w);
        setStates({
            i: x,
            j: y,
            flag: flagg,
        });
        // console.log(w);
    }

    function modifyArrInsert(array, x, y, f1, f2, f3, insertSI,flagg){
        setArr([...array]);
        setStates({
            i: x,
            j: y,
            flag: flagg,
        });
        setInsertStates(
            {
                f1: f1,
                f2: f2,
                f3: f3,
                insertSI: insertSI,
            }
        )
    }

    function modifyArrQuick(array, x, y, pivot,flagg,positionedIndexArr, low, high) {
        setArr([...array]);
        setPivot(pivot);
        setPositionedIndexArr(positionedIndexArr);
        setLimits({
            low: low,
            high: high
        });
        setStates({
            i: x,
            j: y,
            flag: flagg,
        });
        // console.log(w);
    }

    function modifyArrMerge(array, low, mid, k, i, j, f1, f2, isPostiioned, isPositionedTx){
        setArr([...array]);
        setMergeStates(
            {
                low : low,
                mid : mid,
                k : k,
                i : i,
                j : j,
                f1 : f1,
                f2 : f2,
                isPositioned : [...isPostiioned],
                isPositionedTx : [...isPositionedTx],
            }
        )
    }

    function updateAlgoSelection(selectedAlgo){
        switch(selectedAlgo){
            case 1:
                return modifyArrBubble;
            case 2:
                return modifyArrInsert;
            case 3:
                return modifyArrQuick;
            case 5:
                return modifyArrMerge;
            default:
                return modifyArrBubble;
        }
    }

    function selectAnimGround(algoID){
        switch(algoID){
            case 1:
                return <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
                BSI={bubbleSortedIndex}
            />
            case 2:
                return <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
                insertionStates={insertStates}
            />
            case 3:
                return <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
                positionedIndexArr = {positionedIndexArr}
                pivot = {pivotElement}
                limits = {partitionLimits}
            />
            case 5:
                return <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
                mergeStates = {mergeStates}
            />
            default:
                return <AnimGround
                arr={arr}
                max={max}
                states={states}
                speed={speed}
                isSorted={isSorted}
                algoID = {selectedAlgo}
            />

        }
    }

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
            {selectAnimGround(selectedAlgo)}
            <Footer
                arr={arr}
                // update={selectedAlgo===1 ? modifyArrBubble : selectedAlgo===2 ? modifyArrInsert : selectedAlgo===3 ? modifyArrQuick : modifyArrBubble}
                update = {updateAlgoSelection(selectedAlgo)}
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
