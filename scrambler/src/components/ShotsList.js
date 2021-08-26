import React, { useEffect, useState } from 'react'
import classes from './ShotsList.module.css'

const ShotsList = (props) => {
    const [shotList, setShotList] = useState([])

    const fetchShots = async() => {
        try {
            const res = await fetch('/shots')
            const data = await res.json()
            
            setShotList(data.data.allShots)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        fetchShots()
    }, [])

    return (
        <div className={classes['shot-list']}>
            <ul>
                {shotList.map((el) => {
                return <li key={el._id}>Type: {el.shotType}</li>
                })}
            </ul>
        </div>
    )
}

export default ShotsList;