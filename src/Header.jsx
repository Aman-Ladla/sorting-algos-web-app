import AlgoButton from "./AlgoButton";

function Header(){
    return (
        <div className={"head"} style={{ display: "flex" }}>
            <img
                src="https://previews.123rf.com/images/cookelma/cookelma1310/cookelma131000096/22914293-fire-alphabet-letter-m-isolated-on-black-background-.jpg"
                alt="Logo"
                height={80}
            />
            <AlgoButton name={"Bubble Sort"}/>
            <AlgoButton name={"Insertion Sort"}/>
            <AlgoButton name={"Quick Sort"}/>
            <AlgoButton name={"Heap Sort"}/>
            <AlgoButton name={"Merge Sort"}/>
        </div>
    )
}

export default Header;