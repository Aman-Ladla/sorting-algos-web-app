function AnimGround(props){

    let arr = props.arr;

    return (
        <div className='anim'>

            {arr.map((value,index) => {
                return (
                    <div style={{height:arr.at(index),width:"40px"}}>
                        <div style={{height:arr.at(index) * 2 + 50,width:"30px", backgroundColor:"green"}}>

                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default AnimGround;