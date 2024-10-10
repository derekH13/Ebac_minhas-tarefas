import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../Util/enums/tarefa'

//se for fazer um objeto, fazer a class dele e usar ele para type(igual tarefa)

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar JavaScript',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Praticar o useEffect',
        2
      ),
      new Tarefa(
        'Estudar React',
        enums.Prioridade.NORMAL,
        enums.Status.CONCLUIDA,
        'Praticar o useEffect',
        3
      ),
      new Tarefa(
        'Estudar TypeScript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Praticar o useEffect',
        4
      ),
      new Tarefa(
        'Estudar css',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Praticar o useEffect',
        5
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      //action.payload acessa o objeto passado no argumento
      const IndexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      //se o findIndex não encontra o objeto ele retorna -1
      if (IndexDaTarefa >= 0) {
        //pega o index correspondente, passa atribuindo com o objeto passado pela props
        state.itens[IndexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const TarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (TarefaJaExiste) {
        alert('ja existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
