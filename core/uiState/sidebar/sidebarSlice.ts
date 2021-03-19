import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/rootReducer'

export const sidebarInitialState = {
    isOpen: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: sidebarInitialState,
    reducers: {
        setIsOpen: ({isOpen}, {payload}: PayloadAction) => {
            isOpen = !isOpen;
        }
    },
})

export const sidebarSliceReducer = sidebarSlice.reducer;

export const sidebarSelector = (state: RootState) => state.sidebar