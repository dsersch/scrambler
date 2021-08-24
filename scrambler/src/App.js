import React, { useState } from 'react';
import classes from './App.module.css';
import AddPlayers from './components/AddPlayers';
import RoundForm from './components/RoundForm';
import CurrentHole from './components/CurrentHole';


function App() {
  const [roundData, setRoundData] = useState(null)
  const [roundStarted, setRoundStarted] = useState(false)

  const onRoundStartedHandler = (data) => {
    setRoundData(data)
  }

  const onUpdateRoundData = (newRoundData) => {
    setRoundData(newRoundData)
  }

  const onSetRoundStarted = () => {
    setRoundStarted(true);
  }

  return (
    <div className={classes.app}>
      <CurrentHole currentHole='5'/>
      {/* {!roundData && <RoundForm roundStart={onRoundStartedHandler}/>}
      {roundData && !roundStarted && <AddPlayers data={roundData} onUpdate={onUpdateRoundData} onStart={onSetRoundStarted}/>} */}
    </div>
  );
}

export default App;