import React, { useState } from 'react'
import { calculateWinner } from "../helper"
import Board from "./Board";
function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current]

        if (winner || squares[i]) return;

        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    }
    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to start";
            return (
                <li key={move}>
                    <button onClick={() => (move)}>{destination}</button>
                </li>
            )
        })


    return (
        <>

            <h1>Tic Tac Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>history</h3>
                    {renderMoves()}
                </div>
                <h3>{Winner ? "Winner" + winner : "Next Player:" + xO}</h3>
            </div>
        </>
    );
};

export default Game
