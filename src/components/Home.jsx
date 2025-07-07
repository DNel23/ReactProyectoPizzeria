import Header from './Header'
import Cardpizza from './Cardpizza'
import {pizzas} from '../assets/js/pizzas'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
          <Cardpizza
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
