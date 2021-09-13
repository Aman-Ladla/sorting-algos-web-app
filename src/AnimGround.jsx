
function AnimGround(){

    const arr = [];

    for (let i=0;i<10;i++){
        arr.push(Math.random() * 100 + 50);
    }

    // let arr = [12,24,25,61,42];

    return (
        <div className={"row anim"} style={{textAlign: "center", backgroundColor:"white", justifyContent: "center"}}>

            {arr.map((value,index) => {
                return (
                    <div style={{height:arr.at(index),width:"40px"}}>
                        <div style={{height:arr.at(index),width:"20px", backgroundColor:"green"}}>

                        </div>
                        <div style={{width:"20px", backgroundColor:"white"}}>

                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default AnimGround;