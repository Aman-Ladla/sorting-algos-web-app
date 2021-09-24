import Anime from 'react-anime';
import Bar from '../components/Bar';

function InsertBrain(index, value, i, j, flag, insertionStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted) {
    let color = isSorted ? "lightBlue" : index === i || index === j ? "#ff5e5e" : "lightGreen";
    let {f1,f2,f3} = insertionStates;

    if (f1 === 1 && f2 === 0 && f3 === 1) {

        if (index === j) {
            return (
                <Anime duration={speed - 10} translateY={425} easing={"easeInOutQuad"}>
                    <Bar
                        Color={color}
                        arr={arr}
                        index={index}
                        heightFactor={0}
                        size={size}
                        value={value}
                        flag={sizeFlag}
                    />
                </Anime>
            );
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
    else if (f1 === 0) {

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
        }
        else if (index === j && flag) {
            return (
                <Anime duration={0} translateY={425} easing={"easeInOutQuad"}>
                    <Anime duration={speed - 10} translateX={-translate * (j - i)} easing={"easeInOutQuad"}>
                        <Bar
                            Color={color}
                            arr={arr}
                            index={index}
                            heightFactor={0}
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
    else if(f1 === 1 && f2 === 1 && f3 === 1){
        if(index === j){
            return (
                <Anime duration={0} translateY={425} easing={"easeInOutQuad"}>
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
            );
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

export default InsertBrain;