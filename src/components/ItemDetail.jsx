import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Button,Text,Image } from '@chakra-ui/react'


const ItemDetail = ({productos}) => {

  const {id} = useParams()

  const filteredProduct = productos.filter((producto)=>producto.id == id)

  const [cantidad, setCantidad] = useState (0)
  console.log(cantidad)

  console.log(filteredProduct)
  return (
    <>


    {
      filteredProduct.map((p)=> {
        return(
          <Card maxW='sm'>
    <CardBody>
    <Image
      src={p.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={500}
      height={400}
    />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{p.name}</Heading>
        
      </Stack>
    </CardBody>
    <Text>{p.description}</Text>
    <Text>${p.price}</Text>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
          <Button onClick={()=> setCantidad(cantidad - 1)}>-</Button>
          <h2>{cantidad}</h2>
          <Button onClick={()=> setCantidad(cantidad + 1)}>+</Button>

        <Button variant='solid' colorScheme='blue'>
          Agregar al carrito
        </Button>
        
      </ButtonGroup>
    </CardFooter>
  </Card>
        )
      })
    }


    </>
  )
}

export default ItemDetail
