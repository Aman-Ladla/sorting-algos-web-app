import Anime from "react-anime";
import Bar from "../components/Bar";
function QuickBrain(
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
    positionedIndexArr,
    pivot,
    limits
) {
    let { low, high } = limits;
    let color;

    if (isSorted) {
        color = "lightBlue";
    } else {
        if (index === pivot) {
            color = "red";
        } else {
            if (positionedIndexArr.includes(index)) {
                color = "#f9fb5a";
            } else {
                if (index === i || index === j) {
                    color = "#ff5e5e";
                } else {
                    if (index >= low && index < high) {
                        if (arr[index] <= arr[pivot]) {
                            color = "#dda0dd";
                        } else {
                            color = "#ba55d3";
                        }
                    } else {
                        color = "lightgreen";
                    }
                }
            }
        }
    }

    if (index === i && flag) {
        return (
            <Anime
                duration={speed - 10}
                translateX={translate * (j - i)}
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
        );
    } else if (index === j && flag) {
        return (
            <Anime
                duration={speed - 10}
                translateX={-translate * (j - i)}
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
        );
    } else {
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

export default QuickBrain;
