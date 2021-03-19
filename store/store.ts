import { configureStore } from '@reduxjs/toolkit'
import {sidebarSliceReducer} from "../core/uiState/sidebar/sidebarSlice"

export type RootState = ReturnType<T>

const storeConfigurator = () => configureStore({
    reducer: {
        sidebar: sidebarSliceReducer
    }
});

export default storeConfigurator;