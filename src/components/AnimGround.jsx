function AnimGround(props){

    let arr = props.arr;

    return (
        <div className={"anim"} style={{backgroundColor:"white"}}>

            {arr.map((value,index) => {
                return (

                    <div
                        className={"align-items-center"}
                        style={
                            {
                                height:arr.at(index) * 2 + 100,
                                display:"flex",
                                flexDirection:"column",
                                alignContent:"center",
                                marginTop:"10px"
                            }
                        }>

                        <div>
                            <p style={{marginBottom:"0"}}>{value}</p>
                        </div>

                        <div style={{height:arr.at(index) * 2 + 50,width:"40px",display:"flex",
                            justifyContent:"center",
                        }}>
                            <div style={{height:arr.at(index) * 2 + 50,width:"30px", backgroundColor:"green"}}>

                            </div>
                        </div>
                    </div>
                );
            }
            )
            }

        </div>
    );
}

export default AnimGround;