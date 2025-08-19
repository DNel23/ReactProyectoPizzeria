import React, { useContext } from 'react';
import { Button } from "react-bootstrap";
import { CartContext } from '../context/CartContext.jsx';
import { formattedPrice } from '../assets/js/formatedPrice.js'
import { UserContext } from '../context/userContext.jsx';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);
  const TotalPriceC = getTotalPrice()
  const {token} = useContext(UserContext)

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Detalle del pedido:</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((pizzaCart, index) => (
            <li key={pizzaCart.id} className='listaCompra'>
              <table className="d-flex align-items-center justify-content-center">
                <tbody>
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
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => updateQuantity(pizzaCart.id, pizzaCart.quantity - 1)}
                        disabled={pizzaCart.count === 1}
                        className="me-2"
                      >
                        -
                      </Button>
                    </td>
                    <td className='tdCarrito1'>
                      {pizzaCart.quantity}
                    </td>
                    <td className='tdCarrito1'>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => updateQuantity(pizzaCart.id, pizzaCart.quantity + 1)}
                        className="me-2"
                      >
                        +
                      </Button>
                    </td>
                    <td className='tdCarrito1'>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      )}
      <div className='text-center mt-5'>
        <h3>Total: $ {formattedPrice(TotalPriceC.toLocaleString('es-CL'))} </h3>
        <button className='btn btn-primary btn-lg mt-3' disabled={ !token }>Pagar</button>
      </div>
    </div>
  );
}

export default Cart;