import axios from 'axios'
import { useEffect, useState } from 'react'
import Cardpizza from './Cardpizza';

const Pizza = () => {

const [pizza, setPizzas] = useState({ ingredients : []})

  async function getPizzas() {
    try {
      const { data } = await axios.get('http://localhost:5000/api/pizzas/p001');
      setPizzas(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Cardpizza
            desc = {pizza.desc}
            id = {pizza.id}
            img = {pizza.img}
            ingredients = {pizza.ingredients}
            name = {pizza.name}
            price = {pizza.price}
          />
    
       </div>
      </div>
    </div>
  )
}

export default Pizza
