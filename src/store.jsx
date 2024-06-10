import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {userapislice} from './userapi/userapislice.jsx'
import userauth from "./auth/userauth.jsx";



const store = configureStore({
    reducer: {
        [userapislice.reducerPath]: userapislice.reducer,
        auth: userauth,

        
},
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userapislice.middleware),
        devTools: true,
});

setupListeners(store.dispatch);
export default store;