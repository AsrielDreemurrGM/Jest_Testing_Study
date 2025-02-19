import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

// Combina os reducers para criar o estado global
const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

// Função para configurar a store, permitindo um estado pré-carregado opcional
export function storeConfig(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

// Tipos globais para o estado da aplicação e store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeConfig>
