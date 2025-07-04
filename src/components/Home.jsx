import Header from './Header'
import Cardpizza from './Cardpizza'

const Home = () => {
  return (
    <div>
      <Header />
      <section className='cardpizzand'>
        <Cardpizza 
            name = "Napolitana"
            price = {5950}
            ingredients = {["mozzarella","tomates","jamón","orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
        <Cardpizza 
            name = "Española"
            price = {6950}
            ingredients = {["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <Cardpizza 
            name = "Peperoni"
            price = {6950}
            ingredients = {["mozzarella","pepperoni","orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
      </section>
    </div>
  )
}

export default Home
