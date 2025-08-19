import { useContext } from 'react'
import Cardpizza from '../components/Cardpizza';
import { useParams } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';

export const Pizza = () => {

  const { pizzas } = useContext(PizzasContext)
  const { id } = useParams()
  const pizza = pizzas.find((pizza) => pizza.id === id);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Cardpizza pizza={pizza} />
        </div>
      </div>
    </div>
  )
}

export default Pizza
