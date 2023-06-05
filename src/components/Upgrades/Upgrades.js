import './Upgrades.css';

const Upgrades = () => {
  return (
    <div className='upgrades'>
      <button className='party'>
        <h3>Party Invite!</h3>
        <p>+1 CPS</p>
        <p>Cost: 5</p>
      </button>
      <button className='birthday'>
        <h3>Your Birthday!</h3>
        <p>+5 CPS</p>
        <p>Cost: 50</p>
      </button>
      <button className='graduate'>
        <h3>Graduation!</h3>
        <p>+10 CPS</p>
        <p>Cost: 500</p>
      </button>
      <button className='marriage'>
        <h3>Marriage!</h3>
        <p>+20 CPS</p>
        <p>Cost: 2500</p>
      </button>
    </div>
  );
};

export default Upgrades;