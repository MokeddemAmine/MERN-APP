import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaRegPlusSquare, FaShoppingCart, FaSun } from "react-icons/fa";




const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDir={{base:'column',sm:'row'}}>
            <Text
                fontSize={{base:'22',sm:'28'}}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                textAlign={'center'}
                bgGradient={'linear(to-r,cyan.400,blue.500)'}
                bgClip={'text'}
            >
                <Link to={'/'} style={{display:'flex',alignItems:'center',gap:'.5rem'}}>Product Store <FaShoppingCart style={{color:'#3084cf'}}/></Link>
            </Text>
            <HStack spacing={2} alignItems={'center'}>
                <Link to={'/create'}>
                    <Button>
                    <FaRegPlusSquare />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode == 'light'?<FaMoon />:<FaSun />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
