import Anime from 'react-anime';
import Bar from '../components/Bar';

function InsertBrain(index, value, i, j, flag, insertionStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted) {
    let {f1,f2,f3,insertSI} = insertionStates;
    let color = isSorted ? "lightBlue" : index === i || index === j ? "#ff5e5e" : index<insertSI ? "yellow" :"lightGreen";

    if (f1 === 1 && f2 === 0 && f3 === 1) {

        if (index === j) {
            return (
                <Anime duration={speed - 10} scaleY={0.5} translateY={425} easing={"easeInOutQuad"}>
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
                <Anime duration={0} scaleY={0.5} translateY={425} easing={"easeInOutQuad"}>
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

        let factor = 0.3 - (((100 - value) * 0.2)/100);

        if(index === j){
            return (
                <Anime duration={0} scaleY={0.5} translateY={425} easing={"easeInOutQuad"}>
                    <Anime duration={speed - 10} scaleY={2} translateY={-(360 - (425 * factor))} easing={"easeInOutQuad"}>
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