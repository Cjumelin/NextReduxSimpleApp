import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { sidebarSliceReducer } from "../core/uiState/sidebar/sidebarSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({sidebar: sidebarSliceReducer}))

const storeConfigurator = () => configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default storeConfigurator;

export type RootState = ReturnType<typeof persistedReducer>

export const store = storeConfigurator();
export const { dispatch, getState } = store

export const persistor = persistStore(store)
