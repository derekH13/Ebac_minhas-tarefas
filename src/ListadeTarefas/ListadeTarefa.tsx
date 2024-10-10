import Tarefa from '../Components/Tarefa/Tarefa'
import { MainContainer as Container } from '../styles/index'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

/* eslint-disable react/no-unescaped-entities */
const ListadeTarefas = () => {
  //pega os valores state do store
  const tarefas = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  //faz a pesquisa pelo que esta no termo(state do input)
  //tambem fazendo ficar um minusculo tando a busca quanto o resultado
  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas.itens
    //termo !== undefined para não considerar a string vazia
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.Prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return tarefas.itens
    }
  }

  const tarefasF = filtraTarefas()

  return (
    <Container>
      <p>
        {' '}
        {tarefasF.length} tarefas marcadas como: "{`${criterio} = ${valor}`}"{' '}
        {termo && termo.length > 0 ? `e "${termo}"` : ''}
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {tarefasF.map((item, index) => (
          <li key={item.titulo}>
            <Tarefa
              id={item.id}
              descricao={item.descricao}
              Prioridade={item.Prioridade}
              status={item.status}
              titulo={item.titulo}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListadeTarefas
