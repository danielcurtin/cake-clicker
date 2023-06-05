import './App.css';
import { useState, useEffect } from 'react';

import Points from '../Points/Points';
import Cake from '../Cake/Cake';
import Upgrades from '../Upgrades/Upgrades';

const App = () => {
  const [cakes, setCakes] = useState(Number(localStorage.cakes) || 0);
  const [cps, setCps] = useState(Number(localStorage.cps) || 0);
  const [clickPowerLevel, setClickPowerLevel] = useState(Number(localStorage.cpl) || 1);
  const [clickPowerCost, setClickPowerCost] = useState(Number(localStorage.cpc) || 100);
  const [partyLevel, setPartyLevel] = useState(Number(localStorage.pl) || 0);
  const [partyCost, setPartyCost] = useState(Number(localStorage.pc) || 5);
  const [birthdayLevel, setBirthdayLevel] = useState(Number(localStorage.bl) || 0);
  const [birthdayCost, setBirthdayCost] = useState(Number(localStorage.bc) || 50);
  const [gradLevel, setGradLevel] = useState(Number(localStorage.gl) || 0);
  const [gradCost, setGradCost] = useState(Number(localStorage.gc) || 500);
  const [marriageLevel, setMarriageLevel] = useState(Number(localStorage.ml) || 0);
  const [marriageCost, setMarriageCost] = useState(Number(localStorage.mc) || 2500);
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
    };
  };

  const save = () => {
    localStorage.setItem('cakes', cakes);
    localStorage.setItem('cps', cps);
    localStorage.setItem('cpl', clickPowerLevel);
    localStorage.setItem('cpc', clickPowerCost);
    localStorage.setItem('pl', partyLevel);
    localStorage.setItem('pc', partyCost);
    localStorage.setItem('bl', birthdayLevel);
    localStorage.setItem('bc', birthdayCost);
    localStorage.setItem('gl', gradLevel);
    localStorage.setItem('gc', gradCost);
    localStorage.setItem('ml', marriageLevel);
    localStorage.setItem('mc', marriageCost);
  };

  const clear = () => {
    localStorage.clear();
    clearInterval(cpsInterval);
    setCakes(0);
    setCps(0);
    setClickPowerLevel(1);
    setClickPowerCost(100);
    setPartyLevel(0);
    setPartyCost(5);
    setBirthdayLevel(0);
    setBirthdayCost(50);
    setGradLevel(0);
    setGradCost(500);
    setMarriageLevel(0);
    setMarriageCost(2500);
    setCpsInterval(0);
  };

  return (
    <main>
      <button className='save' onClick={() => save()}>Save</button>
      <button className='clear' onClick={() => clear()}>Clear</button>
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
