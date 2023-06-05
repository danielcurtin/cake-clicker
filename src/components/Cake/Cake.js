import './Cake.css';
import cake from '../../assets/cake.png';

const Cake = ({ clickCake }) => {
  return (
    <>
      <img src={cake} alt="Cartoon slice of cake" className='cake' onClick={() => clickCake()}></img>
    </>
  );
};

export default Cake;