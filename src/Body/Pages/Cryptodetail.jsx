import { Box ,Text} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptosQuery } from '../../Servisec/CryptoApi'

export default function Cryptodetail() {
const {coin_id} = useParams()
const { data, isFetching, isLoading,status} = useGetCryptosQuery(100)

const [crypto, setcrypto] = useState(null)

// console.log(data?.data);
if(data?.data?.name === coin_id){
  console.log(data?.data);
}

useEffect(()=>{

},[data])
  return (
    <Box border={'solid 2px red'} h={'380px'} >Cripto Ditail
     <Text>{coin_id}</Text>
     </Box>
  )
}

