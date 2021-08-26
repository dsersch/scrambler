import React from 'react';
import classes from './AddShotForm.module.css'

const AddShotForm = (props) => {

    const onAddShot = (event) => {
        event.preventDefault()
        console.log('shot add clicked...')
    }

    return (
        <form onSubmit={onAddShot}>
            <select>
                <option value="Tee Shot">Tee Shot</option>
                <option value="Approach">Approach</option>
                <option value="Chip">Chip</option>
                <option value="Putt">Putt</option>
                <option value="Recovery">Recovery</option>
            </select>
            <select>
                <option value="Driver">Driver</option>
                <option value="3 Wood">3 Wood</option>
                <option value="5 Wood">5 Wood</option>
                <option value="3 Hybrid">3 Hybrid</option>
                <option value="4 Hybrid">4 Hybrid</option>
                <option value="5 Hybrid">5 Hybrid</option>
                <option value="4 Iron">4 Iron</option>
                <option value="5 Iron">5 Iron</option>
                <option value="6 Iron">6 Iron</option>
                <option value="7 Iron">7 Iron</option>
                <option value="8 Iron">8 Iron</option>
                <option value="9 Iron">9 Iron</option>
                <option value="Pitching Wedge">Pitching Wedge</option>
                <option value="52° Wedge">52° Wedge</option>
                <option value="54° Wedge">54° Wedge</option>
                <option value="56° Wedge">56° Wedge</option>
                <option value="58° Wedge">58° Wedge</option>
                <option value="60° Wedge">60° Wedge</option>
                <option value="Putter">Putter</option>
            </select>
            <select>
                {props.players.map((el) => {
                    return <option value={el.playerName}>{el.playerName}</option>
                })}
            </select>
            <button>Add Shot</button>
        </form>
    )
}

export default AddShotForm;