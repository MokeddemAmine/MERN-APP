import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {  IoMdRocket } from "react-icons/io";
import { FaFaceSadTear } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';


const HomePage = () => {
  const {fetchProducts,products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
      
        <Text fontSize={'30'} fontWeight={'bold'} bgGradient={'linear(to-r,cyan.400,blue.500)'} bgClip={'text'} textAlign={'center'} style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
          Current Products <IoMdRocket style={{color:'#3084cf',transform:'rotate(45deg)'}}/>
        </Text>

        <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={10} w={'full'}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        {products.length == 0 && (
          <Text fontSize='xl' textAlign={'center'} fontWeight='bold' color="gray.500" style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
          No products found <FaFaceSadTear color='#e4c50d' /> {" "}
          <Link to={'/create'}>
            <Text as='span' color='blue.500' _hover={{textDecoration:'underline'}}>
              Create a product
            </Text>
          </Link>
        </Text>
        )}
        
      </VStack>
    </Container>
  )
}

export default HomePage
