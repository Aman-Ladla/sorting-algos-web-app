import {useState} from "react";
import BubbleSort from "../algorithms/BubbleSort";

function Footer(props) {

    // const [onAboutButton, setAboutOnButton] = useState(false);
    //
    // const [onTeamButton, setTeamOnButton] = useState(false);

    const[clicked, setClicked] = useState(false);

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

    async function setClickedImpl(){
        setClicked(!clicked);
        await BubbleSort(props.arr, props.update, props.speed);
    }

    return (
        <div className={"footer"} >

            <div className={"col"} style={{textAlign: "center",height: "100%",display: "flex",justifyContent: "center", alignItems:"center"}}>
                <button
                    className={"sortButton"}
                    onClick={setClickedImpl}
                    style={{backgroundColor: clicked ? "grey" : "limegreen", borderRadius: "10px",fontSize: "2.4vh"}}
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