import React, { useState } from 'react';
import classes from './CurrentHole.module.css';
import ShotsList from './ShotsList'
import AddShotForm from './AddShotForm'

const CurrentHole = (props) => {
    const [holeId, setHoleId] = useState(null)

    const createHole = async () => {
        try {
            const res = await fetch('/holes', {
                method: 'POST',
                body: JSON.stringify({
                    round: props.roundData._id,
                    par: props.hole.par,
                    shots: [],
                    targetHit: false
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const createdHole = await res.json()
            setHoleId(createdHole.data._id)

        } catch (err) {
            console.log(err)
        }
    }

    const addShotHandler = (shot) => {
        console.log('clicked...')
    }
    
    return (
        <div className={classes['current-hole']}>
            <div className={classes['hole-info']}>
                <h1>Hole #{props.hole.holeNumber}</h1>
                <h2>Par: {props.hole.par}</h2>
                <h2>Handicap: {props.hole.handicap}</h2>
                <h3>distances</h3>
                <p className={classes.blue}>Blue: {props.hole.blueTee}y</p>
                <p className={classes.white}>White: {props.hole.whiteTee}y</p>
                <p className={classes.red}>Red: {props.hole.redTee}y</p>
                <img src={`http://localhost:3001/images/hole${props.hole.holeNumber}.png`} alt='hole 1 overview'/>    
            </div>
            <div className={classes.controls}>
                <button className={classes.prev} onClick={props.prevChange}>Prev</button>
                <button className={classes['start-hole']} onClick={createHole}>Start Hole</button> 
                <button className={classes.next} onClick={props.nextChange}>Next</button>
            </div>
            {holeId && <ShotsList holeId={holeId} />}
            {holeId && <AddShotForm roundData={props.roundData} holeId={holeId} onAddShot={addShotHandler} />}
        </div>
    )
}

export default CurrentHole;