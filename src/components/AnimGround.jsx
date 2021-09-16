function AnimGround(props) {

    let arr = props.arr;

    let heightFactor = 350 / props.max;

    let size = arr.length;

    let flag = false;

    console.log("received");

    console.log(props.max);

    console.log(arr);

    if (size > 25) {
        flag = true;
    }


    return (
        <div className="animContainer">
            <div className="anim align-content-center">

                {arr.map((value, index) => {
                        return (

                            <div
                                key={index}
                                className={"align-items-center"}
                                style={
                                    {
                                        height: arr.at(index) * heightFactor + 100,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignContent: "center",
                                        marginTop: "10px",
                                    }
                                }>

                                <div style={{
                                    height: arr.at(index) * heightFactor + 50,
                                    width: 1000 / size,
                                    display: "flex",
                                    justifyContent: "center",
                                }}>
                                    <div style={{
                                        height: arr.at(index) * heightFactor + 50,
                                        width: 6000 / (size * 7),
                                        backgroundColor: "lightgreen"
                                    }}>
                                        {!flag && <div>
                                            <p style={{marginBottom: "0"}}>{value}</p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )
                }

            </div>
        </div>
    );
}

export default AnimGround;