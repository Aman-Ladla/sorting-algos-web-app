import Anime from 'react-anime';
import Bar from '../components/Bar';

let modColor = "00ff00";

function MergeBrain(index, value, mergeStates, arr, heightFactor, size, translate, sizeFlag, speed, isSorted) {
    let { low, mid, k, i, j, f1, f2, isPositioned, isPositionedTx, colorEleArr, colorArr} = mergeStates;

    let color = isSorted ? "lightBlue" : "lightGreen";


    if (f2 === 1) {

        if (isPositioned.includes(index)) {
            let temp = isPositionedTx[isPositioned.indexOf(index)];

            color = "#f9fb5a";

            // color= "#";
            // let i=0;
            // while(i !== 6-modColor.length){
            //     color += "0";
            //     i++;
            // }

            // color += modColor;
            // console.log(color);
            // let yourNumber = parseInt(modColor, 16);
            // yourNumber = yourNumber + 20;
            // modColor = yourNumber.toString(16);
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
            color="lightGreen";
            if(colorEleArr.some(row => row.includes(index))){
                // color = "purple";
                for(let i=0;i<colorEleArr.length;i++){
                    if(colorEleArr[i].includes(index)){
                        color = colorArr[i];
                        break;
                    }
                }
            }
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
                color= "#f9fb5a";
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

                if(colorEleArr.some(row => row.includes(index))){
                    // color = "purple";
                    for(let i=0;i<colorEleArr.length;i++){
                        if(colorEleArr[i].includes(index)){
                            color = colorArr[i];
                            break;
                        }
                    }
                }

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
                color = "#f9fb5a";
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
                if(colorEleArr.some(row => row.includes(index))){
                    // color = "purple";
                    for(let i=0;i<colorEleArr.length;i++){
                        if(colorEleArr[i].includes(index)){
                            color = colorArr[i];
                            break;
                        }
                    }
                }
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

            if(isSorted){
                color = "lightBlue";
            }
            else if(colorEleArr.some(row => row.includes(index))){

                for(let i=0;i<colorEleArr.length;i++){
                    if(colorEleArr[i].includes(index)){
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