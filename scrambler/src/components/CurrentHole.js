import React, { useState } from 'react';
import classes from './CurrentHole.module.css'
// import holeImage from '../images/hole1.png'

const CurrentHole = (props) => {
    const [holeInfo, setHoleInfo] = useState({
        holeNumber: 0,
        par: 0,
        handicap: 0,
        redTee: 0,
        whiteTee: 0,
        blueTee: 0
    })

    const getHoleInfo = async (req, res) => {
        try {
            const res = await fetch(`holeinfo/${props.currentHole}`)
            const data = await res.json()
            
            setHoleInfo(data.data[0])
        } catch (err) {
            console.log(err)
        }
    }

   getHoleInfo()


    return (
        <div className={classes['current-hole']}>
            <div className={classes['hole-info']}>
                <h1>Hole #{holeInfo.holeNumber}</h1>
                <h2>Par: {holeInfo.par}</h2>
                <h2>Handicap: {holeInfo.handicap}</h2>
                <h3>distances</h3>
                <p className={classes.blue}>Blue: {holeInfo.blueTee}y</p>
                <p className={classes.white}>White: {holeInfo.whiteTee}y</p>
                <p className={classes.red}>Red: {holeInfo.redTee}y</p>
                <img src={`http://localhost:3001/images/hole${holeInfo.holeNumber}.png`} alt='hole 1 overview'/>
                <button onClick={getHoleInfo}>test</button>
            </div>
            <div>
                shot list
            </div>
            <div>
                add shot form
            </div>
            <div>
                buttons for add shot and finish hole
            </div>
        </div>
    )
}

export default CurrentHole;