import React, { useEffect, useState } from 'react'

// chakra ui all component
import { Box, Heading, SimpleGrid, Text, Flex, Image } from '@chakra-ui/react'

// redux Hook
import { useGetCryptosQuery } from '../../Servisec/CryptoApi'


// other Component
import Loadding from '../../OtherComonent/Loadding'

// npm package
import millify from 'millify'
import { Link } from 'react-router-dom'

export default function AllCurrency({count}) {
    // const [count, setcount] = useState(10)
    // const count = 10
    const { data, isFetching, isLoading,status} = useGetCryptosQuery(count)

    const [Coins, setCoins] = useState(null)
   
    useEffect(() => {
        setCoins(data?.data?.coins)
    }, [status])

    if (isLoading) {
        return <Loadding />
    }

    return (<Box >
       

        <SimpleGrid columns={5} spacing={15} p={10} w={'100%'} m={'auto'} bg='rgb(206, 206, 206)'>
            {Coins?.map((curriency) => {
                let { name, iconUrl, price, marketCap, change, rank } = curriency
                return (
                    <Link  key={rank} to={`/crypto/${name}`}>
                    <Box
                        pt={5}
                        borderRadius={8}
                        bg={'white'}
                    // boxShadow='dark-lg' p='6' rounded='md' bg='white'
                    >
                        <Flex
                            justify={'space-around'}
                            align={'center'}
                        >
                            <Heading w={'50%'} fontSize={13} p={0} m={0}>{rank}. {name}</Heading>
                            <Box w={'15%'}>
                                <Image w={'100%'} src={iconUrl} />
                            </Box>
                        </Flex>
                        <Box p={3}>
                            <Text>Price :- {millify(price)}</Text>
                            <Text>MarketCap:-{millify(marketCap)}</Text>
                            <Text>
                                Daily change:
                                {millify(change)}%
                            </Text>
                        </Box >
                    </Box>
                    </Link>
                )

            })}
        </SimpleGrid>
    </Box>
    )
}
