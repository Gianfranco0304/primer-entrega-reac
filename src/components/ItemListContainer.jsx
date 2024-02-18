import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react'

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/data/productos.json'); 
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const filteredProduct = productos.filter((producto) => producto.category === category);

  return (
    <>
      <Center p="1rem">
        {category ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
      </Center>
    </>
  );
};

export default ItemListContainer;