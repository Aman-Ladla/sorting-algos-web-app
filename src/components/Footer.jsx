import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BubbleSort from "../algorithms/BubbleSort";
import InsertionSort from "../algorithms/InsertionSort";
import MergeSort from '../algorithms/MergeSort';
import QuickSort from '../algorithms/QuickSort';
import HeapSort from '../algorithms/HeapSort';

function Footer(props) {

    // const [onAboutButton, setAboutOnButton] = useState(false);
    //
    // const [onTeamButton, setTeamOnButton] = useState(false);

    let isSorted = props.isSorted;

    let inProcess = props.inProcess;

    // const[clicked, setClicked] = useState(false);

    // function inAboutUs() {
    //     setAboutOnButton(true);
    // }
    //
    // function outAboutUs() {
    //     setAboutOnButton(false);
    // }
    //
    // function inTeam() {
    //     setTeamOnButton(true);
    // }
    //
    // function outTeam() {
    //     setTeamOnButton(false);
    // }
    toast.configure();
    async function setClickedImpl() {
        if (!isSorted && !inProcess) {
            // setClicked(isSorted);
            props.setInProcess(true);
            switch (props.algoID) {
                case 1:
                    await BubbleSort(props.arr, props.update, props.speed, props.setIsSorted, props.setInProcess, props.setTime);
                    break;
                case 2:
                    await InsertionSort(props.arr, props.update, props.speed, props.setIsSorted, props.setInProcess, props.setTime);
                    break;
                case 3:
                    await QuickSort(props.arr, 0, props.arr.length - 1, props.update, props.speed, props.setIsSorted, props.setInProcess, props.setTime);
                    break;
                case 4:
                    await HeapSort(props.arr, props.update, props.speed, props.setIsSorted, props.setInProcess, props.setTime);
                    break;
                case 5:
                    await MergeSort(props.arr, props.update, props.speed, props.setIsSorted, props.setInProcess, props.colorEleArr, props.colorArr, props.setTime);
                    break;
                default:
                    toast("Select an Algorithm", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                    props.setInProcess(false);
            }
        }
    }

    return (
        <div className={"footer"} >

            <div className={"col"} style={{ textAlign: "center", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                    className={"sortButton"}
                    onClick={setClickedImpl}
                    style={{
                        backgroundColor: inProcess || isSorted ? "grey" : "limegreen",
                        borderRadius: "10px",
                        fontSize: "2.4vh",
                        fontWeight: 500
                    }}
                >
                    Sort!
                </button>
            </div>

            {/*<div className={"col-lg-4"} style={{textAlign: "end"}}>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col offset-5">*/}
            {/*            <button className={"rightFooterContents align-middle"}*/}
            {/*                    onMouseOver={inAboutUs}*/}
            {/*                    onMouseOut={outAboutUs}*/}
            {/*                    style={*/}
            {/*                        {*/}
            {/*                            color: onAboutButton && "black"*/}
            {/*                        }*/}
            {/*                    }*/}
            {/*            >*/}
            {/*                About*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="col">*/}
            {/*            <button className={"rightFooterContents align-middle"}*/}
            {/*                    onMouseOver={inTeam}*/}
            {/*                    onMouseOut={outTeam}*/}
            {/*                    style={*/}
            {/*                        {*/}
            {/*                            color: onTeamButton && "black"*/}
            {/*                        }*/}
            {/*                    }*/}
            {/*            >*/}
            {/*                Team*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );

}

export default Footer;