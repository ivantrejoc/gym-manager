import { configureStore } from '@reduxjs/toolkit'
import  clientsReducer  from './features/clientsSlice';
import { clientsApi } from '@/app/api/services';
import { setupListeners } from '@reduxjs/toolkit/query';

export const makeStore = configureStore({
    reducer: {
       clients: clientsReducer,
       [clientsApi.reducerPath]: clientsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([clientsApi.middleware])
  })


setupListeners(makeStore.dispatch);


// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>
export type AppDispatch = ['dispatch']