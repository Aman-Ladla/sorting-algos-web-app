import BubbleBrain from '../brain/BubbleBrain';
import InsertBrain from '../brain/InsertBrain';

function AnimGround(props) {

    let arr = props.arr;

    let heightFactor = 350 / props.max;

    let size = arr.length;

    let translate = 1000 / size;

    let sizeFlag = false;

    let speed = props.speed;

    let isSorted = props.isSorted;

    let {i, j, flag} = props.states;

    let {f1, f2, f3} = props.insertionStates;

    let algoID = props.algoID;

    let sortedIndex = props.BSI;

    if (size > 30) {
        sizeFlag = true;
    }

    function selectBrain(index, value, i, j, flag, algoID) {
        switch (algoID) {
            case 1:
                return BubbleBrain(index, value, i, j, flag, arr, heightFactor, size, translate, sizeFlag, speed, isSorted, sortedIndex);
            case 2:
                return InsertBrain(index, value, i, j, flag, f1, f2, f3, arr, heightFactor, size, translate, sizeFlag, speed, isSorted);
            default:
                return BubbleBrain(index, value, i, j, flag, arr, heightFactor, size, translate, sizeFlag, speed, isSorted, sortedIndex);
        }
    }

    return (
        <div className="animContainer">
            <div className="anim align-content-center">

                {/*<Anime delay={anime.stagger(50)} scale={[ 0.0, 1 ]}>*/}
                {arr.map((value, index) => {
                        return (
                            selectBrain(index, value, i, j, flag, algoID)
                        );
                    }
                )
                }
                {/*</Anime>*/}

                {/*<Anime delay={anime.stagger(1000)} duration={1000} translateY = {400} easing={"easeInOutQuad"}*/}
                {/*>*/}
                {/*    <Anime delay={1000} duration={500} translateX = {-400} easing={"easeInOutQuad"}*/}
                {/*    >*/}
                {/*        <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />*/}
                {/*    </Anime>*/}
                {/*</Anime>*/}

            </div>
        </div>
    );
}

export default AnimGround;