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
            flag: false
        }
    );

    const [inProcess, setInProcess] = useState(false);

    const [isSorted, setIsSorted] = useState(false);

    const [bubbleSortedIndex, setBSI] = useState(-1);

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

    function modifyArr(array, w, x, y, flagg) {
        setArr([...array]);
        setBSI(w);
        setStates({
            i: x,
            j: y,
            flag: flagg
        });
        // console.log(w);
    }

    // function updateSpeed(){
    //     setSpeed()
    // }

    let max = Math.max(...arr);

    return (
        <div className="App">
            <Header/>
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
                BSI={bubbleSortedIndex}
            />
            <Footer
                arr={arr}
                update={modifyArr}
                speed={speed}
                inProcess={inProcess}
                setInProcess={setInProcessImpl}
                isSorted={isSorted}
                setIsSorted={setIsSortedImpl}
            />
        </div>
    );
}

export default App;
