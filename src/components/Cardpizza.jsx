import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cardpizza = ({name, price, ingredients, img}) => {
  const numericPrice = Number(price);
  // Formatear el número usando toLocaleString
  const formattedPrice = numericPrice.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });
  return (
    <div className='cardpizzand1'>
         <Card style={{ width: "25rem" }}>
            <div className='fotopizza'>
                <Card.Img variant="top" src={img}/>
            </div>
            <Card.Body className="align-items-center">
                <Card.Title> <h4>Pizza {name}</h4> </Card.Title>
                <hr />
                <Card.Text className="d-flex align-items-center justify-content-center"> Ingredientes:</Card.Text>
                <Card.Text className="d-flex align-items-center justify-content-center">🍕 {ingredients[0]}, {ingredients[1]}, {ingredients[2]}, {ingredients[3]}</Card.Text>
                <hr />
                <Card.Text className="d-flex align-items-center justify-content-center"> <strong>Precio : {formattedPrice} </strong></Card.Text>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="light">Ver Más 👀 </Button>
                    <Button variant="dark">Añadir 🛒 </Button>
                </div>
            </Card.Body>
                   
        </Card>
    </div>
    
  )
}

export default Cardpizza
