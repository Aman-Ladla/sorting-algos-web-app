import Anime, {anime} from 'react-anime';
import Bar from "./Bar";

function AnimGround(props) {

    let arr = props.arr;

    let heightFactor = 350 / props.max;

    let size = arr.length;

    let translate = 1000/size;

    let flag = false;

    console.log("received");

    console.log(props.max);

    console.log(arr);

    if (size > 30) {
        flag = true;
    }

    function brain(index, value){
        if(index === 0){
            return (
                <Anime duration={1000} translateX={translate * 20} easing={"easeInOutQuad"}>
                    <Bar
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={flag}
                    />
                </Anime>
            )
        }
        else if(index === 20){
            return (
                <Anime duration={1000} translateX={-translate * 20} easing={"easeInOutQuad"}>
                    <Bar
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={flag}
                    />
                </Anime>
            )
        }
        else{
            return(
                <Bar
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={flag}
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

                            brain(index, value)
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