import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../../../store/store"

export const sidebarInitialState = {
    isOpen: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: sidebarInitialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
})

const { reducer, actions } = sidebarSlice;

export const sidebarSliceReducer = reducer;
export const {open, close} = actions;

export const sidebarSelector = (state: RootState) => state.sidebar