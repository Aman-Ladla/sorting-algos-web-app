import Anime from 'react-anime';
import Bar from "./Bar";

function AnimGround(props) {

    let arr = props.arr;

    let heightFactor = 350 / props.max;

    let size = arr.length;

    let translate = 1000/size;

    let sizeFlag = false;

    let speed = props.speed;

    let isSorted = props.isSorted;

    let {i, j, flag,shouldMoveUp} = props.states;

    // console.log("received");
    //
    // console.log(props.max);
    //
    // console.log("received "+arr);

    if (size > 30) {
        sizeFlag = true;
    }

    function BubbleBrain(index, value, i, j, flag){
        let color = isSorted ? "lightBlue" : index===i || index===j ? "#ff5e5e" : "lightgreen";
        if(index === i && flag){
            return (
                <Anime duration={speed-10} translateX={translate * (j-i)} easing={"easeInOutQuad"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
            )
        }
        else if(index === j && flag){
            return (
                <Anime duration={speed-10} translateX={-translate * (j-i)} easing={"easeInOutQuad"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
            )
        }
        else{
            return(
                <Bar
                    Color = {color}
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
            )
        }
    }

    function InsertBrain(index,value,i,j,flag){
        let color = isSorted ? "lightBlue" : index===i ? "red" : index===j ? "#ff5e5e" : "lightGreen";
        if(index===i){
            console.log(index,flag);
            if(flag){
                return <Anime 
                duration={speed-10} 
                translateX= {translate*(j-i)}
                delay = {100}
                easing={"easeInOutQuad"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
            }
            else{
                console.log("should translate Y");
                if(shouldMoveUp){
                    shouldMoveUp = false;
                return <Anime duration={0} translateY = {-translate} easing={"linear"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
                }
                else{
                    shouldMoveUp = true;
                return <Anime duration={0} translateY = {translate} easing={"linear"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
                }
            }
        }
        else if(index===j){
            console.log(index,flag);
            if(flag){
                console.log("should translate X");
                return <Anime duration={speed-10} translateX = {-translate*(j-i)} easing={"easeInOutQuad"}>
                    <Bar
                        Color = {color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
            }
        }
        else{
            return(
                <Bar
                    Color = {color}
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
            )
        }

    }

    return (
        <div className="animContainer">
            <div className="anim align-content-center">

                {/*<Anime delay={anime.stagger(50)} scale={[ 0.0, 1 ]}>*/}
                {arr.map((value, index) => {
                        return (
                            InsertBrain(index, value, i, j, flag)
                        );
                    }
                )
                }
                {/*</Anime>*/}

            </div>
        </div>
    );
}

export default AnimGround;