import React, { useEffect, useState, useCallback } from 'react';
import classes from './App.module.css';
import AddPlayers from './components/AddPlayers';
import RoundForm from './components/RoundForm';
import CurrentHole from './components/CurrentHole';
import Nav from './components/Layout/Nav'


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

  const onNextHoleChange = () => {
    setRoundData((prevState) => {
      let nextHole
      if (prevState.currentHole === '18') {
        nextHole = '1'
      } else {
        nextHole = roundData.currentHole++
      }
      return {...prevState, currentHole: nextHole.toString()}
    })
  }

  const onPrevHoleChange = () => {
    setRoundData((prevState) => {
      let prevHole
      if (prevState.currentHole === '1') {
        prevHole = '18'
      } else {
        prevHole = roundData.currentHole--
      }
      return {...prevState, currentHole: prevHole.toString()}
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
      <Nav />
      {!roundData.teamName && <RoundForm roundStart={onRoundStartedHandler}/>}
      {roundData.teamName && !roundStarted && <AddPlayers data={roundData} onUpdate={onUpdateRoundData} onStart={onSetRoundStarted}/>}
      {roundStarted && holeInfo && <CurrentHole roundData={roundData} hole={holeInfo} nextChange={onNextHoleChange} prevChange={onPrevHoleChange}/>}
    </div>
  );
}

export default App;