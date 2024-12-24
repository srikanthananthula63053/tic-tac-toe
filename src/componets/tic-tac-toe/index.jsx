import "./styles.css";

// 0,1,2
// 3,4,5
// 6,7,8

function Squares({ value }) {
    return <button className="Square">{value}</button>
}

export default function TicTacToe() {
    return (
        <div className="tic-tac-toe-container">
            <div className="row">         
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="row">
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="row">
                <Squares />
                <Squares />
                <Squares />
            </div>

        </div>
    )
}