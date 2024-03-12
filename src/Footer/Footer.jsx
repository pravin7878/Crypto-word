import { Box, Center, Heading,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { Flex } from 'antd'

export default function Footer() {
  return (
   <Box color={'white'} bg={'rgb(0, 21, 41)'} w={'100%'} h={'60px'} m={0} p={0} >
    <Center w={'100%'} display={'flex'} flexDirection={'column'}   alignContent={'center'} >
    <Heading h={'45%'} m={1} p={0}>Crypto World</Heading> 

    <Text h={'45%'} m={1} p={0}>@ All Right Reserve</Text>
 </Center>
   </Box>
  )
}
