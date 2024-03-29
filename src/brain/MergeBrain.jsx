import Anime from "react-anime";
import Bar from "../components/Bar";

function MergeBrain(
    index,
    value,
    mergeStates,
    arr,
    heightFactor,
    size,
    translate,
    sizeFlag,
    speed,
    isSorted
) {
    let {
        low,
        mid,
        k,
        i,
        j,
        f1,
        f2,
        isPositioned,
        isPositionedTx,
        colorEleArr,
        colorArr,
    } = mergeStates;

    let color = isSorted ? "lightBlue" : "lightGreen";

    if (f2 === 1) {
        if (isPositioned.includes(index)) {
            let temp = isPositionedTx[isPositioned.indexOf(index)];

            color = "#f9fb5a";
            let factor = 0.3 - ((100 - value) * 0.2) / 100;

            return (
                <Anime
                    duration={0}
                    scaleY={0.5}
                    translateY={425}
                    easing={"easeInOutQuad"}
                >
                    <Anime
                        duration={0}
                        translateX={translate * temp}
                        easing={"easeInOutQuad"}
                    >
                        <Anime
                            duration={speed - 10}
                            translateY={-440 - 1.8 * (100 - value)}
                            scaleY={2}
                            easing={"easeInOutQuad"}
                        >
                            <Bar
                                key={index}
                                Color={color}
                                arr={arr}
                                index={index}
                                heightFactor={heightFactor}
                                size={size}
                                value={value}
                                flag={sizeFlag}
                            />
                        </Anime>
                    </Anime>
                </Anime>
            );
        } else {
            color = "lightGreen";
            if (colorEleArr.some((row) => row.includes(index))) {
                // color = "purple";
                for (let i = 0; i < colorEleArr.length; i++) {
                    if (colorEleArr[i].includes(index)) {
                        color = colorArr[i];
                        break;
                    }
                }
            }
            return (
                <Bar
                    key={index}
                    Color={color}
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
            );
        }
    } else {
        if (f1 === 0) {
            if (index === low + i) {
                color = "#ff5e5e";
                return (
                    <Anime
                        duration={speed - 10}
                        scaleY={0.5}
                        translateY={425}
                        easing={"easeInOutQuad"}
                    >
                        <Anime
                            duration={speed - 10}
                            translateX={translate * (k - i)}
                            easing={"easeInOutQuad"}
                        >
                            <Bar
                                key={index}
                                Color={color}
                                arr={arr}
                                index={index}
                                heightFactor={heightFactor}
                                size={size}
                                value={value}
                                flag={sizeFlag}
                            />
                        </Anime>
                    </Anime>
                );
            } else if (isPositioned.includes(index)) {
                let temp = isPositionedTx[isPositioned.indexOf(index)];
                color = "#f9fb5a";
                return (
                    <Anime
                        duration={0}
                        scaleY={0.5}
                        translateY={425}
                        easing={"easeInOutQuad"}
                    >
                        <Anime
                            duration={0}
                            translateX={translate * temp}
                            easing={"easeInOutQuad"}
                        >
                            <Bar
                                key={index}
                                Color={color}
                                arr={arr}
                                index={index}
                                heightFactor={heightFactor}
                                size={size}
                                value={value}
                                flag={sizeFlag}
                            />
                        </Anime>
                    </Anime>
                );
            } else {
                if (colorEleArr.some((row) => row.includes(index))) {
                    // color = "purple";
                    for (let i = 0; i < colorEleArr.length; i++) {
                        if (colorEleArr[i].includes(index)) {
                            color = colorArr[i];
                            break;
                        }
                    }
                }

                return (
                    <Bar
                        key={index}
                        Color={color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                );
            }
        } else if (f1 === 1) {
            if (index === mid + j + 1) {
                color = "#ff5e5e";
                return (
                    <Anime
                        duration={speed - 10}
                        scaleY={0.5}
                        translateY={425}
                        easing={"easeInOutQuad"}
                    >
                        <Anime
                            duration={speed - 10}
                            translateX={translate * (low + k - (mid + j + 1))}
                            easing={"easeInOutQuad"}
                        >
                            <Bar
                                key={index}
                                Color={color}
                                arr={arr}
                                index={index}
                                heightFactor={heightFactor}
                                size={size}
                                value={value}
                                flag={sizeFlag}
                            />
                        </Anime>
                    </Anime>
                );
            } else if (isPositioned.includes(index)) {
                let temp = isPositionedTx[isPositioned.indexOf(index)];
                color = "#f9fb5a";
                return (
                    <Anime
                        duration={0}
                        scaleY={0.5}
                        translateY={425}
                        easing={"easeInOutQuad"}
                    >
                        <Anime
                            duration={0}
                            translateX={translate * temp}
                            easing={"easeInOutQuad"}
                        >
                            <Bar
                                key={index}
                                Color={color}
                                arr={arr}
                                index={index}
                                heightFactor={heightFactor}
                                size={size}
                                value={value}
                                flag={sizeFlag}
                            />
                        </Anime>
                    </Anime>
                );
            } else {
                if (colorEleArr.some((row) => row.includes(index))) {
                    // color = "purple";
                    for (let i = 0; i < colorEleArr.length; i++) {
                        if (colorEleArr[i].includes(index)) {
                            color = colorArr[i];
                            break;
                        }
                    }
                }
                return (
                    <Bar
                        key={index}
                        Color={color}
                        arr={arr}
                        index={index}
                        heightFactor={heightFactor}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                );
            }
        } else {
            if (isSorted) {
                color = "lightBlue";
            } else if (colorEleArr.some((row) => row.includes(index))) {
                for (let i = 0; i < colorEleArr.length; i++) {
                    if (colorEleArr[i].includes(index)) {
                        color = colorArr[i];
                        break;
                    }
                }

                // console.log(color);

                // color = "purple";
            }
            // color = isSorted && "lightBlue";
            return (
                <Bar
                    key={index}
                    Color={color}
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
}

export default MergeBrain;
