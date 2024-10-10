import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../Util/enums/tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    //state para aterar o que esta sendo escrito
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export const { alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
