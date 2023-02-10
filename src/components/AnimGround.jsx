import Anime from "react-anime";
import BubbleBrain from "../brain/BubbleBrain";
import HeapBrain from "../brain/HeapBrain";
import InsertBrain from "../brain/InsertBrain";
import MergeBrain from "../brain/MergeBrain";
import QuickBrain from "../brain/QuickBrain";
import Bar from "./Bar";

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

    const strings = props.strings;

    let isSorted = props.isSorted;

    let { i, j, flag } = props.states;

    let algoID = props.algoID;

    if (size > 30) {
        sizeFlag = true;
    }

    function selectBrain(index, value, i, j, flag, algoID) {
        switch (algoID) {
            case 1:
                return BubbleBrain(
                    index,
                    value,
                    i,
                    j,
                    flag,
                    arr,
                    heightFactor,
                    size,
                    translate,
                    sizeFlag,
                    speed,
                    isSorted,
                    props.BSI
                );
            case 2:
                return InsertBrain(
                    index,
                    value,
                    i,
                    j,
                    flag,
                    props.insertionStates,
                    arr,
                    heightFactor,
                    size,
                    translate,
                    sizeFlag,
                    speed,
                    isSorted
                );
            case 3:
                return QuickBrain(
                    index,
                    value,
                    i,
                    j,
                    flag,
                    arr,
                    heightFactor,
                    size,
                    translate,
                    sizeFlag,
                    speed,
                    isSorted,
                    props.positionedIndexArr,
                    props.pivot,
                    props.limits
                );
            case 4:
                return HeapBrain(
                    index,
                    value,
                    props.states,
                    arr,
                    heightFactor,
                    size,
                    translate,
                    sizeFlag,
                    speed,
                    isSorted
                );
            case 5:
                return MergeBrain(
                    index,
                    value,
                    props.mergeStates,
                    arr,
                    heightFactor,
                    size,
                    translate,
                    sizeFlag,
                    speed,
                    isSorted
                );
            default:
                return (
                    <Bar
                        key={index}
                        Color="lightgreen"
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                );
        }
    }

    return (
        <div className="animContainer">
            {props.inProcess ? (
                <Anime
                    className={"psTemp0"}
                    duration={speed - 10}
                    scaleX={[0.0, 1.0]}
                    easing={"easeInOutQuad"}
                >
                    <div className={"psDiv"}>
                        {strings !== undefined &&
                            strings.map((s, index) => {
                                return (
                                    <div
                                        key={s}
                                        style={{
                                            backgroundColor:
                                                index === props.psIndex &&
                                                "#6c69cc",
                                        }}
                                    >
                                        <p style={{ padding: 4 }}>{s}</p>
                                    </div>
                                );
                            })}
                    </div>
                </Anime>
            ) : (
                props.isSorted && (
                    <Anime
                        className={"psTemp0"}
                        duration={speed - 10}
                        scaleX={[1.0, 0.0]}
                        easing={"easeInOutQuad"}
                    >
                        <div className={"psDiv"}>
                            {strings !== undefined &&
                                strings.map((s, index) => {
                                    return (
                                        <div
                                            key={s}
                                            style={{
                                                backgroundColor:
                                                    index === props.psIndex &&
                                                    "#6c69cc",
                                            }}
                                        >
                                            <p style={{ padding: 4 }}>{s}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    </Anime>
                )
            )}

            <div className="anim">
                {/*<Anime delay={anime.stagger(50)} scale={[ 0.0, 1 ]}>*/}

                <div
                    className={"bar"}
                    // style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "flex-start" }}
                >
                    {arr.map((value, index) => {
                        return selectBrain(index, value, i, j, flag, algoID);
                    })}
                </div>

                {isSorted && (
                    <p align={"end"} style={{ paddingRight: "10px" }}>
                        Actual execution time : {props.time}ms
                    </p>
                )}
            </div>
        </div>
    );
}

export default AnimGround;
