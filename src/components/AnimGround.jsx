import Bar from './Bar';
import BubbleBrain from '../brain/BubbleBrain';
import InsertBrain from '../brain/InsertBrain';
import QuickBrain from '../brain/QuickBrain';
import MergeBrain from '../brain/MergeBrain';
import HeapBrain from '../brain/HeapBrain';

function AnimGround(props) {

    let arr = props.arr;

    let heightFactor = 350 / props.max;

    let size = arr.length;

    let translate = 1000 / size;

    let sizeFlag = false;

    // if(Object.values(props).includes("states")){
    //     let {i, j, flag} = props.states;
    // }

    let speed = props.speed;

    let isSorted = props.isSorted;

    let { i, j, flag } = props.states;

    let algoID = props.algoID;

    if (size > 30) {
        sizeFlag = true;
    }

    function selectBrain(index, value, i, j, flag, algoID) {
        switch (algoID) {
            case 1:
                return BubbleBrain(index, value, i, j, flag, arr, heightFactor, size, translate, sizeFlag, speed, isSorted, props.BSI);
            case 2:
                return InsertBrain(index, value, i, j, flag, props.insertionStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted);
            case 3:
                return QuickBrain(index, value, i, j, flag, arr, heightFactor, size, translate, sizeFlag, speed, isSorted, props.positionedIndexArr, props.pivot, props.limits);
            case 4:
                return HeapBrain(index, value, props.states, arr, heightFactor, size, translate, sizeFlag, speed, isSorted);
            case 5:
                return MergeBrain(index, value, props.mergeStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted);
            default:
                return <Bar
                    Color="lightgreen"
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
        }
    }

    return (
        <div className="animContainer">
            <div className="anim">

                {/*<Anime delay={anime.stagger(50)} scale={[ 0.0, 1 ]}>*/}

                <div className={"anim"} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    {arr.map((value, index) => {
                        return (
                            selectBrain(index, value, i, j, flag, algoID)
                        );
                    }
                    )
                    }
                </div>

                {isSorted && <p align={"end"} style={{ paddingRight: "10px" }}>Real time for execution : {props.time}ms</p>}

            </div>
        </div>
    );
}

export default AnimGround;