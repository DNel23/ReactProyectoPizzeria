import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/pizzas');
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPizzas();
  }, []);


  return (
    <PizzasContext.Provider value={{ pizzas }}>
      {children}
    </PizzasContext.Provider>
  );
};