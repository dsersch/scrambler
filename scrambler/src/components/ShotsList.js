import React from 'react'
import classes from './ShotsList.module.css'

const ShotsList = (props) => {
    return (
        <div className={classes['shot-list']}>
            <ul>
                {props.shots.map((el) => {
                    return <li key={el._id}>Type: {el.shotType}</li>
                 })}
            </ul>
        </div>
    )
}

export default ShotsList;