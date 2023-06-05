import './Cake.css';
import cake from '../../assets/cake.png';

const Cake = () => {
  return (
    <>
      <img src={cake} alt="Cartoon slice of cake" className='cake'></img>
    </>
  );
};

export default Cake;