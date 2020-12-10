import React from 'react'

function Square({ value, onClick }) {

    const style = value ? `squares ${value}` : squares;

    return (
        <div>

            <button className="squares" onClick={onClick}>
                {value}
            </button>

        </div>
    )
}

export default Square
