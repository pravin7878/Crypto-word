import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Loadding from '../../OtherComonent/Loadding'
import axios from 'axios';

export default function LatestNews() {


//   const options = {
//     method: 'GET',
//     url: 'https://google-news13.p.rapidapi.com',
//     params: {
//       keyword: 'facebook',
//       lr: 'en-US'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'c378d16cd2msh888095c9d837338p17eb1ajsnca927d51c7ba',
//       'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
//     }
//   };
  
//   // const url = 'https://google-news13.p.rapidapi.com/latest'

//   const getdata = async ()=>{
//     try {
//       const response = await axios(options)
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

// useEffect(()=>{
// getdata()
// },[])
  return (
    <Box border={'solid 2px red'} h={400}>crypto news
    


    </Box>
  )
}
