import { Box, Flex, Heading, LinkBox, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetCryptosQuery } from '../../Servisec/CryptoApi'
import Loadding from '../../OtherComonent/Loadding';
import millify from 'millify';
import CurrencyStats from '../Home/CurrencyStats';
import AllCurrency from '../Home/AllCurrency';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export default function Home() {

  return (
    <Box border={'solid 2px red'} h={'auto'} >
      <Box>
      <CurrencyStats />
      </Box>

      <Box mt={10}>
        <Flex  align={'center'} justify={'space-between'} w={'80%'} pl={35}>
          <Heading fontSize={{base:20,md:27}}>Top 10 Crypto Currencies In The World</Heading>
          <Box fontSize={25}>
            <Link color={'blue'}>
              <RouterLink
                to={'/cryptocurrency'}>Show More</RouterLink>
            </Link>
          </Box>
        </Flex>

        <AllCurrency count={10} />
      </Box>
    </Box>
  )
}
