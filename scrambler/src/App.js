import React, { useState } from 'react';
import classes from './App.module.css';
import RoundForm from './components/RoundForm'



function App() {
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

  return (
    <div className={classes.app}>
      <RoundForm />
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