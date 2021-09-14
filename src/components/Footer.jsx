import {useState} from "react";

function Footer() {

    // const [value, setValue] = useState(50);
    //
    // const [onAboutButton, setAboutOnButton] = useState(false);
    //
    // const [onTeamButton, setTeamOnButton] = useState(false);

    const[clicked, setClicked] = useState(false);

    // function setValueImpl(event) {
    //     setValue(event.target.value);
    // }
    //
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

    function setClickedImpl(){
        setClicked(!clicked);
    }

    return (
        <div className={"row footer"} >
            {/*<div className={"col-lg-4"}>*/}
            {/*    <label className={"footerLabel leftFooterContents"}><b>Speed:</b> </label>*/}
            {/*    <input onChange={setValueImpl}*/}
            {/*           type="range" min="1" max="100" value={value}*/}
            {/*           className="slider"*/}
            {/*           id="myRange">*/}
            {/*    </input>*/}
            {/*</div>*/}

            <div className={"col"} style={{textAlign: "center"}}>
                <button
                    className={"sortButton middleFooterContents"}
                    onClick={setClickedImpl}
                    style={{backgroundColor: clicked ? "grey" : "limegreen"}}
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