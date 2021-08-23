import React from 'react';
import AddPlayerInput from './AddPlayerInput';
import classes from './AddPlayers.module.css';

const AddPlayers = (props) => {
    const players = props.data.players

    const onUpdate = (updatedRoster) => {
        props.onUpdate(updatedRoster)
    }

    return (
        <div className={classes['player-list']}>
            <ul>
                {players.map((el) => {
                    return <li key={el._id}>{el.playerName}</li>
                })}
            </ul>
            {players.length < 4 && <AddPlayerInput roundInfo={props.data} rosterUpdate={onUpdate}/>}
            <button>Start round</button> 
        </div>
    )
}

export default AddPlayers;