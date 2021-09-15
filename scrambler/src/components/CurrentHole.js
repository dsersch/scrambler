import React, { useState } from 'react';
import classes from './CurrentHole.module.css';
import Card from './UI/Card'
import ShotsList from './ShotsList'
import AddShotForm from './AddShotForm'

const CurrentHole = (props) => {
    const [holeId, setHoleId] = useState(null)
    const [shots, setShots] = useState([])

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
        setShots((prevState) => {
            return [...prevState, shot]
        })
    }

    const onFinishHandler = async () => {
        const shotIds = shots.map((el) => {
            return el._id
        })
        try {
            const res = await fetch(`/holes/${holeId}`, {
                method: 'PATCH', 
                body: JSON.stringify({
                    shots: shotIds
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            console.log(res.status)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
        setShots([])
        props.nextChange()
    }
    
    return (
        <Card>
            <div className={classes['hole-info']}>
                <div className={classes.container}>
                    <h1>Hole #{props.hole.holeNumber}</h1>
                    <div className={classes.stats}>
                        <div className={classes['hole-stats']}>
                            <h2>Par: {props.hole.par}</h2>
                            <h2>HC: {props.hole.handicap}</h2>
                        </div>
                        <div className={classes.distances}>
                            <p className={classes.blue}>Blue: {props.hole.blueTee}y</p>
                            <p className={classes.white}>White: {props.hole.whiteTee}y</p>
                            <p className={classes.red}>Red: {props.hole.redTee}y</p>
                        </div>
                    </div>
                </div>
                <img src={`http://localhost:3001/images/hole${props.hole.holeNumber}.png`} alt='hole 1 overview'/>    
            </div>
            <div className={classes.controls}>
                <button className={classes.prev} onClick={props.prevChange}>Prev</button>
                <button className={classes['start-hole']} onClick={createHole}>Start Hole</button> 
                <button className={classes.next} onClick={props.nextChange}>Next</button>
            </div>
            {holeId && shots.length > 0 && <ShotsList holeId={holeId} shots={shots}/>}
            {holeId && <AddShotForm roundData={props.roundData} holeId={holeId} onAddShot={addShotHandler} onFinish={onFinishHandler}/>}
        </Card>
    )
}

export default CurrentHole;