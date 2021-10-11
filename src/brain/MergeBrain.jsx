import Anime from 'react-anime';
import Bar from '../components/Bar';

function MergeBrain(index, value, mergeStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted) {
    let { low, mid, k, i, j, f1, f2, isPositioned, isPositionedTx } = mergeStates;

    let color = isSorted ? "lightBlue" : "lightGreen";


    if (f2 === 1) {

        if (isPositioned.includes(index)) {
            let temp = isPositionedTx[isPositioned.indexOf(index)];
            color= "yellow";
            return (
                <Anime duration={0} translateY={425} easing={"easeInOutQuad"}>
                    <Anime duration={0} translateX={translate * temp} easing={"easeInOutQuad"}>
                        <Anime duration={speed - 10} translateY={-425} easing={"easeInOutQuad"}>
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
                    </Anime>
                </Anime>
            )
        }
        else {
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
    else {
        if (f1 === 0) {

            if (index === low + i) {
                color = "#ff5e5e";
                return (
                    <Anime duration={speed - 10} translateY={425} easing={"easeInOutQuad"}>
                        <Anime duration={speed - 10} translateX={translate * (k - i)} easing={"easeInOutQuad"}>
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
                    </Anime>
                )
            }
            else if (isPositioned.includes(index)) {
                let temp = isPositionedTx[isPositioned.indexOf(index)];
                color= "yellow";
                return (

                    <Anime duration={0} translateY={425} easing={"easeInOutQuad"}>
                        <Anime duration={0} translateX={translate * temp} easing={"easeInOutQuad"}>
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
                    </Anime>
                )
            }
            else {
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
        else if (f1 === 1) {

            if (index === mid + j + 1) {
                color = "#ff5e5e";
                return (
                    <Anime duration={speed - 10} translateY={425} easing={"easeInOutQuad"}>
                        <Anime duration={speed - 10} translateX={translate * ((low + k) - (mid + j + 1))} easing={"easeInOutQuad"}>
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
                    </Anime>
                )
            }
            else if (isPositioned.includes(index)) {
                let temp = isPositionedTx[isPositioned.indexOf(index)];
                color = "yellow";
                return (
                    <Anime duration={0} translateY={425} easing={"easeInOutQuad"}>
                        <Anime duration={0} translateX={translate * temp} easing={"easeInOutQuad"}>
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
                    </Anime>
                )
            }
            else {
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
        else {
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


}

export default MergeBrain;