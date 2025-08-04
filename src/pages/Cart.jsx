import React, { useState } from 'react'
import { pizzaCart } from '../assets/js/pizzas.js'

const Cart = () => {

    const [carrito, setCarrito] = useState(pizzaCart);
    let totalPrice = 0

    const agregarPizza = (index) => {
        const pizzaItems = [...carrito];
        pizzaItems[index].count += 1;
        setCarrito(pizzaItems);
    }

    const eliminaPizza = (index) => {
        const pizzaItems = [...carrito];
        pizzaItems[index].count -= 1;
        setCarrito(pizzaItems);
    }

  return (
    <div className='container mt-5'>
        <h2 className='text-center mb-4'>Detalle del pedido: </h2>
        {carrito
        .map((pizzaCart,index) => {
            if (pizzaCart.count === 0) {
                return null;
            }
            return (
            <li key={pizzaCart.id} className='listaCompra'>
                <table className="d-flex align-items-center justify-content-center">
                    <tr>
                        <td className='tdCarrito'>
                            <img className='fotopizzacarrito' src={pizzaCart.img} alt={pizzaCart.name} />
                        </td>
                        <td className='tdCarrito'>
                           <h5>{pizzaCart.name}</h5>
                        </td>
                        <td className='tdCarrito'>
                            <h6>$ {pizzaCart.price.toLocaleString('es-CL')}</h6>
                        </td>
                        <td className='tdCarrito1'> 
                            <button onClick={() => eliminaPizza(index)}> - </button>
                        </td>
                        <td className='tdCarrito1'>
                            {pizzaCart.count}
                        </td>
                        <td className='tdCarrito1'>
                            <button onClick={() => agregarPizza(index)}> + </button>
                        </td>
                    </tr>
                </table>
                </li>
            )
            })}
            <div className='text-center mt-5'>
                <h3>Total : $ {totalPrice=carrito.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0).toLocaleString('es-CL')}</h3>
                <button className='btn btn-primary btn-lg mt-3'>Pagar</button>
            </div>
    </div>
  )
}

export default Cart
