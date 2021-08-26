import React, { useState, useEffect } from 'react';
import classes from './CurrentHole.module.css';
import ShotsList from './ShotsList'
import AddShotForm from './AddShotForm'

const CurrentHole = (props) => {
    const [holeId, setHoleId] = useState(null)
    const [showForm, setShowForm] = useState(false)

    // const createHole = async (req, res) => {

    // }
    
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
                <button className={classes['add-shot']}>Add Shot</button> 
                <button className={classes.next} onClick={props.nextChange}>Next</button>
            </div>
            {holeId && <ShotsList holeId={holeId}/>}
            {showForm && <AddShotForm players={props.players} holeId={holeId}/>}
        </div>
    )
}

export default CurrentHole;