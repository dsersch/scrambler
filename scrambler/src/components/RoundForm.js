import React, { useState } from 'react';
import classes from './RoundForm.module.css'
import Card from './UI/Card'

const RoundForm = (props) => {
    const [formTeamName, setFormTeamName] = useState('')
    const [formTeamCaptain, setFormTeamCaptain] = useState('')
    const [startingHole, setStartingHole] = useState('1')

    const onTeamNameChangeHandler = (event) => {
        setFormTeamName(event.target.value)
    }

    const onTeamCaptianChangeHandler = (event) => {
        setFormTeamCaptain(event.target.value)
    }

    const onStargingHoleChange = (event) => {
        setStartingHole(event.target.value)
    }

    const postPlayer = async () => {
        try {
            const res = await fetch('/players', {
                method: 'POST',
                body: JSON.stringify({
                    playerName: formTeamCaptain,
                    teamName: formTeamName,
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

    const postRound = async () => {
            try {
                const player = await postPlayer();
                const res = await fetch('/rounds', {
                    method: 'POST',
                    body: JSON.stringify({
                        teamName: formTeamName,
                        players: [player],
                        currentHole: startingHole,
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
    
                const data = await res.json()
                props.roundStart(data.data)
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
        <Card>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <div>
                    <label htmlFor='team-name'>Team Name</label>
                    <input type='text' id='team-name' value={formTeamName} onChange={onTeamNameChangeHandler}/>
                </div>
                <div>
                    <label htmlFor='team-captian'>Team Captain</label>
                    <input type='text' id='team-captain' value={formTeamCaptain} onChange={onTeamCaptianChangeHandler}/>
                </div>
                <div>
                    <label htmlFor='starting-hole'>Starting Hole</label>
                    <input type='number' min='1' max='18' onChange={onStargingHoleChange}/>
                </div>
                <button type='submit'>Add Players</button>
            </form>
        </Card>
    )
}

export default RoundForm;