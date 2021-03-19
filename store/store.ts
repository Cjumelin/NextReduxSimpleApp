import { configureStore } from '@reduxjs/toolkit'
import {sidebarSliceReducer} from "../core/uiState/sidebar/sidebarSlice"

const storeConfigurator = () => configureStore({
    reducer: {
        sidebar: sidebarSliceReducer
    }
});

export default storeConfigurator;