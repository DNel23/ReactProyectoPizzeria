import Header from '../components/Header'
import Cardpizza from '../components/Cardpizza'
//import {pizzas} from '../assets/js/pizzas'
//import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { PizzasContext } from '../context/PizzasContext'

const Home = () => {
  const { pizzas } = useContext(PizzasContext)
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map(pizza => <Cardpizza key={pizza.id} pizza={pizza} />)}
        </div>
      </div>
    </div>
  )
}

export default Home
