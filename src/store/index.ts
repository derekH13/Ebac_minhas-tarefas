import { configureStore } from '@reduxjs/toolkit'
import TarefasReducers from './Reducers/tarefas'
import filtroReducer from './Reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: TarefasReducers,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
