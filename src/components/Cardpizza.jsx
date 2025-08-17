import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {formattedPrice} from '../assets/js/formatedPrice'

//const Cardpizza = ({desc, id, img, ingredients, name, price }) => {
export const Cardpizza = ({pizza}) => {
  const {id,img,name,price,desc,ingredients} = pizza
  const {addToCart} = useContext(CartContext)
  const numericPrice = Number(price);
  // Formatear el número usando toLocaleString
    
  return (
             <div className="col-md-4 mb-4" id={id}> 
            <Card style={{ width: "100%" }}>
                <div className='fotopizza'>
                    <Card.Img variant="top" src={img}/>
                </div>
                <Card.Body className="align-items-center">
                    <Card.Title> <h4>Pizza {name}</h4> </Card.Title>
                    <hr />
                    <Card.Text className="d-flex align-items-center justify-content-center"> Ingredientes:</Card.Text>
                     <ul>
                        {ingredients.map((ingredient, index) => (
                          <li key={index}>🍕 {ingredient}</li>
                        ))}
                      </ul>
                    <hr />
                    <Card.Text className="d-flex align-items-center justify-content-center"> {desc}</Card.Text>
                    <hr />
                    <Card.Text className="d-flex align-items-center justify-content-center"> <strong>Precio : {formattedPrice(price)} </strong></Card.Text>
                    <div className="d-flex justify-content-between mt-3">
                        <Button variant="light">Ver Más 👀 </Button>
                        <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir 🛒 </Button>
                    </div>
                </Card.Body>
                      
            </Card>
    </div>
  )
}

export default Cardpizza
