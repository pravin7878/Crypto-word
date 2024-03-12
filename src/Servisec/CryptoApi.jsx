import {createApi,fetchBaseQuery}  from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'X-RapidAPI-Key': 'c378d16cd2msh888095c9d837338p17eb1ajsnca927d51c7ba',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }

        const baseUrl = 'https://coinranking1.p.rapidapi.com'

        const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'createApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {useGetCryptosQuery,

} = cryptoApi;