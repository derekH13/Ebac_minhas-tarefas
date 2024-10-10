import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../Util/enums/tarefa'
import { alterarFiltro } from '../../store/Reducers/filtro'
import { RootReducer } from '../../store'

//fazendo a props que servirá para o styled
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  //função para verifacar qual esta ativo no momento
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    //fazendo uma comparação e retornan && para saber se as duas são verdadeiras
    return mesmoCriterio && mesmoValor
  }

  const contadorTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.Prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()

  const contador = contadorTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contrador>{contador}</S.Contrador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
