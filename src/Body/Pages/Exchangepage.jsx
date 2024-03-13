import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import axios from 'axios';
export default function Exchangepage() {


  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc',
      rank:5
    },
    headers: {
      'X-RapidAPI-Key': 'c378d16cd2msh888095c9d837338p17eb1ajsnca927d51c7ba',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  
  
  const getData = async ()=>{
    
    try {
      const response = await axios(options);
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  useEffect(()=>{
  getData()
  },[])

  return (
    <Box border={'solid 2px red'} h={'380px'} >Exchange</Box>
  )
}
