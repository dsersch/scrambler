import React, { useEffect, useState } from 'react'
import classes from './ShotsList.module.css'

const ShotsList = (props) => {
    const [shotList, setShotList] = useState([])

    const fetchShots = async() => {
        try {
            const res = await fetch(`/shots/hole/${props.holeId}`)
            const data = await res.json()
            console.log(data.data)
            
            
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect(()=> {
    //     fetchShots()
    // }, [fetchShots])


    return (
        <div className={classes['shot-list']}>
            <ul>
                {shotList.map((el) => {
                    return <li key={el._id}>Type: {el.shotType}</li>
                 })}
            </ul>
            <button onClick={fetchShots}>fetch shots</button>
        </div>
    )
}

export default ShotsList;