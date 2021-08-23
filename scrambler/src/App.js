import React, { useState } from 'react';
import classes from './App.module.css';
import AddPlayers from './components/AddPlayers';
import RoundForm from './components/RoundForm'


function App() {
  const [roundData, setRoundData] = useState(null)

  const onRoundStartedHandler = (data) => {
    setRoundData(data)
  }

  const onUpdateRoundData = (newRoundData) => {
    setRoundData(newRoundData)
  }

  return (
    <div className={classes.app}>
      {!roundData && <RoundForm roundStart={onRoundStartedHandler}/>}
      {roundData && <AddPlayers data={roundData} onUpdate={onUpdateRoundData} />}
    </div>
  );
}

export default App;