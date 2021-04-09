import React, { useState } from 'react'
import player from './player-data'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Player() {
    const [showDeets, setShowDeets] = useState(false)
    const [formData, setFormData] = useState({  name: '', highscore: null })

    const handleChange = (evt) => {
        const newData = {
            ...formData,
            [evt.target.name]: evt.target.value
        }
        console.log("Form data "+ newData.name + "   Evt data   " + evt.target.value);
        player.name = evt.target.value
        setFormData(newData)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("Player: "+player.name)
        setShowDeets(true)
    }

    let { name, highscore } = formData



    return (
        <div className="player-info">
            <h2>Player 1</h2>
            <h3>{formData.name}</h3>
            <h3>High score: {formData.highscore}</h3>

            <form onSubmit= { handleSubmit } className="player-form">
                <label className="form-label">Enter name:
                    <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={ handleChange } />
                </label>
                <button className="form-button" type="submit">Add new player</button>
            </form>
        </div>
    )
}

export default Player
