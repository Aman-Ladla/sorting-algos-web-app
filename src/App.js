import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AnimGround from "./components/AnimGround";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
import Header from "./components/Header";
import createArray from "./CreatingArr";
import getPseudo from "./getPseudo";

let arr0;
let value = true;

function App() {
    const [arr, setArr] = useState(createArray(10));

    const [strings, setStrings] = useState([]);

    const [psIndex, setPsIndex] = useState(-1);

    if (value) {
        arr0 = [...arr];
        value = false;
    }

    const [speed, setSpeed] = useState(300);

    // useEffect(() => {
    //     // console.log(arr);
    //     // console.log('setArr is called');
    //     console.log('update' + arr0);
    // }, [arr0]);

    const [states, setStates] = useState({
        i: -1,
        j: -1,
        flag: false,
    });

    const [inProcess, setInProcess] = useState(false);

    const [isSorted, setIsSorted] = useState(false);

    const [time, setTime] = useState(0);

    const [selectedAlgo, setAlgo] = useState(-1);

    const [bubbleSortedIndex, setBSI] = useState(-1);

    const [insertStates, setInsertStates] = useState({
        f1: -1,
        f2: -1,
        f3: -1,
        insertSI: -1,
    });

    const [mergeStates, setMergeStates] = useState({
        low: -1,
        mid: -1,
        k: -1,
        i: -1,
        j: -1,
        f1: -1,
        isPositioned: [],
        isPositionedTx: [],
        colorEleArr: [],
        colorArr: [],
    });

    const [positionedIndexArr, setPositionedIndexArr] = useState([]);

    const [pivotElement, setPivot] = useState(-1);

    const [partitionLimits, setLimits] = useState({
        low: -1,
        high: -1,
    });

    const [heapStates, setHeapStates] = useState({
        i: -1,
        j: -1,
        sortedIndex: [],
        flag: false,
        heapify: false,
    });

    function setAlgoImpl(i) {
        if (selectedAlgo === -1) {
            arr0 = [...arr];
        } else {
            setArr([...arr0]);
            setInProcessImpl(false);
            setIsSortedImpl(false);
        }
        setStrings(getPseudo(i));
        setAlgo(i);
    }

    function setIsSortedImpl(flag) {
        setIsSorted(flag);
    }

    function setTimeImpl(time) {
        setTime(time);
    }

    function setInProcessImpl(flag) {
        setInProcess(flag);
    }

    function updateArr(size) {
        value = true;
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

    function modifyArrInsert(array, x, y, f1, f2, f3, insertSI, flagg) {
        setArr([...array]);
        setStates({
            i: x,
            j: y,
            flag: flagg,
        });
        setInsertStates({
            f1: f1,
            f2: f2,
            f3: f3,
            insertSI: insertSI,
        });
    }

    function modifyArrQuick(
        array,
        x,
        y,
        pivot,
        flagg,
        positionedIndexArr,
        low,
        high
    ) {
        setArr([...array]);
        setPivot(pivot);
        setPositionedIndexArr(positionedIndexArr);
        setLimits({
            low: low,
            high: high,
        });
        setStates({
            i: x,
            j: y,
            flag: flagg,
        });
        // console.log(w);
    }

    function modifyArrMerge(
        array,
        low,
        mid,
        k,
        i,
        j,
        f1,
        f2,
        isPostiioned,
        isPositionedTx,
        colorEleArr,
        colorArr
    ) {
        setArr([...array]);
        setMergeStates({
            low: low,
            mid: mid,
            k: k,
            i: i,
            j: j,
            f1: f1,
            f2: f2,
            isPositioned: [...isPostiioned],
            isPositionedTx: [...isPositionedTx],
            colorEleArr: [...colorEleArr],
            colorArr: [...colorArr],
        });
    }

    function modifyArrHeap(array, i, j, sortedIndex, flagg, heapify) {
        setArr([...array]);
        setHeapStates({
            i: i,
            j: j,
            sortedIndex: sortedIndex,
            flag: flagg,
            heapify: heapify,
        });
    }

    function updateAlgoSelection(selectedAlgo) {
        switch (selectedAlgo) {
            case 1:
                return modifyArrBubble;
            case 2:
                return modifyArrInsert;
            case 3:
                return modifyArrQuick;
            case 4:
                return modifyArrHeap;
            case 5:
                return modifyArrMerge;
            default:
                return modifyArrBubble;
        }
    }

    function selectAnimGround(algoID) {
        switch (algoID) {
            case 1:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        inSorted={isSorted}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={states}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                        BSI={bubbleSortedIndex}
                    />
                );
            case 2:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={states}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                        insertionStates={insertStates}
                    />
                );
            case 3:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={states}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                        positionedIndexArr={positionedIndexArr}
                        pivot={pivotElement}
                        limits={partitionLimits}
                    />
                );
            case 4:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={heapStates}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                    />
                );
            case 5:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={states}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                        mergeStates={mergeStates}
                    />
                );
            default:
                return (
                    <AnimGround
                        arr={arr}
                        inProcess={inProcess}
                        strings={strings}
                        psIndex={psIndex}
                        max={max}
                        states={states}
                        speed={speed}
                        isSorted={isSorted}
                        time={time}
                        algoID={selectedAlgo}
                    />
                );
        }
    }

    let max = Math.max(...arr);

    return (
        <div className="App">
            <Header algoID={setAlgoImpl} inProcess={inProcess} />
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
                setPsIndex={setPsIndex}
                update={updateAlgoSelection(selectedAlgo)}
                speed={speed}
                inProcess={inProcess}
                setInProcess={setInProcessImpl}
                isSorted={isSorted}
                setIsSorted={setIsSortedImpl}
                setTime={setTimeImpl}
                algoID={selectedAlgo}
                colorEleArr={mergeStates.colorEleArr}
                colorArr={mergeStates.colorArr}
            />
        </div>
    );
}

export default App;
