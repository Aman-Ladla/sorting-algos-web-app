import Footer from "./Footer";
import Header from "./Header";
import Controls from "./Controls";
import AnimGround from "./AnimGround";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Controls/>
        <AnimGround/>
        <Footer/>
    </div>
  );
}

export default App;
