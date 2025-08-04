import Header from '../components/Header'
import Cardpizza from '../components/Cardpizza'
//import {pizzas} from '../assets/js/pizzas'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
const [pizzas, setPizzas] = useState([])

  async function getPizzas() {
    try {
      const { data } = await axios.get('http://localhost:5000/api/pizzas');
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
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
          <Cardpizza 
            key={pizza.id}
            desc = {pizza.desc}
            id = {pizza.id}
            img = {pizza.img}
            ingredients = {pizza.ingredients}
            name = {pizza.name}
            price = {pizza.price}
          />
       ))} 
       </div>
      </div>
    </div>
  )
}

export default Home
