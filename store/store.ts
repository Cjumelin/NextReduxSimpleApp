import { configureStore } from '@reduxjs/toolkit'
import {sidebarSliceReducer} from "../core/uiState/sidebar/sidebarSlice"

import rootReducer  from './rootReducer'

const storeConfigurator = () => configureStore({
    reducer: {
        sidebarSliceReducer}
    }
);

export default storeConfigurator;