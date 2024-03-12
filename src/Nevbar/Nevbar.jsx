import { Box, Flex, Heading, Image, Text, HStack, Grid } from '@chakra-ui/react'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import MenuItem from 'antd/es/menu/MenuItem'

import { Link } from 'react-router-dom'

export default function Nevbar() {

  let linkstyle = {
    fontSize: '20px',
    p: '10px',
    fontWeight: '400px'
  }


  return (
    <Box border={'solid 2px black'}  bg={'rgb(0, 21, 41)'} position={'fixed'} w={'20%'} h={'100vh'}>

      {/* Logo and name */}
      <Box display={'flex'} color={'white'} justify={'space-around'} w={'90%'} m={'auto'} alignItems={'center'} mt={5} mb={5}>
        <Box w={{base:'40%', md:'20%'}}>
          <Image src='https://i.ibb.co/Z11pcGG/cryptocurrency.png' w={'100%'} />
        </Box>
        <Heading fontSize={{base:18,md:20}} m={5} w={'80%'}>Crypto World</Heading>
      </Box>

      <Flex flexDirection={'column'} color={'white'} pl={'5'} >
        <Grid templateColumns='repeat(1,1fr)' gap={10}>
          <Menu theme='dark'>
            <MenuItem icon={<HomeOutlined />}>
              <Link to={'/'} {...linkstyle}>Home</Link>
            </MenuItem>

            <MenuItem icon={<FundOutlined />}>
              <Link to={'/cryptocurrency'} {...linkstyle}>Crypto-Currency
              </Link>
            </MenuItem>

            <MenuItem icon={<MoneyCollectOutlined />}>
              <Link to={'/exchange'} {...linkstyle}>Exchange</Link>
            </MenuItem>

            <MenuItem icon={<BulbOutlined />}>
              <Link to={'/cryptonews'} {...linkstyle}>News</Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Flex>
    </Box>
  )
}
