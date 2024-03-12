import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AllCurrency from '../Home/AllCurrency'
import Footer from '../../Footer/Footer'

export default function Cryptopage() {
  return (<Box>
    <Heading 
    fontSize={{ base: 20, md: 27 }}
    ml={35}
    mt={5}
    >Top 100 Crypto Currencies In The World
    </Heading>

    <AllCurrency count={100} />

    <Footer/>
  </Box>
  )
}
