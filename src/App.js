import Footer from "./components/Footer";
import Header from "./components/Header";
import Controls from "./components/Controls";
import AnimGround from "./components/AnimGround";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import createArray from "./CreatingArr";

function App() {

    const[arr, setArr] = useState(createArray(14));

    function updateArr(size){
        setArr(createArray(size));
    }


  return (
    <div className="App">
        <Header/>
        <Controls update={updateArr}/>
        <AnimGround arr={arr}/>
        <Footer/>
    </div>
  );
}

export default App;
