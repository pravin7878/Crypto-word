import React, { Component } from 'react'

// chakara component
import { Box, Heading, SimpleGrid,Text } from '@chakra-ui/react'

// Redux Hook
import { useGetCryptosQuery } from '../../Servisec/CryptoApi'

// npm packege for right data puting rigth formate
import millify from 'millify';
import Loadding from '../../OtherComonent/Loadding';

// Other Component
<Loadding/>

export default function CurrencyStats() {

    const {data,isFetching} = useGetCryptosQuery(10);
    const GlobleStats = data?.data?.stats
      if(isFetching){
        return <Loadding/>
      }

  return (
    <Box w={'90%'} m={'auto'} mt={5}>
    <Heading fontSize={{base:20 , md:30}}>Global crypto Stats</Heading>
      <SimpleGrid columns={2} spacing={5} mt={5}>
        <Box>
          <Text>Totel Crypto Currencies</Text>
          <Text fontSize={'20px'} fontWeight={'400'}>{millify(GlobleStats.total)}</Text>
        </Box>
        <Box>
          <Text>Total Exchanges</Text>
          <Text fontSize={'20px'} fontWeight={'400'}>{millify(GlobleStats.totalExchanges)}</Text>
        </Box>
        
        <Box>
          <Text>Total 24 Hours Volume</Text>
          <Text fontSize={'20px'} fontWeight={'400'}>{millify(GlobleStats.total24hVolume)}</Text>
        </Box>
        <Box>
          <Text>Total MarketCap</Text>
          <Text fontSize={'20px'} fontWeight={'400'}>{millify(GlobleStats.totalMarketCap)}</Text>
        </Box>
        <Box>
          <Text>Total Markets</Text>
          <Text fontSize={'20px'} fontWeight={'400'}>{millify(GlobleStats.totalMarkets)}</Text>
        </Box>
        
      </SimpleGrid>
      </Box>
  )
}
