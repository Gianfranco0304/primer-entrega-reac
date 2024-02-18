import React from 'react'
import {Card,CardBody,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button, StepDescription, Image} from "@chakra-ui/react"
import { Link } from 'react-router-dom'


const Item = ({name,image,id}) => {
  return (
    <div>
        <Card maxW='sm'>
    <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={300}
      height={300}
    />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
        <Link to={`/product/${id}`}>
          Ver Detalle
        </Link>
        </Button>

      </ButtonGroup>
    </CardFooter>
  </Card></div>
  )
}

export default Item