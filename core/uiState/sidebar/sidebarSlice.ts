import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../store/rootReducer'

export const sidebarInitialState = {
    isOpen: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: sidebarInitialState,
    reducers: {
        open: ({isOpen}) => {
            isOpen = true;
        },
        close: ({isOpen}) => {
            isOpen = false;
        },
    },
})

const { reducer, actions } = sidebarSlice;

export const sidebarSliceReducer = reducer;
export const {open, close} = actions;

export const sidebarSelector = (state: RootState) => state.sidebar