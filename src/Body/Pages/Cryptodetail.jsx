import { Box ,Heading,Text} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptosQuery } from '../../Servisec/CryptoApi'
import millify from 'millify'

export default function Cryptodetail() {
const {coin_id} = useParams()
const { data, isFetching, isLoading,status} = useGetCryptosQuery(100)

const [crypto, setcrypto] = useState(null)
const [serchedData, setserchedData] = useState(null)

crypto?.filter((coin)=>{
if(coin.name=== coin_id){
 setserchedData(coin);
}
})



useEffect(()=>{
  setcrypto(data?.data?.coins)
},[status])

const {
  rank,price,iconurl,btcPrice,change,marketCap
} = serchedData

  return (
    <Box border={'solid 2px red'} h={'380px'} >
     <Heading> Cripto Currecies Ditail</Heading>
     <Box>
     <Image src={crypto?.iconurl}/>
     </Box>
   <Text>{crypto?.name}</Text>
   {/* <Text>Ranking : {crypto?.rank}</Text> */}
   <Text>Price : {millify(crypto?.price)}</Text>
   <Text>Btc Price : {millify(crypto?.btcPrice)}</Text>
   <Text>Market Cap : {millify(crypto?.marketCap)}</Text>
   
     </Box>
  )
}

