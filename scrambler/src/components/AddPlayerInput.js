import React, { useState } from 'react';
import classes from './AddPlayerInput.module.css'

const AddPlayerInput = (props) => {
    const [playerName, setPlayerName] = useState('')

    const onPlayerNameChange = (event) => {
        setPlayerName(event.target.value)
    }

    const postPlayer= async () => {
        try {
            const res = await fetch('/players', {
                method: 'POST',
                body: JSON.stringify({
                    playerName: playerName,
                    teamName: props.roundInfo.teamName,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const playerObj = await res.json()
            return playerObj.data

        } catch (err) {
            console.log(err)
        }
    }

    const updateRoster = async () => {
        if (playerName.length < 6) {
            return;
        }
        try {
            const addedPlayer = await postPlayer();
            
            const res = await fetch(`/rounds/${props.roundInfo._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    players: [...props.roundInfo.players , addedPlayer]
                }),
                headers: {
                    "Content-type": 'application/json'
                }
            })
            const updatedRoster = await res.json()
            props.rosterUpdate(updatedRoster.data)
        } catch (err) {
            console.log(err)
        }
    }


    const addPlayerHandler = (event) => {
        event.preventDefault()
        updateRoster()
        if (props.roundInfo.players.length < 4) {
            setPlayerName('')
        } 
    }

    return (
        <form className={classes.form} onSubmit={addPlayerHandler}>
            <label>Player Name</label>
            <input type='text' value={playerName} onChange={onPlayerNameChange}></input>
            <button type='submit'>Add Player</button>
        </form>
    )
}

export default AddPlayerInput;