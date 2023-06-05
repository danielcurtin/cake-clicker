import './App.css';
import { useState, useEffect } from 'react';

import Points from '../Points/Points';
import Cake from '../Cake/Cake';
import Upgrades from '../Upgrades/Upgrades';

const App = () => {
  const [cakes, setCakes] = useState(0);
  const [cps, setCps] = useState(0);
  const [clickPowerLevel, setClickPowerLevel] = useState(1);
  const [clickPowerCost, setClickPowerCost] = useState(100);
  const [partyLevel, setPartyLevel] = useState(0);
  const [partyCost, setPartyCost] = useState(5);
  const [birthdayLevel, setBirthdayLevel] = useState(0);
  const [birthdayCost, setBirthdayCost] = useState(50);
  const [gradLevel, setGradLevel] = useState(0);
  const [gradCost, setGradCost] = useState(500);
  const [marriageLevel, setMarriageLevel] = useState(0);
  const [marriageCost, setMarriageCost] = useState(2500);
  const [cpsInterval, setCpsInterval] = useState(0);

  useEffect(() => {
    clearInterval(cpsInterval);
    setCpsInterval(setInterval(() => setCakes(prevState => prevState + cps), 1000));
  }, [cps]);

  const clickCake = () => setCakes(prevState => prevState + clickPowerLevel);

  const buyUpgrade = (type, buff, cost) => {
    if (cakes < cost) return;
    setCps(prevState => prevState + buff);
    setCakes(prevState => prevState - cost);

    if (type === 'click') {
      setClickPowerLevel(prevState => prevState + 1);
      setClickPowerCost(prevState => prevState * 2);
    } else if (type === 'party') {
      setPartyLevel(prevState => prevState + 1);
      setPartyCost(prevState => prevState * 2);
    } else if (type === 'birthday') {
      setBirthdayLevel(prevState => prevState + 1);
      setBirthdayCost(prevState => prevState * 2);
    } else if (type === 'grad') {
      setGradLevel(prevState => prevState + 1);
      setGradCost(prevState => prevState * 2);
    } else if (type === 'marriage') {
      setMarriageLevel(prevState => prevState + 1);
      setMarriageCost(prevState => prevState * 2);
    }
  };

  return (
    <main>
      <Points num={cakes} cps={cps}/>
      <Cake clickCake={clickCake}/>
      <Upgrades 
        buyUpgrade={buyUpgrade} 
        clickPowerCost={clickPowerCost} 
        clickPowerLevel={clickPowerLevel} 
        partyLevel={partyLevel} 
        partyCost={partyCost} 
        birthdayLevel={birthdayLevel} 
        birthdayCost={birthdayCost} 
        gradLevel={gradLevel} 
        gradCost={gradCost} 
        marriageLevel={marriageLevel} 
        marriageCost={marriageCost}
      />
    </main>
  );
};

export default App;
