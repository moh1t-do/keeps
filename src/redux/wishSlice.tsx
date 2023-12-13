import { createSlice } from '@reduxjs/toolkit'
import { wishItem } from '@/types/types'

const wishData: wishItem[] = [];
const initialState = {
    wishData
}

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToList: (state, action) => {
            const item = state.wishData.find(
                (item: wishItem) => item.id === action.payload.id
            )
            state.wishData.push(action.payload);

        },
        removeFromList: (state, action) => {
            const item = state.wishData.find(
                (item: wishItem) => item.id === action.payload.id
            )

            state.wishData = state.wishData.filter((item) => {
                return item.id != action.payload.id
            })
        },
    },
})

export const { addToList, removeFromList } = wishSlice.actions
export default wishSlice.reducer