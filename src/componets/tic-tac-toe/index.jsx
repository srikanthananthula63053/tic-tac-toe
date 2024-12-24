import { useState } from "react";
import "./styles.css";

// 0,1,2
// 3,4,5
// 6,7,8

function Squares({ value, onClick }) {
    return <button className="Square" onClick={onClick}>{value}</button>
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXturn, setIsXturn] = useState(true)

    function handleOnClick(getCurrentIndex) {
        let cpySquares = [...squares]
        cpySquares[getCurrentIndex] = isXturn ? "X" : "O";
        setIsXturn(!isXturn);
        setSquares(cpySquares)
    }
    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Squares onClick={() => handleOnClick(0)} />
                <Squares onClick={() => handleOnClick(1)} />
                <Squares onClick={() => handleOnClick(2)} />
            </div>
            <div className="row">
                <Squares onClick={() => handleOnClick(3)} />
                <Squares onClick={() => handleOnClick(4)} />
                <Squares onClick={() => handleOnClick(5)} />
            </div>
            <div className="row">
                <Squares onClick={() => handleOnClick(6)} />
                <Squares onClick={() => handleOnClick(7)} />
                <Squares onClick={() => handleOnClick(8)} />
            </div>

        </div>
    )
}