import './Points.css';

const Points = ({ num, cps }) => {
  return (
    <div className='points-container'>
      <h1 className='points'>{num} {num === 1 ? 'Cake' : 'Cakes'}</h1>
      <h2 className='cps'>{cps} {cps === 1 ? 'Cake' : 'Cakes'} per second</h2>
    </div>
  );
};

export default Points;