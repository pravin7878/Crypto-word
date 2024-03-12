import { useState } from 'react'
import './App.css'
import AllRoutes from './AllRoutes/AllRoutes'
import Nevbar from './Nevbar/Nevbar'
import Footer from './Footer/Footer'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <Box display={'flex'} justifyContent={'space-around'}>
      <Box w={'20%'}  h={'100vh'}>
        <Nevbar />
      </Box>

      <Box display={'flex'} w={'80%'} flexDirection={'column'}  h={'auto'} m={0} >
        <Box border={'solid 2px red'} h={'auto'}>
          <AllRoutes />
        </Box>
        <Box  h={'auto'}>
          {/* <Footer /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default App
