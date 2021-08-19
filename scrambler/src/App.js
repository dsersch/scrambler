import React, { useState } from 'react';
import classes from './App.module.css';



function App() {
  const [shotList, setShotList] = useState([])

  const fetchShots = async() => {
    const res = await fetch('/shots')
    const data = await res.json()
    
    setShotList(data.data.allShots)
  }

  return (
    <div className={classes.app}>
      <button onClick={fetchShots}>Get Shots</button>
      <ul>
        {shotList.map((el) => {
          return <li key={el._id}>Type: {el.shotType}</li>
        })}
      </ul>
    </div>
  );
}

export default App;