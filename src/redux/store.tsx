import { configureStore } from '@reduxjs/toolkit'
import wishSlice from './wishSlice'

// creating a store
export const store = configureStore({
    reducer: {
        wish: wishSlice,
    },
})