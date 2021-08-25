import classes from './CurrentHole.module.css'

const CurrentHole = (props) => {
    
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
                <button onClick={props.holeChange}>test</button>
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