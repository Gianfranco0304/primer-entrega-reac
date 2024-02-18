import React from 'react'
import CartWidget from './CartWidget'
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>

<Flex>

  <Box p='4' bg='red.400'>
     {/* brand */}
     <Link to={"/"}>
     <h1>Heladeria JR</h1>
     </Link>
     
  </Box>

<Spacer/>
<Box>
<Menu>
    
  <MenuButton>
    Helados
  </MenuButton>
  <MenuList>

    <MenuItem>
    <Link to={`/category/${"Chocolates negros"}`}> Chocolates negros</Link>
    </MenuItem>

    <MenuItem><Link to={`/category/${"Helados de crema"}`}>Helados de crema</Link>
    </MenuItem>

    <MenuItem><Link to={`/category/${"Muy Dulces"}`}>Muy Dulces</Link>
    </MenuItem>
    
    <MenuItem><Link to={`/category/${"Cremas blancas"}`}>Cremas blancas</Link>
    </MenuItem>
  </MenuList>
    
</Menu>
</Box>
  
  <Spacer />
  <Box p='4' bg='green.400'>
    {/* Carrito */}
    <NavLink to={"/Cart"}>
    <CartWidget />
    </NavLink>
      
    
  </Box>
</Flex>

      
      </div>
  )
  }

export default Navbar