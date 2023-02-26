import { configureStore } from '@reduxjs/toolkit';

import { ecommerceApi } from './api';
import cart from './slices/cart';

const store = configureStore({
    reducer: {
        'cart': cart,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ecommerceApi.middleware)
});

export default store;