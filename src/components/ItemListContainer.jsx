import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'


const ItemListContainer = () => {
  const {category} = useParams()

const productos = [
    {id: "1", name: "Chocolate suizo", description: "Descripcion del chocolate suizo", category: "Chocolates negros", stock: 10, price: 1000, image: "../public/Chocolatesuizo.jpg"},
    {id: "2", name: "Frutilla", description: "Descripcion de frutilla", category: "Helados de crema", stock: 20, price: 1500, image: "../public/Frutilla.jpg"},
    {id: "3", name: "DDL", description: "Descripcion de DDL", category: "Muy Dulces", stock: 30, price: 2000, image: "../public/Ddl.jpg"},
    {id: "4", name: "Crema americana", description: "Descripcion de crema americana", category: "Cremas blancas", stock: 40, price: 2500, image: "../public/Cremaamericana.jpg"}
   ]

const mostrarProductos = new Promise ((resolve, reject) =>{
  if(productos.length > 0){
    setTimeout(()=>{
      resolve(productos)
    },3000)
  }else{
    reject("no se encontraron productos")
  }
})

mostrarProductos
.then((resultado)=>{
  console.log(resultado)
})
.catch((error)=>{
  console.log(error)
})

const filteredProduct = productos.filter((producto) => producto.category == category)


  return (
    <>
    <Center p="1rem">

     {category ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos}/>}
     
    </Center>
    </>
  )
}

export default ItemListContainer