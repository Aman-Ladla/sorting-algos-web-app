function AnimGround(props){

    let arr = props.arr;

    return (
        <div className={"row anim"} style={{textAlign: "center", backgroundColor:"white", justifyContent: "center"}}>

            {arr.map((value,index) => {
                return (
                    <div style={{height:arr.at(index),width:"40px"}}>
                        <div style={{height:arr.at(index) * 2 + 50,width:"30px", backgroundColor:"green"}}>

                        </div>
                        <div style={{width:"10px", backgroundColor:"white"}}>

                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default AnimGround;