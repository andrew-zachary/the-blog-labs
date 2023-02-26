import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        })
    })
});

export const { useGetProductsQuery } = ecommerceApi;