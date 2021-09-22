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

    let {i, j, flag} = props.states;

    let sortedIndex = props.BSI;

    // console.log(props.BSI);
    //
    // console.log("received");
    //
    // console.log(props.max);
    //
    // console.log("received "+arr);

    if (size > 30) {
        sizeFlag = true;
    }

    function brain(index, value, i, j, flag){

        let color;

        if(isSorted){
            color = "lightBlue";
        }
        else if(sortedIndex > 1 && index > size - sortedIndex){
            color = "#f9fb5a";
        }
        else{
            if(index===i || index===j){
                color = "#ff5e5e"
            }
            else{
                color = "lightgreen";
            }
        }

        // let color =
        //     isSorted ?
        //     "lightBlue" : index===i || index===j ?
        //         "#ff5e5e" : "lightgreen";
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

    return (
        <div className="animContainer">
            <div className="anim align-content-center">

                {/*<Anime delay={anime.stagger(50)} scale={[ 0.0, 1 ]}>*/}
                {arr.map((value, index) => {
                        return (
                            brain(index, value, i, j, flag)
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