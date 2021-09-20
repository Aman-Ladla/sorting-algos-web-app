import Footer from "./components/Footer";
import Header from "./components/Header";
import Controls from "./components/Controls";
import AnimGround from "./components/AnimGround";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import createArray  from "./CreatingArr";

function App() {

    const[arr, setArr] = useState(createArray(10));

    const[speed, setSpeed] = useState(300);

    function updateArr(size){
        setArr(createArray(size));
    }

    function setSpeedImpl(speed){
        setSpeed(speed);
    }

    function modifyArr(array){
        setArr([...array]);
        // console.log(arr);
    }

    // function updateSpeed(){
    //     setSpeed()
    // }

    let max = Math.max(...arr);

  return (
    <div className="App">
        <Header/>
        <Controls update={updateArr} speed={speed} updateSpeed={setSpeedImpl}/>
        <AnimGround arr={arr} max={max}/>
        <Footer arr={arr} update={modifyArr} speed={speed}/>
    </div>
  );
}

export default App;
