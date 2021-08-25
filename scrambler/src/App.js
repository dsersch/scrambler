import React, { useEffect, useState, useCallback } from 'react';
import classes from './App.module.css';
import AddPlayers from './components/AddPlayers';
import RoundForm from './components/RoundForm';
import CurrentHole from './components/CurrentHole';


function App() {
  const [roundData, setRoundData] = useState({currentHole: '1'})
  const [roundStarted, setRoundStarted] = useState(false)
  const [holeInfo, setHoleInfo] = useState()

  const onRoundStartedHandler = (data) => {
    setRoundData(data)
  }

  const onUpdateRoundData = (newRoundData) => {
    setRoundData(newRoundData)
  }

  const onSetRoundStarted = () => {
    setRoundStarted(true);
  }

  const onHoleChange = () => {
    setRoundData((prevState) => {
      return {...prevState, currentHole: '6'}
    })
  }

  const getHoleInfo = useCallback(async (req, res) => {
    try {
        const res = await fetch(`holeinfo/${roundData.currentHole}`)
        const data = await res.json()
        
        setHoleInfo(data.data[0])
    } catch (err) {
        console.log(err)
    }
  }, [roundData.currentHole]);

  useEffect(() => {
    getHoleInfo()
  }, [getHoleInfo, roundStarted])


  return (
    <div className={classes.app}>
      {!roundData.teamName && <RoundForm roundStart={onRoundStartedHandler}/>}
      {roundData.teamName && !roundStarted && <AddPlayers data={roundData} onUpdate={onUpdateRoundData} onStart={onSetRoundStarted}/>}
      {roundStarted && holeInfo && <CurrentHole hole={holeInfo} holeChange={onHoleChange} />}
    </div>
  );
}

export default App;