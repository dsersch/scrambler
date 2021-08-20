import React, { useState } from 'react';
import classes from './RoundForm.module.css'

const RoundForm = (props) => {
    const [formTeamName, setFormTeamName] = useState('')
    const [formTeamCaptain, setFormTeamCaptain] = useState('')

    const onTeamNameChangeHandler = (event) => {
        setFormTeamName(event.target.value)
    }

    const onTeamCaptianChangeHandler = (event) => {
        setFormTeamCaptain(event.target.value)
    }

    const postPlayer = async () => {
        try {
            const res = await fetch('/players', {
                method: 'POST',
                body: JSON.stringify({
                    playerName: formTeamCaptain,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const playerObj = await res.json()
            return playerObj.data._id

        } catch (err) {
            console.log(err)
        }
    }

    const postRound = async () => {
            try {
                const playerId = await postPlayer();
                const res = await fetch('/rounds', {
                    method: 'POST',
                    body: JSON.stringify({
                        teamName: formTeamName,
                        players: [playerId]
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
    
                const data = await res.json()
                console.log(data.data)
            } catch (err) {
                console.log(err)
            }

    }
    

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (formTeamName.length < 6 || formTeamCaptain < 6) {
            return
        }

        postRound()
        setFormTeamName('')
        setFormTeamCaptain('')
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div>
                <label>Team Name</label>
                <input type='text' value={formTeamName} onChange={onTeamNameChangeHandler}/>
            </div>
            <div>
                <label>Team Captain</label>
                <input type='text' value={formTeamCaptain} onChange={onTeamCaptianChangeHandler}/>
            </div>
            <button type='submit'>Get Started</button>
        </form>
    )
}

export default RoundForm;