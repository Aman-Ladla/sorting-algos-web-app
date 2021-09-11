import AlgoButton from "./AlgoButton";

function Header(){
    return (
        <div className={"head"} style={{ display: "flex" }}>
            <img
                src="https://previews.123rf.com/images/boxfile123/boxfile1232007/boxfile123200700189/151555745-sa-logo-design-vector-icon-luxury.jpg"
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