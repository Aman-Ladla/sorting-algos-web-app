
function Bar(props){

    let arr = props.arr;
    let index = props.index;
    let heightFactor = props.heightFactor;
    let size = arr.length;
    let value = props.value;
    let flag = props.flag;
    let Color = props.Color; 

    // console.log(props);

    return(
        <div
            key={index}
            className={"align-items-center"}
            style={
                {
                    height: arr.at(index) * heightFactor + 100,
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
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
                    backgroundColor: Color
                }}>
                    {!flag && <div>
                        <p style={{marginBottom: "0"}}>{value}</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Bar;