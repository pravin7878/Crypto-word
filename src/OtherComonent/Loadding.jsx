import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { Flex } from 'antd'
export default function Loadding() {
  return (
   <Flex justify='center' align='center'  w={'100vh'} h={'100vw'}>
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>

</Flex>
  
  )
}
