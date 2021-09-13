import React, { useState, useEffect } from 'react'
import Timer from './Timer'

function StartMenu(props) {
    const [started, setStarted] = useState(false)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setStarted(true)
    }

    return (
        <div className="startMenu">
            <h1>Ready Player 1</h1>
            {started ? (
                <Timer setPlayState={props.setPlayState} />
            ) : (<form onSubmit={handleSubmit} >
                <button type="submit">Start</button>
            </form>)}
        </div>
    )
}

export default StartMenu
