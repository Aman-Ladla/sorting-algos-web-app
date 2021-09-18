import Footer from "./components/Footer";
import Header from "./components/Header";
import Controls from "./components/Controls";
import AnimGround from "./components/AnimGround";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import createArray  from "./CreatingArr";

function App() {

    const[arr, setArr] = useState(createArray(25));

    function updateArr(size){
        setArr(createArray(size));
    }

    // function updateSpeed(){
    //     setSpeed()
    // }

    let max = Math.max(...arr);

  return (
    <div className="App">
        <Header/>
        <Controls update={updateArr}/>
        <AnimGround arr={arr} max={max} speed/>
        <Footer/>
    </div>
  );
}

export default App;
