import './Upgrades.css';

const Upgrades = ({ buyUpgrade, clickPowerLevel, clickPowerCost, partyLevel, partyCost, birthdayLevel, birthdayCost, gradLevel, gradCost, marriageLevel, marriageCost }) => {
  return (
    <div className='upgrades'>
      <div className='upgrade'>
        <h2 className='level'>Level: {clickPowerLevel}</h2>
        <button className='party' onClick={() => buyUpgrade('click', 0, clickPowerCost)}>
          <h3>Sugar Rush</h3>
          <p>+1 Click Power</p>
          <p>Cost: {clickPowerCost}</p>
        </button>
      </div>
      <div className='upgrade'>
        <h2 className='level'>Level: {partyLevel}</h2>
        <button className='party' onClick={() => buyUpgrade('party', 1, partyCost)}>
          <h3>Party Invite</h3>
          <p>+1 CPS</p>
          <p>Cost: {partyCost}</p>
        </button>
      </div>
      <div className='upgrade'>
        <h2 className='level'>Level: {birthdayLevel}</h2>
        <button className='birthday' onClick={() => buyUpgrade('birthday', 5, birthdayCost)}>
          <h3>Your Birthday</h3>
          <p>+5 CPS</p>
          <p>Cost: {birthdayCost}</p>
        </button>
      </div>
      <div className='upgrade'>
        <h2 className='level'>Level: {gradLevel}</h2>
        <button className='graduate' onClick={() => buyUpgrade('grad', 25, gradCost)}>
          <h3>Graduation</h3>
          <p>+25 CPS</p>
          <p>Cost: {gradCost}</p>
        </button>
      </div>
      <div className='upgrade'>
        <h2 className='level'>Level: {marriageLevel}</h2>
        <button className='marriage' onClick={() => buyUpgrade('marriage', 100, marriageCost)}>
          <h3>Marriage</h3>
          <p>+100 CPS</p>
          <p>Cost: {marriageCost}</p>
        </button>
      </div>
    </div>
  );
};

export default Upgrades;