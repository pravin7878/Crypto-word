import { Switch } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cryptopage from '../Body/Pages/Cryptopage'
import Exchangepage from '../Body/Pages/Exchangepage'
import Cryptodetail from '../Body/Pages/Cryptodetail'
import LatestNews from '../Body/Pages/LatestNews'
import Home from '../Body/Pages/Home'


export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cryptocurrency' element={<Cryptopage />} />
      <Route path='/exchange' element={<Exchangepage />} />

      <Route path='/cryptonews' element={<LatestNews />} />

      <Route path='/crypto/:coin_id' element={<Cryptodetail />} />
    </Routes>
  )
}
