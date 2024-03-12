import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Servisec/CryptoApi";

import { setupListeners } from '@reduxjs/toolkit/query/react';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),

});
// setupListeners(store.dispatch)