import React from 'react';
import AddPlayerInput from './AddPlayerInput';
import classes from './AddPlayers.module.css';
import Card from './UI/Card'

const AddPlayers = (props) => {
    const players = props.data.players

    const onUpdate = (updatedRoster) => {
        props.onUpdate(updatedRoster)
    }

    return (
        <Card className={classes['player-list']}>
            <ul>
                {players.map((el) => {
                    return <li key={el._id}>{el.playerName}</li>
                })}
            </ul>
            {players.length < 4 && <AddPlayerInput roundInfo={props.data} rosterUpdate={onUpdate}/>}
            <button onClick={props.onStart}>Start round</button> 
        </Card>
    )
}

export default AddPlayers;