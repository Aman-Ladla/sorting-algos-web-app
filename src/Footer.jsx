import {useState} from "react";

function Footer() {

    const [value, setValue] = useState(50);

    const [onAboutButton, setAboutOnButton] = useState(false);

    const [onTeamButton, setTeamOnButton] = useState(false);

    function setValueImpl(event) {
        setValue(event.target.value);
    }

    function inAboutUs() {
        setAboutOnButton(true);
    }

    function outAboutUs() {
        setAboutOnButton(false);
    }

    function inTeam() {
        setTeamOnButton(true);
    }

    function outTeam() {
        setTeamOnButton(false);
    }

    return (
        <div className={"row footer"} >
            <div className={"col-lg-4"}>
                <label className={"footerLabel leftFooterContents"}><b>Animation Speed:</b> </label>
                <input onChange={setValueImpl}
                       type="range" min="1" max="100" value={value}
                       className="slider"
                       id="myRange">
                </input>
            </div>

            <div className={"col-lg-4"} style={{textAlign: "center"}}>
                <button className={"sortButton middleFooterContents"}>
                    Sort
                </button>
            </div>

            <div className={"col-lg-4"} style={{textAlign: "end"}}>
                <div className="row">
                    <div className="col offset-5">
                        <button className={"rightFooterContents align-middle"}
                                onMouseOver={inAboutUs}
                                onMouseOut={outAboutUs}
                                style={
                                    {
                                        color: onAboutButton && "black"
                                    }
                                }
                        >
                            About Us
                        </button>
                    </div>
                    <div className="col">
                        <button className={"rightFooterContents align-middle"}
                                onMouseOver={inTeam}
                                onMouseOut={outTeam}
                                style={
                                    {
                                        color: onTeamButton && "black"
                                    }
                                }
                        >
                            Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;