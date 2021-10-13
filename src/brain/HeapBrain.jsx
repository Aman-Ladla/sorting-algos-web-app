import Anime from 'react-anime';
import Bar from '../components/Bar';
function HeapBrain(index, value, heapStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted) {
    let color;
    let { i, j, sortedIndex, flag, heapify } = heapStates;
    if (isSorted) {
        color = "lightBlue";
    } else {
        if (sortedIndex.includes(index)) {
            color = "#f9fb5a";
        }
        else {
            if (index === i || index === j) {
                if (heapify) {
                    color = "#dda0dd"
                }
                else {
                    color = "#ff5e5e"
                }
            } else {
                color = "lightgreen";
            }
        }
    }


    if (index === i && flag) {
        return (
            <Anime duration={speed - 10} translateX={translate * (j - i)} easing={"easeInOutQuad"}>
                <Bar
                    Color={color}
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
            </Anime>
        )
    } else if (index === j && flag) {
        return (
            <Anime duration={speed - 10} translateX={-translate * (j - i)} easing={"easeInOutQuad"}>
                <Bar
                    Color={color}
                    arr={arr}
                    index={index}
                    heightFactor={heightFactor}
                    size={size}
                    value={value}
                    flag={sizeFlag}
                />
            </Anime>
        )
    } else {
        return (
            <Bar
                Color={color}
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

export default HeapBrain;